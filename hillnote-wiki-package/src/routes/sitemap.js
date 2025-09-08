import { generateSitemapEntries } from '../lib/seo-utils'

/**
 * Next.js sitemap route handler
 * Usage: Export this from your app/sitemap.js file
 * 
 * @example
 * // app/sitemap.js
 * export { default } from '@hillnote/wiki/routes/sitemap'
 */
export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  // Get the site config from environment or use defaults
  const siteConfig = {
    workspace: {
      path: process.env.NEXT_PUBLIC_WORKSPACE_PATH || '/Welcome to Hillnote! /',
      enabled: true,
      documentsFolder: 'documents',
      registryFile: 'documents-registry.json'
    }
  }
  
  return await generateSitemapEntries(baseUrl, siteConfig)
}