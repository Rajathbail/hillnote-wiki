"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Document, Navbar, ThemeProvider, ConfigProvider } from '../index'

export function DocumentClient({ documentPath, document, breadcrumbs, relatedDocuments, siteConfig }) {
  const router = useRouter()
  
  // Store the document content in sessionStorage for the client to use
  useEffect(() => {
    if (document && document.content) {
      // Store the content for the MarkdownRenderer to use
      sessionStorage.setItem(`doc-content-${documentPath}`, document.content)
    }
  }, [document, documentPath])
  
  // Create a full wiki interface with the document
  return (
    <ConfigProvider config={siteConfig}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="h-screen flex flex-col">
          <Navbar 
            siteName={siteConfig.siteName}
            showThemeToggle={true}
          />
          <Document 
            initialFile={documentPath}
            showNavigation={true}
            showTableOfContents={true}
            serverDocument={document}
            siteConfig={siteConfig}
          />
        </div>
      </ThemeProvider>
    </ConfigProvider>
  )
}