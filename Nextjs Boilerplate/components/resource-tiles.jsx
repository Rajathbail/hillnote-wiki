"use client"

import React from 'react'
import { FileText, Download, ExternalLink, Folder, File, Play } from 'lucide-react'
import { siteConfig } from '@/config/site.config'

export function ResourcePDF({ src, title }) {
  const handleOpen = () => {
    // Resolve the URL
    let url = src
    
    // If it's a relative resource path, resolve it to the workspace
    if (src.startsWith('resources/')) {
      url = `${siteConfig.workspace.path}${src}`
    }
    
    // Open in new tab
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  
  const handleDownload = async () => {
    let url = src
    
    // If it's a relative resource path, resolve it to the workspace
    if (src.startsWith('resources/')) {
      url = `${siteConfig.workspace.path}${src}`
    }
    
    try {
      // Fetch the file
      const response = await fetch(url)
      const blob = await response.blob()
      
      // Create download link
      const downloadUrl = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = downloadUrl
      a.download = title.endsWith('.pdf') ? title : `${title}.pdf`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(downloadUrl)
    } catch (error) {
      console.error('Error downloading PDF:', error)
      // Fallback to opening in new tab
      handleOpen()
    }
  }
  
  return (
    <div className="resource-pdf-container w-full my-3">
      <div className="flex items-center p-3 bg-muted/30 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer" onClick={handleOpen}>
        <div className="flex items-center gap-3 flex-1">
          <span className="text-red-500 text-lg">📋</span>
          <span className="font-medium text-foreground text-sm" title={title}>
            {title}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleOpen()
            }}
            className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
            title="Open in new tab"
            aria-label="Open in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export function ResourceHTML({ src, title }) {
  const handleOpen = () => {
    // Resolve the URL
    let url = src
    
    // If it's a relative resource path, resolve it to the workspace
    if (src.startsWith('resources/')) {
      url = `${siteConfig.workspace.path}${src}`
    }
    
    // Open in new tab
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  
  const handleDownload = async () => {
    let url = src
    
    // If it's a relative resource path, resolve it to the workspace
    if (src.startsWith('resources/')) {
      url = `${siteConfig.workspace.path}${src}`
    }
    
    try {
      // Fetch the file
      const response = await fetch(url)
      const blob = await response.blob()
      
      // Create download link
      const downloadUrl = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = downloadUrl
      a.download = title.endsWith('.html') ? title : `${title}.html`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(downloadUrl)
    } catch (error) {
      console.error('Error downloading HTML:', error)
      // Fallback to opening in new tab
      handleOpen()
    }
  }
  
  return (
    <div className="resource-html-container w-full my-3">
      <div className="flex items-center p-3 bg-muted/30 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer" onClick={handleOpen}>
        <div className="flex items-center gap-3 flex-1">
          <span className="text-blue-500 text-lg">🌐</span>
          <span className="font-medium text-foreground text-sm" title={title}>
            {title}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleOpen()
            }}
            className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
            title="Open in new tab"
            aria-label="Open in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Helper function to get file icon based on extension
function getFileIcon(filename) {
  const extension = filename?.split('.').pop()?.toLowerCase()
  
  const iconMap = {
    'pdf': '📕',
    'doc': '📄',
    'docx': '📄',
    'xls': '📊',
    'xlsx': '📊',
    'ppt': '📑',
    'pptx': '📑',
    'zip': '🗜️',
    'rar': '🗜️',
    '7z': '🗜️',
    'tar': '🗜️',
    'gz': '🗜️',
    'txt': '📝',
    'md': '📝',
    'json': '📋',
    'xml': '📋',
    'csv': '📊',
    'js': '📜',
    'ts': '📜',
    'jsx': '📜',
    'tsx': '📜',
    'html': '🌐',
    'css': '🎨',
    'py': '🐍',
    'java': '☕',
    'cpp': '⚙️',
    'c': '⚙️',
    'h': '⚙️',
    'hpp': '⚙️',
    'exe': '⚡',
    'app': '⚡',
    'dmg': '💿',
    'iso': '💿',
    'png': '🖼️',
    'jpg': '🖼️',
    'jpeg': '🖼️',
    'gif': '🖼️',
    'svg': '🖼️',
    'mp4': '🎥',
    'avi': '🎥',
    'mov': '🎥',
    'mp3': '🎵',
    'wav': '🎵',
    'ogg': '🎵',
  }
  
  return iconMap[extension || ''] || '📎'
}

export function ResourceYouTube({ videoId, title }) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`
  
  return (
    <div className="resource-youtube-container w-full my-6">
      <div className="aspect-video w-full">
        <iframe
          width="100%"
          height="100%"
          src={embedUrl}
          title={title || "YouTube Video"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  )
}

export function ResourceFile({ path, name, type }) {
  const displayName = name || path?.split('/').pop() || 'Resource'
  const icon = type === 'folder' ? '📁' : getFileIcon(displayName)
  
  const handleOpen = async () => {
    // Resolve the URL
    let url = path
    
    // If it's a relative resource path, resolve it to the workspace
    if (path.startsWith('resources/')) {
      url = `${siteConfig.workspace.path}${path}`
    }
    
    if (type === 'folder') {
      // For folders, we can't really open them in browser, so we'll alert the user
      alert(`Folder path: ${path}\n\nNote: Folders cannot be opened directly in the browser. In the desktop app, this would open your file explorer.`)
    } else {
      // Try to determine if the file can be opened in browser
      const extension = displayName.split('.').pop()?.toLowerCase()
      const viewableExtensions = ['pdf', 'txt', 'md', 'json', 'xml', 'html', 'css', 'js', 'ts', 'jsx', 'tsx', 'jpg', 'jpeg', 'png', 'gif', 'svg', 'mp4', 'mp3']
      
      if (viewableExtensions.includes(extension || '')) {
        // Open viewable files in new tab
        window.open(url, '_blank', 'noopener,noreferrer')
      } else {
        // Download non-viewable files
        handleDownload()
      }
    }
  }
  
  const handleDownload = async () => {
    if (type === 'folder') {
      alert(`Cannot download folders directly. Path: ${path}`)
      return
    }
    
    let url = path
    
    // If it's a relative resource path, resolve it to the workspace
    if (path.startsWith('resources/')) {
      url = `${siteConfig.workspace.path}${path}`
    }
    
    try {
      // Fetch the file
      const response = await fetch(url)
      const blob = await response.blob()
      
      // Create download link
      const downloadUrl = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = downloadUrl
      a.download = displayName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(downloadUrl)
    } catch (error) {
      console.error('Error downloading file:', error)
      alert(`Unable to download file: ${displayName}`)
    }
  }
  
  return (
    <div className="resource-file-container w-full my-3">
      <div 
        className="flex items-center p-3 bg-muted/30 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={handleOpen}
      >
        <div className="flex items-center gap-3 flex-1">
          <span className="text-lg">{icon}</span>
          <span className="font-medium text-foreground text-sm" title={displayName}>
            {displayName}
          </span>
        </div>
        <div className="flex gap-2">
          {type === 'file' && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleDownload()
              }}
              className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
              title="Download file"
              aria-label="Download file"
            >
              <Download className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation()
              if (type === 'folder') {
                alert(`Folder path: ${path}`)
              } else {
                alert(`File path: ${path}`)
              }
            }}
            className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
            title={type === 'folder' ? 'Show folder info' : 'Show file info'}
            aria-label={type === 'folder' ? 'Show folder info' : 'Show file info'}
          >
            {type === 'folder' ? <Folder className="w-4 h-4" /> : <File className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}