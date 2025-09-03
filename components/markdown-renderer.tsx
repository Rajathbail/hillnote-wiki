"use client"

import React, { useEffect, useState, useRef } from 'react'
import { marked } from 'marked'
import { Layers2, Loader2 } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { DocumentFooter } from '@/components/document-footer'
import { ScratchSpace } from '@/components/scratchspace'
import { siteConfig } from '@/config/site.config'
import { createRoot } from 'react-dom/client'
import '../styles/markdown.css'

// Configure marked options - matching HillnoteApp settings
const renderer = new marked.Renderer()

renderer.link = function(options: any) {
  const { href, title, text } = options
  // Check if it's an internal document link (will be handled separately)
  if (!href || typeof href !== 'string') {
    return `<a href="">${text || ''}</a>`
  }
  if (href.startsWith('#') || href.startsWith('doc:')) {
    return `<a href="${href}"${title ? ` title="${title}"` : ''}>${text || ''}</a>`
  }
  // All external links open in new tab
  return `<a href="${href}" target="_blank" rel="noopener noreferrer"${title ? ` title="${title}"` : ''}>${text || ''}</a>`
}

marked.use({
  gfm: true,
  breaks: true,
  pedantic: false,
  headerIds: true, // Enable header IDs for table of contents
  headerPrefix: 'heading-', // Prefix for generated IDs
  renderer
})

interface MarkdownRendererProps {
  filePath: string | null
  onFileSelect?: (path: string) => void
}

// Parse custom markdown extensions (from HillnoteApp)
const parseCustomMarkdown = (markdown: string) => {
  let processedMarkdown = markdown
  const scratchspaces: Array<{
    title: string
    variant: string
    content: string
    placeholder: string
  }> = []
  
  // Handle multiple scratchspace formats
  // Format 1: New fenced block format from HillnoteApp
  const fencedPattern = /:::scratchspace "(.+?)"\n> \*\*Note for AI:\*\* (.+?)\n\n([\s\S]*?)\n\n:::/g
  
  // Format 2: Older format that might still be in documents
  const oldPattern = /::scratch-space(?:-([^:]+))?::([^]+?)::scratch-space-end::/g
  
  let match
  let scratchspaceCounter = 0
  
  // First try the new format
  while ((match = fencedPattern.exec(markdown)) !== null) {
    const [fullMatch, title, note, content] = match
    
    // Determine variant based on note content
    let variant = 'default'
    if (note.includes('AI-generated response')) {
      variant = 'ai-response'
    } else if (note.includes('merge conflict')) {
      variant = 'conflict'
    } else if (note.includes('user edit from conflict resolution')) {
      variant = 'conflict-version'
    }
    
    const placeholder = `__SCRATCHSPACE_${scratchspaceCounter++}__`
    processedMarkdown = processedMarkdown.replace(fullMatch, placeholder)
    
    scratchspaces.push({
      title,
      variant,
      content: content.trim(),
      placeholder
    })
  }
  
  // Also try the old format
  while ((match = oldPattern.exec(processedMarkdown)) !== null) {
    const [fullMatch, variantRaw = 'default', content] = match
    
    // Map old variant names to new ones
    let variant = variantRaw
    let title = 'Note'
    
    if (variantRaw === 'ai-response' || variantRaw === 'AI Response') {
      variant = 'ai-response'
      title = 'AI Response'
    } else if (variantRaw === 'conflict') {
      variant = 'conflict'
      title = 'Merge Conflict'
    } else if (variantRaw === 'conflict-version') {
      variant = 'conflict-version'
      title = 'User Edit'
    } else {
      // Use the variant as the title if it's not a known type
      title = variantRaw === 'default' ? 'Note' : variantRaw
      variant = 'default'
    }
    
    const placeholder = `__SCRATCHSPACE_${scratchspaceCounter++}__`
    processedMarkdown = processedMarkdown.replace(fullMatch, placeholder)
    
    scratchspaces.push({
      title,
      variant,
      content: content.trim(),
      placeholder
    })
  }
  
  // Handle document links - convert [[title|doc:path]] to HTML
  processedMarkdown = processedMarkdown.replace(/\[\[([^\|]+)\|doc:([^\]]+)\]\]/g, (_match, title, href) => {
    // Ensure .md extension
    let docPath = href
    if (!docPath.endsWith('.md')) {
      docPath = `${docPath}.md`
    }
    // Ensure documents/ prefix if not present
    if (!docPath.startsWith('documents/')) {
      docPath = `documents/${docPath}`
    }
    return `<a href="#" class="document-link" data-document="${docPath}">${title}</a>`
  })
  
  // Handle simple document links [[Document Name]]
  processedMarkdown = processedMarkdown.replace(/\[\[([^\]]+)\]\]/g, (match, docName) => {
    if (!match.includes('|doc:')) {
      // Assume it's a document name, convert to path
      let docPath = docName
      if (!docPath.endsWith('.md')) {
        docPath = `${docPath}.md`
      }
      if (!docPath.startsWith('documents/')) {
        docPath = `documents/${docPath}`
      }
      return `<a href="#" class="document-link" data-document="${docPath}">${docName}</a>`
    }
    return match
  })
  
  // Handle highlights - convert ==text== to <mark>text</mark>
  processedMarkdown = processedMarkdown.replace(/==([^=]+)==/g, '<mark>$1</mark>')
  
  // Handle text colors
  processedMarkdown = processedMarkdown.replace(/<color:(#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|[a-zA-Z]+)>([^<]+)<\/color>/g, 
    '<span style="color:$1">$2</span>')
  
  // Handle [^n] notation to superscript
  processedMarkdown = processedMarkdown.replace(/\[\^([^\]]+)\]/g, '<sup>$1</sup>')
  
  // Handle [object Object] placeholders (remove them)
  processedMarkdown = processedMarkdown.replace(/\[object Object\]/g, '')
  
  // Fix nested task lists
  processedMarkdown = processedMarkdown.replace(/\\- \\\[ \\\]/g, '- [ ]')
  processedMarkdown = processedMarkdown.replace(/\\- \\\[x\\\]/g, '- [x]')
  
  // Normalize indentation for nested task lists
  processedMarkdown = processedMarkdown.replace(/^(\s+)(- \[[x ]\])/gm, (_, spaces, checkbox) => {
    const spaceCount = spaces.length
    let normalizedIndent = spaces
    
    if (spaceCount >= 4) {
      const indentLevel = Math.floor(spaceCount / 4)
      normalizedIndent = '  '.repeat(indentLevel)
    } else if (spaceCount >= 2) {
      normalizedIndent = '  '
    }
    
    return normalizedIndent + checkbox
  })
  
  return { processedMarkdown, scratchspaces }
}

// Post-process HTML to convert task lists (exact copy from HillnoteApp)
const processTaskLists = (html: string) => {
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = html
  
  const processList = (list: Element) => {
    let hasTaskItems = false
    const listItems = Array.from(list.children).filter(child => child.tagName === 'LI')
    
    listItems.forEach(li => {
      const checkbox = li.querySelector('input[type="checkbox"]')
      
      if (checkbox) {
        hasTaskItems = true
        const isChecked = (checkbox as HTMLInputElement).checked || checkbox.hasAttribute('checked')
        
        // Clone the li to work with
        const clonedLi = li.cloneNode(true) as Element
        const clonedCheckbox = clonedLi.querySelector('input[type="checkbox"]')
        clonedCheckbox?.remove()
        
        // Get all child nodes (not just innerHTML to preserve text nodes)
        const contentNodes: Node[] = []
        clonedLi.childNodes.forEach(node => {
          // Skip empty text nodes
          if (node.nodeType === Node.TEXT_NODE && !node.textContent?.trim()) {
            return
          }
          
          // If it's a p tag, extract its content
          if (node.nodeName === 'P') {
            // Add the p tag's child nodes instead of the p tag itself
            node.childNodes.forEach(child => {
              contentNodes.push(child.cloneNode(true))
            })
          } else {
            contentNodes.push(node.cloneNode(true))
          }
        })
        
        // Set attributes for TipTap
        li.setAttribute('data-type', 'taskItem')
        li.setAttribute('data-checked', isChecked ? 'true' : 'false')
        
        // Clear the li and rebuild with proper structure
        li.innerHTML = ''
        
        // Add a placeholder for the checkbox that we'll replace with React component
        const checkboxPlaceholder = document.createElement('div')
        checkboxPlaceholder.className = 'checkbox-placeholder'
        checkboxPlaceholder.setAttribute('data-checked', isChecked ? 'true' : 'false')
        li.appendChild(checkboxPlaceholder)
        
        // Add content div
        const contentDiv = document.createElement('div')
        contentDiv.className = 'task-content'
        contentNodes.forEach(node => {
          contentDiv.appendChild(node)
        })
        li.appendChild(contentDiv)
      }
      
      // Process any nested lists
      const nestedLists = li.querySelectorAll('ul, ol')
      nestedLists.forEach(nestedList => {
        processList(nestedList)
      })
    })
    
    if (hasTaskItems) {
      list.setAttribute('data-type', 'taskList')
    }
  }
  
  const lists = tempDiv.querySelectorAll('ul, ol')
  lists.forEach(list => {
    processList(list)
  })
  
  return tempDiv.innerHTML
}

// Component for checkbox
function TaskCheckbox({ checked, disabled = true }: { checked: boolean; disabled?: boolean }) {
  return (
    <Checkbox 
      checked={checked} 
      disabled={disabled}
      className="mt-0.5"
      aria-label={checked ? "Completed task" : "Incomplete task"}
    />
  )
}

interface Comment {
  id: string
  text: string
  author?: string
  timestamp?: string
  parentId?: string | null
}

interface RelatedDocument {
  path: string
  title: string
  emoji?: string
}

export function MarkdownRenderer({ filePath, onFileSelect }: MarkdownRendererProps) {
  const [content, setContent] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [relatedDocs, setRelatedDocs] = useState<RelatedDocument[]>([])
  const [documentTitle, setDocumentTitle] = useState<string>('')
  const contentRef = useRef<HTMLDivElement>(null)
  const checkboxRootsRef = useRef<Array<any>>([])
  const scratchspaceRootsRef = useRef<Array<any>>([])

  useEffect(() => {
    const loadMarkdown = async () => {
      if (!filePath) {
        setContent('')
        setDocumentTitle('')
        return
      }

      try {
        setIsLoading(true)
        setError(null)
        
        // Extract title from file path
        const extractTitle = (path: string) => {
          // Remove 'documents/' prefix and '.md' extension
          let title = path.replace(/^documents\//, '').replace(/\.md$/, '')
          // Get the last part after the last slash (filename)
          const parts = title.split('/')
          title = parts[parts.length - 1]
          // Convert kebab-case or snake_case to Title Case
          title = title.replace(/[-_]/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
          return title
        }
        
        setDocumentTitle(extractTitle(filePath))
        
        // Try to resolve the file path using the documents registry first
        let resolvedPath = filePath
        
        // Load the documents registry to find the actual path
        try {
          const registryUrl = `${siteConfig.workspace.path}documents-registry.json`
          const registryResponse = await fetch(registryUrl)
          if (registryResponse.ok) {
            const registry = await registryResponse.json()
            
            // Try to find a document that matches the requested path
            // First try exact match
            let doc = registry.documents?.find((d: any) => d.path === filePath)
            
            // If not found, try to match by partial path (handle "Sync" vs "Sync & Collaborate")
            if (!doc && filePath.includes('/')) {
              // Extract the filename from the path
              const fileName = filePath.split('/').pop()
              
              // Find documents with matching filename
              const candidates = registry.documents?.filter((d: any) => {
                const docFileName = d.path.split('/').pop()
                return docFileName === fileName
              }) || []
              
              // If we have candidates, try to match by partial folder path
              if (candidates.length > 0) {
                // Check if the requested path is a partial match
                for (const candidate of candidates) {
                  // Handle cases like "documents/Sync/GDrive.md" matching "documents/Sync & Collaborate/GDrive.md"
                  const requestedParts = filePath.split('/')
                  const candidateParts = candidate.path.split('/')
                  
                  // Check if all parts of the requested path are found in the candidate path
                  let isMatch = true
                  for (let i = 0; i < requestedParts.length; i++) {
                    const requestedPart = requestedParts[i].toLowerCase()
                    
                    // For folder names, check if the candidate part starts with the requested part
                    if (i < requestedParts.length - 1) {
                      // This is a folder part
                      const candidatePart = candidateParts[i]?.toLowerCase()
                      if (candidatePart && !candidatePart.startsWith(requestedPart)) {
                        isMatch = false
                        break
                      }
                    } else {
                      // This is the filename, must match exactly
                      if (requestedParts[i] !== candidateParts[candidateParts.length - 1]) {
                        isMatch = false
                        break
                      }
                    }
                  }
                  
                  if (isMatch) {
                    doc = candidate
                    break
                  }
                }
              }
            }
            
            if (doc) {
              resolvedPath = doc.path
            }
          }
        } catch (registryError) {
          // Registry not available, continue with original path
          console.warn('Could not load documents registry:', registryError)
        }
        
        // Construct the URL to the markdown file
        // Normalize the file path - remove leading slash if present
        const normalizedPath = resolvedPath.startsWith('/') ? resolvedPath.slice(1) : resolvedPath
        const fileUrl = `${siteConfig.workspace.path}${normalizedPath}`
        const response = await fetch(fileUrl)
        
        if (!response.ok) {
          throw new Error(`Failed to load file: ${response.statusText}`)
        }
        
        let markdown = await response.text()
        
        // Extract comments if enabled
        let extractedComments: Comment[] = []
        if (siteConfig.ui.authorsNotes?.enabled) {
          const commentSectionRegex = /<!-- COMMENTS_SECTION_START -->([\s\S]*?)<!-- COMMENTS_SECTION_END -->/
          const match = markdown.match(commentSectionRegex)
          
          if (match) {
            const commentsText = match[1]
            const commentBlocks = commentsText.split('<!-- COMMENT')
              .filter(block => block.trim())
              .map(block => '<!-- COMMENT' + block)
            
            for (const block of commentBlocks) {
              try {
                const metadataMatch = block.match(/<!-- COMMENT\n([\s\S]+?)\n-->/)
                if (!metadataMatch) continue
                
                const metadata = JSON.parse(metadataMatch[1])
                const textStart = block.indexOf('-->') + 3
                const text = block.substring(textStart).trim()
                
                extractedComments.push({
                  id: metadata.id,
                  text: text,
                  author: metadata.name || metadata.author, // Use 'name' field from HillnoteApp
                  timestamp: metadata.timestamp,
                  parentId: metadata.parentId || null
                })
              } catch (e) {
                console.error('Error parsing comment:', e)
              }
            }
            
            // Remove comments section from markdown
            markdown = markdown.replace(commentSectionRegex, '')
          }
          setComments(extractedComments)
        }
        
        // Parse custom markdown extensions
        const { processedMarkdown, scratchspaces } = parseCustomMarkdown(markdown)
        
        // Extract document links for related documents
        if (siteConfig.ui.relatedDocuments?.enabled) {
          const docLinks: RelatedDocument[] = []
          const linkRegex = /\[\[([^\|\]]+)(?:\|doc:([^\]]+))?\]\]/g
          let match
          
          // Load the entire documents registry first
          let fullRegistry: any = null
          try {
            const registryUrl = `${siteConfig.workspace.path}documents-registry.json`
            const registryResponse = await fetch(registryUrl)
            if (registryResponse.ok) {
              fullRegistry = await registryResponse.json()
            }
          } catch (err) {
            console.warn('Could not load documents registry:', err)
          }
          
          // Build a comprehensive map of ALL documents with their emojis and names
          const documentsMap = new Map<string, {emoji?: string, name: string}>()
          
          if (fullRegistry) {
            // Add all documents to the map
            fullRegistry.documents?.forEach((doc: any) => {
              documentsMap.set(doc.path, {
                emoji: doc.emoji,
                name: doc.name
              })
              
              // Also add variations of the path for better matching
              // Handle cases where the path might be referenced differently
              const pathWithoutDocs = doc.path.replace(/^documents\//, '')
              documentsMap.set(pathWithoutDocs, {
                emoji: doc.emoji,
                name: doc.name
              })
              
              // Also store by filename for fallback matching
              const filename = doc.path.split('/').pop()
              if (filename && !documentsMap.has(filename)) {
                documentsMap.set(filename, {
                  emoji: doc.emoji,
                  name: doc.name
                })
              }
            })
            
            // Find documents that reference the current document
            const currentDoc = fullRegistry.documents?.find((d: any) => d.path === resolvedPath)
            
            // Add documents that reference this one (incoming references)
            if (currentDoc && currentDoc.referencedIn) {
              currentDoc.referencedIn.forEach((refPath: string) => {
                const refDoc = fullRegistry.documents?.find((d: any) => d.path === refPath)
                if (refDoc && !docLinks.some(doc => doc.path === refDoc.path)) {
                  docLinks.push({
                    title: refDoc.name,
                    path: refDoc.path,
                    emoji: refDoc.emoji
                  })
                }
              })
            }
            
            // Add documents that this document references (outgoing references)
            if (currentDoc && currentDoc.containsReferencesTo) {
              currentDoc.containsReferencesTo.forEach((refPath: string) => {
                const refDoc = fullRegistry.documents?.find((d: any) => d.path === refPath)
                if (refDoc && !docLinks.some(doc => doc.path === refDoc.path)) {
                  docLinks.push({
                    title: refDoc.name,
                    path: refDoc.path,
                    emoji: refDoc.emoji
                  })
                }
              })
            }
          }
          
          // Extract links from the markdown content
          while ((match = linkRegex.exec(markdown)) !== null) {
            const title = match[1]
            let path = match[2] || match[1]
            
            // Ensure .md extension
            if (!path.endsWith('.md')) {
              path = `${path}.md`
            }
            // Ensure documents/ prefix if not present
            if (!path.startsWith('documents/')) {
              path = `documents/${path}`
            }
            
            // Avoid duplicates
            if (!docLinks.some(doc => doc.path === path)) {
              // Try multiple ways to find the document info
              let docInfo = documentsMap.get(path)
              
              if (!docInfo) {
                // Try without 'documents/' prefix
                docInfo = documentsMap.get(path.replace(/^documents\//, ''))
              }
              
              if (!docInfo) {
                // Try just the filename
                const filename = path.split('/').pop()
                if (filename) {
                  docInfo = documentsMap.get(filename)
                }
              }
              
              // If we still don't have doc info, search the registry directly
              if (!docInfo && fullRegistry) {
                const foundDoc = fullRegistry.documents?.find((d: any) => 
                  d.path === path || 
                  d.path.endsWith(path.replace(/^documents\//, '')) ||
                  d.name === title
                )
                if (foundDoc) {
                  docInfo = {
                    emoji: foundDoc.emoji,
                    name: foundDoc.name
                  }
                }
              }
              
              docLinks.push({ 
                title: docInfo?.name || title, 
                path, 
                emoji: docInfo?.emoji 
              })
            }
          }
          
          setRelatedDocs(docLinks)
        }
        
        // Manually convert images before marked processing (like HillnoteApp)
        let preprocessedMarkdown = processedMarkdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) => {
          // Check if this is a resources image
          if (src.startsWith('resources/')) {
            const fullPath = `${siteConfig.workspace.path}${src}`
            return `<img src="${fullPath}" alt="${alt || ''}" data-resource-path="${src}" loading="lazy" class="markdown-image" />`
          }
          
          return `<img src="${src}" alt="${alt || ''}" loading="lazy" class="markdown-image" />`
        })
        
        // First, temporarily replace scratchspace placeholders with HTML-safe markers
        const scratchspaceMarkers: Record<string, any> = {}
        scratchspaces.forEach(({ title, variant, content, placeholder }, index) => {
          const marker = `<!--SCRATCHSPACE_MARKER_${index}-->`
          scratchspaceMarkers[marker] = { title, variant, content, index }
          preprocessedMarkdown = preprocessedMarkdown.replace(placeholder, marker)
        })
        
        // Convert the remaining markdown to HTML
        let html = marked.parse(preprocessedMarkdown) as string
        
        // Post-process the HTML to handle task lists
        html = processTaskLists(html)
        
        // Now replace the HTML-safe markers with actual scratchspace placeholders
        Object.entries(scratchspaceMarkers).forEach(([marker, { title, variant, content, index }]) => {
          
          let processedContent = content.replace(/==([^=]+)==/g, '<mark>$1</mark>')
          processedContent = processedContent.replace(/<color:(#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|[a-zA-Z]+)>([^<]+)<\/color>/g, 
            '<span style="color:$1">$2</span>')
          
          let contentHtml = marked.parse(processedContent) as string
          contentHtml = processTaskLists(contentHtml)
          
          // Store data for React component rendering
          const id = `scratchspace-${index}`
          
          // Create a placeholder that will be replaced with React component
          const scratchspaceHtml = `<div class="scratchspace-placeholder" data-id="${id}" data-title="${title.replace(/"/g, '&quot;')}" data-variant="${variant}" data-content="${encodeURIComponent(contentHtml)}"></div>`
          
          // Replace the marker with the scratchspace placeholder
          html = html.replace(marker, scratchspaceHtml)
        })
        
        setContent(html)
        
        // Dispatch a custom event to signal content is loaded
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('markdown-content-loaded'))
        }, 100)
      } catch (err) {
        console.error('Error loading markdown:', err)
        setError('Failed to load document')
      } finally {
        setIsLoading(false)
      }
    }

    loadMarkdown()
  }, [filePath])

  // Replace checkbox and scratchspace placeholders with React components
  useEffect(() => {
    if (!contentRef.current) return

    // Schedule cleanup and re-render for next tick to avoid race conditions
    const timeoutId = setTimeout(() => {
      // Clean up previous roots
      checkboxRootsRef.current.forEach(root => {
        try {
          root.unmount()
        } catch (e) {
          // Ignore errors during cleanup
        }
      })
      checkboxRootsRef.current = []
      
      scratchspaceRootsRef.current.forEach(root => {
        try {
          root.unmount()
        } catch (e) {
          // Ignore errors during cleanup
        }
      })
      scratchspaceRootsRef.current = []

      // Find all checkbox placeholders and replace with React components
      if (contentRef.current) {
        const checkboxPlaceholders = contentRef.current.querySelectorAll('.checkbox-placeholder')
        checkboxPlaceholders.forEach(placeholder => {
          const isChecked = placeholder.getAttribute('data-checked') === 'true'
          const container = document.createElement('div')
          container.className = 'checkbox-container'
          placeholder.replaceWith(container)
          
          const root = createRoot(container)
          root.render(<TaskCheckbox checked={isChecked} />)
          checkboxRootsRef.current.push(root)
        })
        
        // Find all scratchspace placeholders and replace with React components
        const scratchspacePlaceholders = contentRef.current.querySelectorAll('.scratchspace-placeholder')
        
        scratchspacePlaceholders.forEach(placeholder => {
          const title = placeholder.getAttribute('data-title') || 'Note'
          const variant = placeholder.getAttribute('data-variant') as 'default' | 'ai-response' | 'conflict' | 'conflict-version' || 'default'
          const contentEncoded = placeholder.getAttribute('data-content') || ''
          const content = decodeURIComponent(contentEncoded)
          
          if (content) {
            const container = document.createElement('div')
            placeholder.replaceWith(container)
            
            const root = createRoot(container)
            root.render(
              <ScratchSpace
                title={title}
                variant={variant}
                content={content}
                collapsed={true}
              />
            )
            scratchspaceRootsRef.current.push(root)
          }
        })
      }
    }, 0)

    // Handle document link clicks
    const handleDocumentLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('document-link')) {
        e.preventDefault()
        const docPath = target.getAttribute('data-document')
        if (docPath && onFileSelect) {
          // Pass the path exactly as the navigation sidebar does
          // The paths in links are like "documents/Sync/Github.md"
          // This is the same format the navigation sidebar uses
          onFileSelect(docPath)
        }
      }
    }

    contentRef.current.addEventListener('click', handleDocumentLinkClick)
    
    return () => {
      clearTimeout(timeoutId)
      contentRef.current?.removeEventListener('click', handleDocumentLinkClick)
      // Schedule cleanup for next tick
      setTimeout(() => {
        checkboxRootsRef.current.forEach(root => {
          try {
            root.unmount()
          } catch (e) {
            // Ignore errors during cleanup
          }
        })
        checkboxRootsRef.current = []
        
        scratchspaceRootsRef.current.forEach(root => {
          try {
            root.unmount()
          } catch (e) {
            // Ignore errors during cleanup
          }
        })
        scratchspaceRootsRef.current = []
      }, 0)
    }
  }, [content, onFileSelect])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">{error}</p>
      </div>
    )
  }

  if (!filePath) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Select a document to view</p>
      </div>
    )
  }

  return (
    <div className="h-full overflow-auto">
      <div className="max-w-4xl mx-auto px-8 pt-4 pb-12">

        {/* Document Title */}
        <div className="mb-8 px-8 py-8 bg-muted rounded-lg">
          <Layers2 className="w-5 h-5 text-primary opacity-20 transition-opacity duration-200" />
          <h1 className="text-3xl md:text-4xl font-light mt-2">
            {documentTitle}
          </h1>
          <div className="document-title-divider"></div>
        </div>
        
        <div 
          ref={contentRef}
          className="markdown-content px-12"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        
        {/* Document Footer with Comments and Related Documents */}
        <DocumentFooter
          comments={comments}
          relatedDocuments={relatedDocs}
          onDocumentClick={(path) => {
            if (onFileSelect) {
              // Pass the path exactly as the navigation sidebar does
              onFileSelect(path)
            }
          }}
        />
      </div>
    </div>
  )
}