"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { NavigationSidebar } from "@/components/navigation-sidebar"
import { MainContent } from "@/components/main-content"
import { TableOfContents } from "@/components/table-of-contents"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/config/site.config"
import { Menu, List, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { pathToSlug } from "@/lib/slug-utils"

export default function Home({ initialFile, serverDocument }) {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedFile, setSelectedFile] = useState(initialFile || null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [mobileTocOpen, setMobileTocOpen] = useState(false)
  
  // UI Settings - using Tailwind classes instead of config
  const showTitleBar = true
  const showNavigation = true
  const showTableOfContents = true
  const showSiteName = true
  const showThemeToggle = true
  const enableThemeToggle = true

  // Set initial file on mount or when initialFile changes
  useEffect(() => {
    if (initialFile) {
      setSelectedFile(initialFile)
    } else if (pathname === '/' && siteConfig.workspace.enabled && siteConfig.workspace.initialFile) {
      setSelectedFile(siteConfig.workspace.initialFile)
    }
  }, [initialFile, pathname])
  
  // Handle file selection with routing
  const handleFileSelect = (filePath) => {
    if (!filePath) return
    
    setSelectedFile(filePath)
    
    // Convert file path to URL slug
    const slug = pathToSlug(filePath)
    
    // Navigate to the document URL
    if (pathname !== `/doc/${slug}`) {
      router.push(`/doc/${slug}`)
    }
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      {showTitleBar && (
        <>
          <header className="h-16 bg-background flex items-center justify-between px-4 md:px-8 pt-8 pb-4">
            {showSiteName && (
              <span className="font-semibold text-lg">{siteConfig.siteName}</span>
            )}
            {showThemeToggle && enableThemeToggle && (
              <ThemeToggle />
            )}
          </header>
          
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
        </>
      )}

      {/* Main Content Area - Responsive Grid */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex max-w-8xl mx-auto">
          
          {/* Left Sidebar - Navigation (Desktop Only) */}
          {showNavigation && (
            <aside className="hidden md:block w-64 border-r border-border border-dashed overflow-y-auto flex-shrink-0">
              <NavigationSidebar 
                showTitle={true}
                title="All Pages"
                onFileSelect={handleFileSelect}
                selectedFile={selectedFile}
              />
            </aside>
          )}

          {/* Center - Main Content */}
          <main className="flex-1 bg-background overflow-y-auto">
            <MainContent 
              selectedFile={selectedFile} 
              onFileSelect={handleFileSelect}
              serverDocument={serverDocument}
            />
          </main>

          {/* Right Sidebar - Table of Contents (Large Desktop Only) */}
          {showTableOfContents && (
            <aside className="hidden lg:block w-64 overflow-y-auto flex-shrink-0">
              <TableOfContents 
                showTitle={true}
                title="On This Page"
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
                  onFileSelect={(file) => {
                    handleFileSelect(file)
                    setMobileNavOpen(false)
                  }}
                  selectedFile={selectedFile}
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
    </div>
  )
}