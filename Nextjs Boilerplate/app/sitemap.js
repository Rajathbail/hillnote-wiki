import { getDocumentRegistry } from '@/lib/documents-server'
import { pathToSlug } from '@/lib/slug-utils'

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const registry = await getDocumentRegistry()
  
  // Create sitemap entries for all documents
  const documentEntries = registry.documents?.map(doc => {
    // Use the same slug conversion as the routing
    const slug = pathToSlug(doc.path)
    
    return {
      url: `${baseUrl}/doc/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    }
  }) || []
  
  // Add the homepage
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/doc`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    }
  ]
  
  return [...staticPages, ...documentEntries]
}