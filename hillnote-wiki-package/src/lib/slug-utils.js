// Convert a document path to a URL-friendly slug
export function pathToSlug(path) {
  return path
    .replace('documents/', '')
    .replace('.md', '')
    .replace(/&/g, 'and')            // Replace & with 'and'
    .toLowerCase()
    .replace(/\s+/g, '-')            // Replace spaces with hyphens
    .replace(/[^\w\-\/]+/g, '')      // Remove special characters except hyphens and slashes
    .replace(/\-\-+/g, '-')          // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '')              // Remove leading hyphens
    .replace(/-+$/, '')              // Remove trailing hyphens
}

// Store the slug mappings
let slugToPathMap = null
let pathToSlugMap = null

// Initialize slug mappings from registry
export async function initializeSlugMapping(siteConfig) {
  const { fetchWorkspaceRegistry } = await import('./workspace')
  const registry = await fetchWorkspaceRegistry(siteConfig)
  
  if (!registry) {
    return false
  }
  
  slugToPathMap = new Map()
  pathToSlugMap = new Map()
  
  // Map all documents
  registry.documents?.forEach(doc => {
    const slug = pathToSlug(doc.path)
    slugToPathMap.set(slug, doc.path)
    pathToSlugMap.set(doc.path, slug)
  })
  
  return true
}

// Convert a slug back to a document path
export function slugToPath(slug) {
  if (!slugToPathMap) {
    console.warn('Slug mapping not initialized, using fallback')
    // Fallback to simple conversion
    return `documents/${slug}.md`
  }
  
  return slugToPathMap.get(slug) || `documents/${slug}.md`
}

// Create a bidirectional mapping for documents
export function createSlugMap(documents) {
  const slugMap = new Map()
  const pathMap = new Map()
  
  documents.forEach(doc => {
    const slug = pathToSlug(doc.path)
    slugMap.set(slug, doc.path)
    pathMap.set(doc.path, slug)
  })
  
  return { slugMap, pathMap }
}