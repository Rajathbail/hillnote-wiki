"use client"

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Copy, Sparkles, AlertTriangle, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ScratchSpace({ title, variant = 'default', content, collapsed: initialCollapsed = true }) {
  const [isCollapsed, setIsCollapsed] = useState(initialCollapsed)
  
  const variantConfig = {
    'ai-response': {
      icon: <Sparkles size={14} className="sparkle-icon text-purple-500 dark:text-purple-400" />,
      borderClass: 'border-purple-300 dark:border-purple-700',
      bgClass: 'bg-purple-50/30 dark:bg-purple-900/10',
      shadowClass: 'shadow-[0_0_15px_rgba(147,51,234,0.1)] dark:shadow-[0_0_15px_rgba(147,51,234,0.15)]',
      headerBgClass: 'bg-gradient-to-r from-purple-50/80 to-purple-50/30 dark:from-purple-900/30 dark:to-purple-900/10 border-purple-200 dark:border-purple-800',
      textColorClass: 'text-purple-600 dark:text-purple-400',
      iconColorClass: 'text-purple-500 dark:text-purple-400',
      defaultTitle: 'AI Response'
    },
    'conflict': {
      icon: <AlertTriangle size={14} className="text-orange-500 dark:text-orange-400" />,
      borderClass: 'border-orange-300 dark:border-orange-700',
      bgClass: 'bg-orange-50/30 dark:bg-orange-900/10',
      shadowClass: 'shadow-[0_0_15px_rgba(255,165,0,0.1)] dark:shadow-[0_0_15px_rgba(255,165,0,0.15)]',
      headerBgClass: 'bg-orange-50/50 dark:bg-orange-900/20',
      textColorClass: 'text-orange-600 dark:text-orange-400',
      iconColorClass: 'text-orange-500 dark:text-orange-400',
      defaultTitle: 'Merge Conflict'
    },
    'conflict-version': {
      icon: <Users size={14} className="text-yellow-600 dark:text-yellow-400" />,
      borderClass: 'border-yellow-300 dark:border-yellow-700',
      bgClass: 'bg-yellow-50/30 dark:bg-yellow-900/10',
      shadowClass: 'shadow-[0_0_10px_rgba(255,255,0,0.1)]',
      headerBgClass: 'bg-yellow-50/50 dark:bg-yellow-900/20',
      textColorClass: 'text-yellow-700 dark:text-yellow-400',
      iconColorClass: 'text-yellow-600 dark:text-yellow-400',
      defaultTitle: 'User Edit'
    },
    'default': {
      icon: null,
      borderClass: 'border-border',
      bgClass: '',
      shadowClass: '',
      headerBgClass: 'bg-background hover:bg-muted/50',
      textColorClass: '',
      iconColorClass: 'text-muted-foreground',
      defaultTitle: 'Note'
    }
  }
  
  const config = variantConfig[variant] || variantConfig.default
  const displayTitle = title || config.defaultTitle
  
  const handleCopy = () => {
    // Create a temporary element to get the text content
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = content
    const textContent = tempDiv.textContent || tempDiv.innerText || ''
    
    // Copy to clipboard
    navigator.clipboard.writeText(textContent).then(() => {
      console.log('Content copied to clipboard')
    }).catch(err => {
      console.error('Failed to copy:', err)
    })
  }
  
  return (
    <div 
      className={cn(
        "scratch-space my-2 transition-all duration-75",
        !isCollapsed && "rounded-md border border-dashed",
        !isCollapsed && config.borderClass,
        !isCollapsed && config.bgClass,
        !isCollapsed && variant === 'ai-response' && config.shadowClass,
        !isCollapsed && variant === 'conflict' && config.shadowClass,
        !isCollapsed && variant === 'conflict-version' && config.shadowClass
      )}
      data-expanded={!isCollapsed}
      data-variant={variant}
    >
      <div 
        className={cn(
          "flex items-center p-2 text-sm select-none",
          !isCollapsed && "bg-background hover:bg-muted/50 border-border rounded-md",
          !isCollapsed && variant === 'ai-response' && config.headerBgClass,
          isCollapsed && "bg-background"
        )}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex-1 flex items-center min-w-0">
          <span 
            className={cn(
              "mr-2 cursor-pointer p-1 hover:bg-muted rounded-sm",
              isCollapsed && "text-muted-foreground",
              variant === 'ai-response' && config.iconColorClass
            )}
            onClick={(e) => {
              e.stopPropagation()
              setIsCollapsed(!isCollapsed)
            }}
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
          </span>
          
          {variant === 'ai-response' ? (
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 cursor-pointer font-medium truncate">
                {config.icon}
                <span className={cn(
                  "truncate",
                  isCollapsed && "text-muted-foreground",
                  !isCollapsed && config.textColorClass
                )}>
                  {displayTitle}
                </span>
              </span>
            </div>
          ) : variant === 'conflict' ? (
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 cursor-pointer font-medium truncate">
                {config.icon}
                <span className={cn(
                  "truncate",
                  isCollapsed && "text-muted-foreground",
                  !isCollapsed && config.textColorClass
                )}>
                  {displayTitle}
                </span>
              </span>
            </div>
          ) : variant === 'conflict-version' ? (
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 cursor-pointer font-medium truncate">
                {config.icon}
                <span className={cn(
                  "truncate",
                  isCollapsed && "text-muted-foreground",
                  !isCollapsed && config.textColorClass
                )}>
                  {displayTitle}
                </span>
              </span>
            </div>
          ) : (
            displayTitle && (
              <span 
                className={cn(
                  "cursor-text truncate mr-2",
                  isCollapsed && "text-muted-foreground"
                )}
              >
                {displayTitle}
              </span>
            )
          )}
          
          {isCollapsed && (
            <div className={cn(
              "flex-1 h-[1px] bg-border/50 mx-2",
              variant === 'ai-response' && "bg-purple-200/50 dark:bg-purple-700/30"
            )} />
          )}
        </div>
        
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "h-7 w-7 p-0",
              isCollapsed && "text-muted-foreground",
              variant === 'ai-response' && "text-purple-500 dark:text-purple-400"
            )}
            onClick={(e) => {
              e.stopPropagation()
              handleCopy()
            }}
          >
            <Copy size={14} />
          </Button>
        </div>
      </div>
      
      {(true || !isCollapsed) && (
        <div 
          className={cn(
            "scratch-space-content transition-[max-height,opacity,transform] duration-200 ease-out overflow-hidden",
            variant === 'ai-response' && "bg-gradient-to-b from-purple-50/20 to-transparent dark:from-purple-900/10 dark:to-transparent",
            variant === 'conflict' && "bg-gradient-to-b from-orange-50/20 to-transparent dark:from-orange-900/10 dark:to-transparent",
            variant === 'conflict-version' && "bg-gradient-to-b from-yellow-50/20 to-transparent dark:from-yellow-900/10 dark:to-transparent"
          )}
          style={{
            maxHeight: isCollapsed ? '0' : 'none',
            opacity: isCollapsed ? 0 : 1,
            padding: isCollapsed ? '0' : '1rem',
            transform: `translateY(${isCollapsed ? '-10px' : '0'})`,
            transitionProperty: 'opacity, transform, padding',
            transitionDuration: '200ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div className={cn(
            "prose dark:prose-invert",
            variant === 'ai-response' && "prose-purple dark:prose-purple"
          )}>
            <div 
              className="content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      )}
    </div>
  )
}