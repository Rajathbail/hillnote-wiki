import { NextResponse } from 'next/server'
import { getDocumentByPath } from '@/lib/documents-server'

// GET /api/document/[...path] - Get specific document content
export async function GET(request, { params }) {
  try {
    const document = await getDocumentByPath(params.path || [])
    
    if (!document) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Document not found' 
        },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      document: {
        title: document.title,
        description: document.description,
        content: document.content,
        headings: document.headings,
        lastModified: document.lastModified,
        path: document.path,
        url: `/doc/${document.path}`,
        frontmatter: document.frontmatter
      }
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      }
    })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch document',
        message: error.message 
      },
      { status: 500 }
    )
  }
}