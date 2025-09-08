"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Home from "@/app/page"

export default function DocumentClient({ documentPath, document, breadcrumbs, relatedDocuments }) {
  const router = useRouter()
  
  // Store the document content in sessionStorage for the client to use
  useEffect(() => {
    if (document && document.content) {
      // Store the content for the MarkdownRenderer to use
      sessionStorage.setItem(`doc-content-${documentPath}`, document.content)
    }
  }, [document, documentPath])
  
  // Pass the document path and pre-rendered content to the Home component
  return <Home initialFile={documentPath} serverDocument={document} />
}