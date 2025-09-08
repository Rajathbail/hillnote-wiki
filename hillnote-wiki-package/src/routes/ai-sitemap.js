import { generateAISitemap } from '../lib/seo-utils'

/**
 * AI-friendly sitemap endpoint
 * Usage: Export this from your app/api/ai-sitemap/route.js file
 * 
 * @example
 * // app/api/ai-sitemap/route.js
 * export { GET } from '@hillnote/wiki/routes/ai-sitemap'
 */
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  // Get the site config from environment or use defaults
  const siteConfig = {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'HillnoteWiki',
    siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Beautiful documentation with Next.js',
    workspace: {
      path: process.env.NEXT_PUBLIC_WORKSPACE_PATH || '/Welcome to Hillnote! /',
      enabled: true,
      documentsFolder: 'documents',
      registryFile: 'documents-registry.json'
    }
  }
  
  const aiSitemap = await generateAISitemap(baseUrl, siteConfig)
  
  return Response.json(aiSitemap, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}