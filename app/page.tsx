"use client"

import { useState, useEffect } from "react"
import { NavigationSidebar } from "@/components/navigation-sidebar"
import { MainContent } from "@/components/main-content"
import { TableOfContents } from "@/components/table-of-contents"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/config/site.config"

export default function Home() {
  const { ui } = siteConfig
  const [selectedFile, setSelectedFile] = useState<string | null>(null)

  // Set initial file on mount
  useEffect(() => {
    if (siteConfig.workspace.enabled && siteConfig.workspace.initialFile) {
      setSelectedFile(siteConfig.workspace.initialFile)
    }
  }, [])

  return (
    <div className="h-screen flex flex-col">
      {/* Header - Conditionally rendered based on config */}
      {ui.titleBar.enabled && (
        <header 
          className="bg-background flex items-center justify-between px-8"
          style={{ 
            height: `${ui.titleBar.height}px`,
            paddingTop: ui.titleBar.height === 48 ? '32px' : '16px',
            paddingBottom: '16px'
          }}
        >
          {ui.titleBar.showSiteName && (
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg">{siteConfig.siteName}</span>
            </div>
          )}
          {ui.titleBar.showThemeToggle && ui.theme.enableThemeToggle && (
            <ThemeToggle />
          )}
        </header>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Navigation (Conditionally rendered) */}
        {ui.navigationSidebar.enabled && (
          <aside 
            className="flex-shrink-0"
            style={{ width: `${ui.navigationSidebar.width}px` }}
          >
            <NavigationSidebar 
              showTitle={ui.navigationSidebar.showTitle}
              title={ui.navigationSidebar.title}
              onFileSelect={setSelectedFile}
              selectedFile={selectedFile}
            />
          </aside>
        )}

        {/* Center - Main Content */}
        <main className="flex-1 bg-background">
          <MainContent selectedFile={selectedFile} onFileSelect={setSelectedFile} />
        </main>

        {/* Right Sidebar - Table of Contents (Conditionally rendered) */}
        {ui.tableOfContents.enabled && (
          <aside 
            className="flex-shrink-0"
            style={{ width: `${ui.tableOfContents.width}px` }}
          >
            <TableOfContents 
              showTitle={ui.tableOfContents.showTitle}
              title={ui.tableOfContents.title}
            />
          </aside>
        )}
      </div>
    </div>
  )
}