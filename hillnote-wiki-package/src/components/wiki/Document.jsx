import React, { useState, useEffect } from 'react'
import { NavigationSidebar } from '../navigation-sidebar'
import { TableOfContents } from '../table-of-contents'
import { MarkdownRenderer } from '../markdown-renderer'
import { ScrollArea } from '../ui/scroll-area'

export const Document = ({
  initialFile = null,
  showNavigation = true,
  showTableOfContents = true,
  navigationTitle = 'All Pages',
  tocTitle = 'On This Page',
  className = '',
  onFileSelect: onFileSelectProp
}) => {
  const [selectedFile, setSelectedFile] = useState(initialFile)

  useEffect(() => {
    setSelectedFile(initialFile)
  }, [initialFile])

  const handleFileSelect = (file) => {
    setSelectedFile(file)
    onFileSelectProp?.(file)
  }

  const getGridColumns = () => {
    if (showNavigation && showTableOfContents) return 'grid-cols-5'
    if (showNavigation || showTableOfContents) return 'grid-cols-4'
    return 'grid-cols-1'
  }

  const getMainColumns = () => {
    if (showNavigation && showTableOfContents) return 'col-span-3'
    if (showNavigation || showTableOfContents) return 'col-span-3'
    return 'col-span-1'
  }

  return (
    <div className={`flex-1 overflow-hidden ${className}`}>
      <div className={`h-full grid ${getGridColumns()} gap-0 max-w-8xl mx-auto`}>
        
        {/* Left Sidebar - Navigation */}
        {showNavigation && (
          <aside className="col-span-1 border-r border-border border-dashed overflow-y-auto">
            <NavigationSidebar 
              showTitle={true}
              title={navigationTitle}
              onFileSelect={handleFileSelect}
              selectedFile={selectedFile}
            />
          </aside>
        )}

        {/* Center - Main Content */}
        <main className={`bg-background overflow-y-auto ${getMainColumns()}`}>
          <ScrollArea className="h-full">
            <MarkdownRenderer 
              filePath={selectedFile} 
              onFileSelect={handleFileSelect} 
            />
          </ScrollArea>
        </main>

        {/* Right Sidebar - Table of Contents */}
        {showTableOfContents && (
          <aside className="col-span-1 overflow-y-auto">
            <TableOfContents 
              showTitle={true}
              title={tocTitle}
            />
          </aside>
        )}
      </div>
    </div>
  )
}