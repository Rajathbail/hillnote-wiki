"use client"

import React from 'react'
import { FileText, FolderOpen, ExternalLink, Layers } from 'lucide-react'

export function RelatedDocuments({ documents, onDocumentClick }) {
  if (!documents || documents.length === 0) {
    return (
      <div className="text-sm text-muted-foreground text-center py-8">
        No related documents found
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {documents.map((doc, index) => (
        <button
          key={index}
          onClick={() => onDocumentClick?.(doc.path)}
          className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-border transition-all text-left group"
        >
          <div className="flex-shrink-0">
            {doc.emoji ? (
              <span className="text-lg">{doc.emoji}</span>
            ) : doc.isFolder ? (
              <FolderOpen className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            ) : (
              <Layers className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium group-hover:text-primary transition-colors truncate">
              {doc.title}
            </div>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        </button>
      ))}
    </div>
  )
}