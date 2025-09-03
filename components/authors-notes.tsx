"use client"

import React from 'react'
import { User, Calendar, MessageSquare } from 'lucide-react'

interface Comment {
  id: string
  text: string
  author?: string
  timestamp?: string
  parentId?: string | null
}

interface AuthorsNotesProps {
  comments: Comment[]
}

export function AuthorsNotes({ comments }: AuthorsNotesProps) {
  if (!comments || comments.length === 0) {
    return (
      <div className="text-sm text-muted-foreground text-center py-8">
        No comments yet
      </div>
    )
  }

  // Organize comments by parent/child relationship
  const rootComments = comments.filter(c => !c.parentId)
  const childComments = comments.filter(c => c.parentId)
  
  const getChildComments = (parentId: string): Comment[] => {
    return childComments.filter(c => c.parentId === parentId)
  }

  const renderComment = (comment: Comment, depth: number = 0, isReply: boolean = false) => {
    const children = getChildComments(comment.id)
    const initials = comment.author ? comment.author.charAt(0).toUpperCase() : 'A'
    
    return (
      <div key={comment.id} className={`${depth > 0 ? 'ml-12' : ''} group`}>
        <div className={`${isReply ? 'pl-0' : ''}`}>
          <div className="flex gap-3">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <span className="text-sm font-medium text-emerald-500">
                  {initials}
                </span>
              </div>
            </div>
            
            {/* Comment Content */}
            <div className="flex-1">
              {/* Author and Metadata */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground">
                  {comment.author || 'Anonymous'}
                </span>
                {comment.timestamp && (
                  <>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(comment.timestamp).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </>
                )}
              </div>
              
              {/* Comment Text */}
              <div className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                {comment.text}
              </div>
              
              {/* Reply indicator */}
              {children.length > 0 && (
                <div className="mt-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <MessageSquare className="h-3 w-3" />
                    <span>{children.length} {children.length === 1 ? 'reply' : 'replies'}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Render child comments */}
          {children.length > 0 && (
            <div className="mt-4 space-y-4">
              {children.map(child => renderComment(child, depth + 1, true))}
            </div>
          )}
        </div>
        
        {/* Separator between root comments */}
        {depth === 0 && !isReply && (
          <div className="border-b border-border/50 my-6 last:border-0" />
        )}
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {rootComments.map(comment => renderComment(comment))}
    </div>
  )
}