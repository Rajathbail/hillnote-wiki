"use client"

import { Document, Navbar, ConfigProvider, pathToSlug, slugToPath, initializeSlugMapping } from '@hillnote/wiki'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

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
    navigationMode: "wiki"
  }
}

export default function DocumentPage() {
  const params = useParams()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [filePath, setFilePath] = useState(wikiConfig.workspace.initialFile)
  
  // Get the slug from URL params
  const slug = params.path ? params.path.join('/') : null

  useEffect(() => {
    setMounted(true)
    // Initialize slug mapping and then set the file path
    const initAndSetPath = async () => {
      await initializeSlugMapping(wikiConfig)
      if (slug) {
        const path = slugToPath(slug)
        setFilePath(path)
      }
    }
    initAndSetPath()
  }, [slug])

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
          initialFile={filePath}
          showNavigation={true}
          showTableOfContents={true}
          onFileSelect={handleFileSelect}
        />
      </div>
    </ConfigProvider>
  )
}