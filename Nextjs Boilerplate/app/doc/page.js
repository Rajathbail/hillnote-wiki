import { redirect } from 'next/navigation'
import { getDocumentRegistry } from '@/lib/documents-server'
import { pathToSlug } from '@/lib/slug-utils'
import { siteConfig } from '@/config/site.config'

export default async function DocIndexPage() {
  // Try to use the initial file from config first
  if (siteConfig.workspace.initialFile) {
    const slug = pathToSlug(siteConfig.workspace.initialFile)
    redirect(`/doc/${slug}`)
  }
  
  // Otherwise, get the first document from the registry
  const registry = await getDocumentRegistry()
  
  if (registry.documents && registry.documents.length > 0) {
    const firstDoc = registry.documents[0]
    const slug = pathToSlug(firstDoc.path)
    redirect(`/doc/${slug}`)
  }
  
  // If no documents found, redirect to home
  redirect('/')
}