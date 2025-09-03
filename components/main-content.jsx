"use client"

import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export function MainContent({ selectedFile, onFileSelect }) {
  return (
    <ScrollArea className="h-full">
      <MarkdownRenderer filePath={selectedFile} onFileSelect={onFileSelect} />
    </ScrollArea>
  )
}