import { notFound } from 'next/navigation'
import { 
  getAllDocumentPaths, 
  getDocumentByPath, 
  generateBreadcrumbs,
  getRelatedDocuments 
} from '../lib/documents-server'

/**
 * Document page server component
 * Usage: Use this in your app/doc/[...path]/page.js file
 * 
 * @example
 * // app/doc/[...path]/page.js
 * import { DocumentPage, generateStaticParams, generateMetadata } from '@hillnote/wiki/routes/document-page'
 * 
 * export { generateStaticParams, generateMetadata }
 * export default DocumentPage
 */

// Get default site config from environment
function getDefaultSiteConfig() {
  return {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'HillnoteWiki',
    siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Beautiful documentation with Next.js',
    workspace: {
      path: process.env.NEXT_PUBLIC_WORKSPACE_PATH || '/Welcome to Hillnote! /',
      enabled: true,
      documentsFolder: 'documents',
      registryFile: 'documents-registry.json',
      initialFile: process.env.NEXT_PUBLIC_INITIAL_FILE || 'documents/Start Here .md'
    }
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const siteConfig = getDefaultSiteConfig()
  const document = await getDocumentByPath(params.path || [], siteConfig)
  
  if (!document) {
    return {
      title: 'Document Not Found',
      description: 'The requested document could not be found.'
    }
  }
  
  const title = `${document.title} | ${siteConfig.siteName}`
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/doc/${params.path?.join('/')}`
  
  return {
    title,
    description: document.description,
    openGraph: {
      title,
      description: document.description,
      url,
      siteName: siteConfig.siteName,
      type: 'article',
      publishedTime: document.lastModified,
      modifiedTime: document.lastModified,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: document.description,
    },
    alternates: {
      canonical: url
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Generate static params for all documents
export async function generateStaticParams() {
  const siteConfig = getDefaultSiteConfig()
  const paths = await getAllDocumentPaths(siteConfig)
  return paths
}

// Document page component
export default async function DocumentPage({ params }) {
  const siteConfig = getDefaultSiteConfig()
  const document = await getDocumentByPath(params.path || [], siteConfig)
  
  if (!document) {
    notFound()
  }
  
  const breadcrumbs = generateBreadcrumbs(params.path || [])
  const relatedDocuments = await getRelatedDocuments(params.path?.join('/') || '', siteConfig)
  
  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: document.title,
    description: document.description,
    datePublished: document.lastModified,
    dateModified: document.lastModified,
    author: {
      '@type': 'Organization',
      name: siteConfig.siteName
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}${crumb.path}`
      }))
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/doc/${params.path?.join('/')}`
    }
  }
  
  // Import the client component dynamically to avoid SSR issues
  const { DocumentClient } = await import('../components/document-client')
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DocumentClient 
        documentPath={document.path}
        document={document}
        breadcrumbs={breadcrumbs}
        relatedDocuments={relatedDocuments}
        siteConfig={siteConfig}
      />
    </>
  )
}