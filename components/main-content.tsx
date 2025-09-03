"use client"

import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MarkdownRenderer } from '@/components/markdown-renderer'

interface MainContentProps {
  selectedFile: string | null
  onFileSelect?: (path: string) => void
}

export function MainContent({ selectedFile, onFileSelect }: MainContentProps) {
  return (
    <ScrollArea className="h-full">
      <MarkdownRenderer filePath={selectedFile} onFileSelect={onFileSelect} />
    </ScrollArea>
  )
}