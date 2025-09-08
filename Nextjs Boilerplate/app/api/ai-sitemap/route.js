import { getDocumentRegistry } from '@/lib/documents-server'
import { pathToSlug } from '@/lib/slug-utils'

export async function GET(request) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const registry = await getDocumentRegistry()
  
  // Create a structured response for AI models
  const aiSitemap = {
    site: {
      name: "HillnoteWiki",
      description: "Beautiful documentation with Next.js and Shadcn UI",
      baseUrl: baseUrl,
    },
    documents: registry.documents?.map(doc => {
      const slug = pathToSlug(doc.path)
      return {
        title: doc.name,
        url: `${baseUrl}/doc/${slug}`,
        path: doc.path,
        description: doc.description || `Documentation page: ${doc.name}`,
        emoji: doc.emoji,
        lastModified: doc.lastModified,
        references: {
          referencedIn: doc.referencedIn || [],
          containsReferencesTo: doc.containsReferencesTo || []
        },
        type: doc.type
      }
    }) || [],
    navigation: {
      home: baseUrl,
      documentation: `${baseUrl}/doc`,
      aiSitemap: `${baseUrl}/api/ai-sitemap`,
      standardSitemap: `${baseUrl}/sitemap.xml`
    },
    metadata: {
      totalDocuments: registry.documents?.length || 0,
      lastUpdated: new Date().toISOString(),
      format: "This endpoint provides structured JSON data optimized for AI crawlers and language models"
    }
  }

  return Response.json(aiSitemap, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
    }
  })
}