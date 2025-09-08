import { NextResponse } from 'next/server'
import { getDocumentRegistry } from '@/lib/documents-server'

// GET /api/documents - List all documents
export async function GET() {
  try {
    const registry = await getDocumentRegistry()
    
    // Transform documents for API response
    const documents = registry.documents?.map(doc => ({
      title: doc.path.split('/').pop()?.replace('.md', ''),
      path: doc.path.replace('documents/', '').replace('.md', ''),
      url: `/doc/${doc.path.replace('documents/', '').replace('.md', '')}`,
      emoji: doc.emoji,
      category: doc.path.split('/').slice(1, -1).join('/') || 'root'
    })) || []
    
    // Group by category
    const categorized = documents.reduce((acc, doc) => {
      if (!acc[doc.category]) {
        acc[doc.category] = []
      }
      acc[doc.category].push(doc)
      return acc
    }, {})
    
    return NextResponse.json({
      success: true,
      total: documents.length,
      documents,
      categorized,
      folders: registry.folders || []
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      }
    })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch documents',
        message: error.message 
      },
      { status: 500 }
    )
  }
}