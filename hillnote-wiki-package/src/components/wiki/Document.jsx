import React, { useState, useEffect } from 'react'
import { NavigationSidebar } from '../navigation-sidebar'
import { TableOfContents } from '../table-of-contents'
import { MarkdownRenderer } from '../markdown-renderer'
import { Menu, List, ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

export const Document = ({
  initialFile = null,
  showNavigation = true,
  showTableOfContents = true,
  navigationTitle = 'All Pages',
  tocTitle = 'On This Page',
  className = '',
  onFileSelect: onFileSelectProp,
  siteConfig = null,
  serverDocument = null
}) => {
  const [selectedFile, setSelectedFile] = useState(initialFile)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [mobileTocOpen, setMobileTocOpen] = useState(false)

  useEffect(() => {
    setSelectedFile(initialFile)
  }, [initialFile])

  const handleFileSelect = (file) => {
    setSelectedFile(file)
    onFileSelectProp?.(file)
    // Close mobile nav when file is selected
    setMobileNavOpen(false)
  }

  return (
    <>
      {/* Mobile Toolbar */}
      <div className="md:hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center h-12 px-2">
          {/* Left Navigation Button */}
          {showNavigation && (
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setMobileNavOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          
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
          {showTableOfContents && (
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 lg:hidden"
              onClick={() => setMobileTocOpen(true)}
            >
              <List className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Main Content Area - Responsive Grid */}
      <div className={`flex-1 overflow-hidden ${className}`}>
        <div className="h-full flex max-w-8xl mx-auto">
          
          {/* Left Sidebar - Navigation (Desktop Only) */}
          {showNavigation && (
            <aside className="hidden md:block w-64 border-r border-border border-dashed overflow-y-auto flex-shrink-0">
              <NavigationSidebar 
                showTitle={true}
                title={navigationTitle}
                onFileSelect={handleFileSelect}
                selectedFile={selectedFile}
                siteConfig={siteConfig}
              />
            </aside>
          )}

          {/* Center - Main Content */}
          <main className="flex-1 bg-background overflow-y-auto">
            <MarkdownRenderer 
              filePath={selectedFile} 
              onFileSelect={handleFileSelect} 
            />
          </main>

          {/* Right Sidebar - Table of Contents (Large Desktop Only) */}
          {showTableOfContents && (
            <aside className="hidden lg:block w-64 overflow-y-auto flex-shrink-0">
              <TableOfContents 
                showTitle={true}
                title={tocTitle}
              />
            </aside>
          )}
        </div>
      </div>

      {/* Mobile Navigation Sheet */}
      {showNavigation && (
        <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
          <SheetContent side="left" className="w-80 p-0 flex flex-col h-full">
            <SheetHeader className="px-6 py-4 border-b">
              <SheetTitle>All Pages</SheetTitle>
            </SheetHeader>
            <div className="flex-1 overflow-hidden">
              <div className="h-full overflow-y-auto">
                <NavigationSidebar 
                  showTitle={false}
                  onFileSelect={handleFileSelect}
                  selectedFile={selectedFile}
                  siteConfig={siteConfig}
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      )}

      {/* Table of Contents Sheet (Tablet and Mobile) */}
      {showTableOfContents && (
        <Sheet open={mobileTocOpen} onOpenChange={setMobileTocOpen}>
          <SheetContent side="right" className="w-80 p-0 flex flex-col h-full">
            <SheetHeader className="px-6 py-4 border-b">
              <SheetTitle>On This Page</SheetTitle>
            </SheetHeader>
            <div className="flex-1 overflow-hidden">
              <div className="h-full overflow-y-auto">
                <TableOfContents 
                  showTitle={false}
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </>
  )
}