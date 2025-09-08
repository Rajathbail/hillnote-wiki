import React from 'react'
import { ThemeToggle } from '../theme-toggle'

export const Navbar = ({
  siteName = 'Hillnote Wiki',
  showSiteName = true,
  showThemeToggle = true,
  className = '',
  children
}) => {
  return (
    <header className={`h-16 bg-background flex items-center justify-between px-4 md:px-8 pt-8 pb-4 ${className}`}>
      {showSiteName && (
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">{siteName}</span>
        </div>
      )}
      <div className="flex items-center gap-4">
        {children}
        {showThemeToggle && <ThemeToggle />}
      </div>
    </header>
  )
}