"use client"

import { useState, useEffect } from 'react'
import { NavigationSidebar, TableOfContents, Navbar, MarkdownRenderer } from '@hillnote/wiki'
import { Menu, List, ChevronRight, X } from 'lucide-react'

export default function ResponsiveWikiLayout({ siteConfig, onFileSelect }) {
  const [selectedFile, setSelectedFile] = useState(siteConfig?.workspace?.initialFile || null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [mobileTocOpen, setMobileTocOpen] = useState(false)

  // Handle file selection
  const handleFileSelect = (filePath) => {
    if (!filePath) return
    setSelectedFile(filePath)
    onFileSelect?.(filePath)
    // Close mobile nav when file is selected
    setMobileNavOpen(false)
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="h-16 bg-background flex items-center justify-between px-4 md:px-8 pt-8 pb-4">
        <span className="font-semibold text-lg">{siteConfig.siteName}</span>
        <Navbar showSiteName={false} showThemeToggle={true} className="!h-auto !p-0" />
      </header>

      {/* Mobile Toolbar */}
      <div className="md:hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center h-12 px-2">
          {/* Left Navigation Button */}
          <button
            className="h-9 w-9 inline-flex items-center justify-center rounded-md hover:bg-accent"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          
          {/* Breadcrumb */}
          <div className="flex-1 flex items-center px-2 text-sm text-muted-foreground overflow-hidden">
            <span className="truncate">
              {selectedFile ? (
                <>
                  <span>Documents</span>
                  <ChevronRight className="h-3 w-3 inline mx-1" />
                  <span className="text-foreground">
                    {selectedFile.split('/').pop()?.replace('.md', '')}
                  </span>
                </>
              ) : (
                'Select a document'
              )}
            </span>
          </div>
          
          {/* Right TOC Button */}
          <button
            className="h-9 w-9 inline-flex items-center justify-center rounded-md hover:bg-accent lg:hidden"
            onClick={() => setMobileTocOpen(true)}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area - Responsive Grid */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex max-w-8xl mx-auto">
          
          {/* Left Sidebar - Navigation (Desktop Only) */}
          <aside className="hidden md:block w-64 border-r border-border border-dashed overflow-y-auto flex-shrink-0">
            <NavigationSidebar 
              showTitle={true}
              title="All Pages"
              onFileSelect={handleFileSelect}
              selectedFile={selectedFile}
              siteConfig={siteConfig}
            />
          </aside>

          {/* Center - Main Content */}
          <main className="flex-1 bg-background overflow-y-auto">
            <div className="h-full px-4 md:px-8 py-6">
              <MarkdownRenderer 
                filePath={selectedFile} 
                onFileSelect={handleFileSelect}
              />
            </div>
          </main>

          {/* Right Sidebar - Table of Contents (Large Desktop Only) */}
          <aside className="hidden lg:block w-64 overflow-y-auto flex-shrink-0">
            <TableOfContents 
              showTitle={true}
              title="On This Page"
            />
          </aside>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileNavOpen(false)}
          />
          
          {/* Slide-in Panel */}
          <div className="fixed left-0 top-0 h-full w-80 bg-background border-r animate-in slide-in-from-left">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="font-semibold">All Pages</h3>
              <button
                className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-accent"
                onClick={() => setMobileNavOpen(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="h-full overflow-y-auto pb-20">
              <NavigationSidebar 
                showTitle={false}
                onFileSelect={handleFileSelect}
                selectedFile={selectedFile}
                siteConfig={siteConfig}
              />
            </div>
          </div>
        </div>
      )}

      {/* Table of Contents Overlay (Tablet and Mobile) */}
      {mobileTocOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileTocOpen(false)}
          />
          
          {/* Slide-in Panel */}
          <div className="fixed right-0 top-0 h-full w-80 bg-background border-l animate-in slide-in-from-right">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="font-semibold">On This Page</h3>
              <button
                className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-accent"
                onClick={() => setMobileTocOpen(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="h-full overflow-y-auto pb-20">
              <TableOfContents 
                showTitle={false}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}