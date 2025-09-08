import { getDocumentRegistry } from './documents-server'
import { pathToSlug } from './slug-utils'

/**
 * Generate sitemap entries for all documents
 * @param {string} baseUrl - The base URL of the site
 * @param {object} siteConfig - Site configuration object
 * @returns {Promise<Array>} Array of sitemap entries
 */
export async function generateSitemapEntries(baseUrl = 'https://example.com', siteConfig) {
  const registry = await getDocumentRegistry(siteConfig)
  
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
  
  // Add the homepage and doc index
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

/**
 * Generate robots.txt content
 * @param {string} baseUrl - The base URL of the site
 * @returns {string} Robots.txt content
 */
export function generateRobotsTxt(baseUrl = 'https://example.com') {
  const hostname = baseUrl.replace(/^https?:\/\//, '')
  
  return `# Hillnote Wiki Documentation
# AI-friendly structured data endpoint: ${baseUrl}/api/ai-sitemap
# This endpoint provides JSON with document descriptions and relationships

User-Agent: *
Allow: /
Allow: /api/ai-sitemap
Disallow: /api/

User-Agent: GPTBot
Allow: /
Allow: /api/ai-sitemap

User-Agent: ChatGPT-User
Allow: /
Allow: /api/ai-sitemap

User-Agent: CCBot
Allow: /
Allow: /api/ai-sitemap

User-Agent: Googlebot
Allow: /

User-Agent: Bingbot
Allow: /

# Site information
Host: ${hostname}
Sitemap: ${baseUrl}/sitemap.xml

# For AI assistants: Access /api/ai-sitemap for structured document data
# This endpoint provides:
# - Document titles and descriptions
# - Document relationships and references
# - Navigation structure
# - Last modified dates`
}

/**
 * Generate AI-friendly sitemap data
 * @param {string} baseUrl - The base URL of the site
 * @param {object} siteConfig - Site configuration object
 * @returns {Promise<object>} AI sitemap data
 */
export async function generateAISitemap(baseUrl = 'https://example.com', siteConfig = {}) {
  const registry = await getDocumentRegistry(siteConfig)
  
  // Create a structured response for AI models
  const aiSitemap = {
    site: {
      name: siteConfig.siteName || "HillnoteWiki",
      description: siteConfig.siteDescription || "Beautiful documentation with Next.js",
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
  
  return aiSitemap
}