"use client"

import React, { useState, useEffect } from 'react'
import { 
  ChevronDown, 
  ChevronRight,
  Loader2
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { ScrollArea } from "@/components/ui/scroll-area"
import { getWorkspaceFileTree } from '@/lib/workspace'
import { siteConfig } from '@/config/site.config'

const TreeNodeComponent = ({ node, level = 0, currentFile, onFileSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const isActive = currentFile === node.id
  const hasChildren = node.children && node.children.length > 0

  const handleClick = () => {
    if (node.type === 'file') {
      onFileSelect(node.id)
    } else {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <>
      <div className="relative group">
        <button
          className={cn(
            "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium transition-colors w-full text-left relative",
            isActive ? "bg-accent font-bold opacity-100" : "hover:bg-accent/50 opacity-80"
          )}
          onClick={handleClick}
          style={{ paddingLeft: `${level * 8 + 8}px` }}
        >
          {node.type === 'directory' && (
            <span className="transition-transform">
              {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
            </span>
          )}
          
          {node.type === 'directory' ? (
            isExpanded ? <span className='text-md'>📁</span> : <span className='text-md'>📂</span>
          ) : (
            <span className="text-xs ml-5 shrink-0">{node.emoji || '🌵'}</span>
          )}
          
          <span className="truncate">
            {node.type === 'file' && node.name.endsWith('.md') ? node.name.replace(/\.md$/, '') : node.name}
          </span>
        </button>
      </div>

      {isExpanded && hasChildren && (
        <div className="relative">
          {node.children?.map((child) => (
            <TreeNodeComponent
              key={child.id}
              node={child}
              level={level + 1}
              currentFile={currentFile}
              onFileSelect={onFileSelect}
            />
          ))}
        </div>
      )}
    </>
  )
}

export function NavigationSidebar({ 
  showTitle = true, 
  title = "All Pages",
  onFileSelect,
  selectedFile
} = {}) {
  const [currentFile, setCurrentFile] = useState(selectedFile || null)
  const [fileTree, setFileTree] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Update currentFile when selectedFile prop changes
  useEffect(() => {
    setCurrentFile(selectedFile || null)
  }, [selectedFile])

  useEffect(() => {
    const loadWorkspace = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        if (siteConfig.workspace.enabled) {
          const tree = await getWorkspaceFileTree()
          setFileTree(tree)
          
          if (tree.length === 0) {
            setError("No documents found in workspace")
          } else {
            // Auto-select initial file if configured
            if (siteConfig.workspace.initialFile && !currentFile) {
              const initialFile = siteConfig.workspace.initialFile
              setCurrentFile(initialFile)
              if (onFileSelect) {
                onFileSelect(initialFile)
              }
            }
          }
        } else {
          // Use dummy data if workspace is disabled
          setFileTree([
            {
              id: '1',
              name: 'Getting Started',
              type: 'directory',
              path: 'documents/Getting Started',
              children: [
                { id: '1-1', name: 'Introduction.md', type: 'file', path: 'documents/Getting Started/Introduction.md', emoji: '👋' },
                { id: '1-2', name: 'Installation.md', type: 'file', path: 'documents/Getting Started/Installation.md', emoji: '💿' },
                { id: '1-3', name: 'Quick Start.md', type: 'file', path: 'documents/Getting Started/Quick Start.md', emoji: '🚀' }
              ]
            },
            { id: '4', name: 'README.md', type: 'file', path: 'documents/README.md', emoji: '📖' },
          ])
        }
      } catch (err) {
        console.error('Error loading workspace:', err)
        setError('Failed to load workspace')
      } finally {
        setIsLoading(false)
      }
    }

    loadWorkspace()
  }, [])

  return (
    <div className="h-full p-3">
      <div className="h-full flex flex-col overflow-hidden">
        {showTitle && (
          <div className="px-3 pt-6">
            <h3 className="text-xs text-primary/40 font-semibold">{title}</h3>
          </div>
        )}
        <ScrollArea className="mt-4 flex-1 px-2 py-2">
          <div className="flex flex-col space-y-1">
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            ) : error ? (
              <div className="text-xs text-muted-foreground text-center py-4">
                {error}
              </div>
            ) : fileTree.length === 0 ? (
              <div className="text-xs text-muted-foreground text-center py-4">
                No documents found
              </div>
            ) : (
              fileTree.map((node) => (
                <TreeNodeComponent
                  key={node.id}
                  node={node}
                  level={0}
                  currentFile={currentFile}
                  onFileSelect={(id) => {
                    setCurrentFile(id)
                    if (onFileSelect) {
                      onFileSelect(id)
                    }
                  }}
                />
              ))
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}