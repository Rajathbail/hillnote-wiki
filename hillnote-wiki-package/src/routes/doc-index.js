import { redirect } from 'next/navigation'
import { getDocumentRegistry } from '../lib/documents-server'
import { pathToSlug } from '../lib/slug-utils'

/**
 * Doc index page that redirects to the first document
 * Usage: Export this from your app/doc/page.js file
 * 
 * @example
 * // app/doc/page.js
 * export { default } from '@hillnote/wiki/routes/doc-index'
 */
export default async function DocIndexPage() {
  const siteConfig = {
    workspace: {
      path: process.env.NEXT_PUBLIC_WORKSPACE_PATH || '/Welcome to Hillnote! /',
      enabled: true,
      documentsFolder: 'documents',
      registryFile: 'documents-registry.json',
      initialFile: process.env.NEXT_PUBLIC_INITIAL_FILE || 'documents/Start Here .md'
    }
  }
  
  // Try to use the initial file from config first
  if (siteConfig.workspace.initialFile) {
    const slug = pathToSlug(siteConfig.workspace.initialFile)
    redirect(`/doc/${slug}`)
  }
  
  // Otherwise, get the first document from the registry
  const registry = await getDocumentRegistry(siteConfig)
  
  if (registry.documents && registry.documents.length > 0) {
    const firstDoc = registry.documents[0]
    const slug = pathToSlug(firstDoc.path)
    redirect(`/doc/${slug}`)
  }
  
  // If no documents found, redirect to home
  redirect('/')
}