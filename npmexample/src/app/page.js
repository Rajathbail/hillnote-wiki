"use client"

import { Document, Navbar, ConfigProvider, pathToSlug, initializeSlugMapping } from '@hillnote/wiki'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const wikiConfig = {
  siteName: "Hillnote Wiki",
  workspace: {
    path: "/Welcome to Hillnote! /",
    enabled: true,
    documentsFolder: "documents",
    registryFile: "documents-registry.json",
    initialFile: "documents/Start Here .md"
  },
  ui: {
    authorsNotes: true,
    navigationText: "All Pages",
    navigationMode: "wiki" // Options: "emoji" or "wiki"
  }
}

export default function WikiPage() {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    // Initialize slug mapping on mount
    initializeSlugMapping(wikiConfig)
  }, [])

  const handleFileSelect = (filePath) => {
    if (!filePath) return
    
    // Convert file path to URL slug
    const slug = pathToSlug(filePath)
    
    router.push(`/doc/${slug}`)
  }

  if (!mounted) return null

  return (
    <ConfigProvider config={wikiConfig}>
      <div className="h-screen flex flex-col">
        <Navbar siteName={wikiConfig.siteName} showThemeToggle={true} />
        <Document 
          siteConfig={wikiConfig}
          initialFile={wikiConfig.workspace.initialFile}
          showNavigation={true}
          showTableOfContents={true}
          onFileSelect={handleFileSelect}
        />
      </div>
    </ConfigProvider>
  )
}