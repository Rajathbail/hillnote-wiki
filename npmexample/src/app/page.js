"use client"

import { Document, Navbar, ThemeProvider, ConfigProvider } from '@hillnote/wiki'
import { useEffect, useState } from 'react'

const wikiConfig = {
  siteName: "My Documentation",
  siteDescription: "Documentation powered by Hillnote",
  workspace: {
    path: "/Welcome to Hillnote! /",
    enabled: true,
    documentsFolder: "documents",
    registryFile: "documents-registry.json",
    initialFile: "documents/Start here! .md"
  },
  ui: {
    showNavigation: true,
    showTableOfContents: true,
    showTitleBar: true,
    showThemeToggle: true
  }
}

export default function WikiPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ConfigProvider config={wikiConfig}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="h-screen flex flex-col">
          <Navbar 
            siteName={wikiConfig.siteName}
            showThemeToggle={true}
          />
          <Document 
            initialFile={wikiConfig.workspace.initialFile}
            showNavigation={true}
            showTableOfContents={true}
          />
        </div>
      </ThemeProvider>
    </ConfigProvider>
  )
}