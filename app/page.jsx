"use client"

import { useState, useEffect } from "react"
import { NavigationSidebar } from "@/components/navigation-sidebar"
import { MainContent } from "@/components/main-content"
import { TableOfContents } from "@/components/table-of-contents"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/config/site.config"

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null)
  
  // UI Settings - using Tailwind classes instead of config
  const showTitleBar = true
  const showNavigation = true
  const showTableOfContents = true
  const showSiteName = true
  const showThemeToggle = true
  const enableThemeToggle = true

  // Set initial file on mount
  useEffect(() => {
    if (siteConfig.workspace.enabled && siteConfig.workspace.initialFile) {
      setSelectedFile(siteConfig.workspace.initialFile)
    }
  }, [])

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      {showTitleBar && (
        <header className="h-16 bg-background flex items-center justify-between px-8 pt-8 pb-4">
          {showSiteName && (
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg">{siteConfig.siteName}</span>
            </div>
          )}
          {showThemeToggle && enableThemeToggle && (
            <ThemeToggle />
          )}
        </header>
      )}

      {/* Main Content Area - Using Simple Grid System */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full grid grid-cols-5 gap-0 max-w-8xl mx-auto">
          
          {/* Left Sidebar - Navigation */}
          {showNavigation && (
            <aside className="col-span-1 border-r border-border border-dashed overflow-y-auto">
              <NavigationSidebar 
                showTitle={true}
                title="All Pages"
                onFileSelect={setSelectedFile}
                selectedFile={selectedFile}
              />
            </aside>
          )}

          {/* Center - Main Content */}
          <main className={`bg-background overflow-y-auto ${
            showNavigation && showTableOfContents ? 'col-span-3' :
            showNavigation || showTableOfContents ? 'col-span-3' : 
            'col-span-12'
          }`}>
            <MainContent selectedFile={selectedFile} onFileSelect={setSelectedFile} />
          </main>

          {/* Right Sidebar - Table of Contents */}
          {showTableOfContents && (
            <aside className="col-span-1 overflow-y-auto">
              <TableOfContents 
                showTitle={true}
                title="On This Page"
              />
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}