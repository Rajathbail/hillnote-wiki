import { notFound } from 'next/navigation'
import { 
  getAllDocumentPaths, 
  getDocumentByPath, 
  generateBreadcrumbs,
  getRelatedDocuments 
} from '@/lib/documents-server'
import { siteConfig } from '@/config/site.config'
import DocumentClient from './document-client'

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const document = await getDocumentByPath(params.path || [])
  
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
  const paths = await getAllDocumentPaths()
  return paths
}

// Server component for document page
export default async function DocumentPage({ params }) {
  const document = await getDocumentByPath(params.path || [])
  
  if (!document) {
    notFound()
  }
  
  const breadcrumbs = generateBreadcrumbs(params.path || [])
  const relatedDocuments = await getRelatedDocuments(params.path?.join('/') || '')
  
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
      />
    </>
  )
}