"use client"

import React, { useState } from 'react'
import { AuthorsNotes } from './authors-notes'
import { RelatedDocuments } from './related-documents'
import { siteConfig } from '@/config/site.config'
import { cn } from '@/lib/utils'

interface Comment {
  id: string
  text: string
  author?: string
  timestamp?: string
  parentId?: string | null
}

interface RelatedDocument {
  path: string
  title: string
  emoji?: string
}

interface DocumentFooterProps {
  comments: Comment[]
  relatedDocuments: RelatedDocument[]
  onDocumentClick?: (path: string) => void
}

export function DocumentFooter({ comments, relatedDocuments, onDocumentClick }: DocumentFooterProps) {
  const [activeTab, setActiveTab] = useState('related')
  
  const showAuthorsNotes = siteConfig.ui.authorsNotes?.enabled && comments.length > 0
  const showRelated = siteConfig.ui.relatedDocuments?.enabled && relatedDocuments.length > 0
  
  // Don't render anything if both sections are disabled or empty
  if (!showAuthorsNotes && !showRelated) {
    return null
  }
  
  // If only one section is available, show it without tabs
  if (showAuthorsNotes && !showRelated) {
    return (
      <div className="mt-12 pt-8">
        <h2 className="text-lg font-semibold mb-6">{siteConfig.ui.authorsNotes?.title || "Author's Notes"}</h2>
        <AuthorsNotes comments={comments} />
      </div>
    )
  }
  
  if (showRelated && !showAuthorsNotes) {
    return (
      <div className="mt-12 pt-8">
        <h2 className="text-lg font-semibold mb-6">{siteConfig.ui.relatedDocuments?.title || "Related Documents"}</h2>
        <RelatedDocuments documents={relatedDocuments} onDocumentClick={onDocumentClick} />
      </div>
    )
  }
  
  // Both sections are available, show custom tabs with underline style
  return (
    <div className="mt-12 pt-8">
      {/* Custom Tab Headers - HillnoteApp Style */}
      <div className="flex items-center gap-8 mb-8 border-b border-border">
        <button
          onClick={() => setActiveTab('related')}
          className={cn(
            "pb-2 px-1 text-sm font-medium transition-all relative",
            activeTab === 'related' 
              ? "text-foreground font-bold" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <div className="flex items-center">
            <span>Related Documents</span>
            <span className="text-xs text-muted-foreground ml-1">
              ({relatedDocuments.length})
            </span>
          </div>
          {activeTab === 'related' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
        
        <button
          onClick={() => setActiveTab('comments')}
          className={cn(
            "pb-2 px-1 text-sm font-medium transition-all relative",
            activeTab === 'comments' 
              ? "text-foreground font-bold" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <div className="flex items-center">
            <span>Notes</span>
            <span className="text-xs text-muted-foreground ml-1">
              ({comments.length})
            </span>
          </div>
          {activeTab === 'comments' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
      </div>
      
      {/* Tab Content */}
      <div className="mt-2">
        {activeTab === 'related' && (
          <RelatedDocuments 
            documents={relatedDocuments} 
            onDocumentClick={onDocumentClick}
          />
        )}
        
        {activeTab === 'comments' && (
          <AuthorsNotes comments={comments} />
        )}
      </div>
    </div>
  )
}