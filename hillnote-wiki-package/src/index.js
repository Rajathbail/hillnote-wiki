// Import styles
import './styles/globals.css'
import './styles/markdown.css'

// Main Wiki Components
export { Navbar } from './components/wiki/Navbar'
export { Document } from './components/wiki/Document'
export { TableOfContents } from './components/wiki/TableOfContents'

// Core Components
export { MarkdownRenderer } from './components/markdown-renderer'
export { NavigationSidebar } from './components/navigation-sidebar'
export { ThemeProvider } from './components/theme-provider'
export { ConfigProvider, useConfig } from './components/ConfigProvider'

// UI Components
export * from './components/ui/button'
export * from './components/ui/checkbox'
export * from './components/ui/dialog'
export * from './components/ui/dropdown-menu'
export * from './components/ui/input'
export * from './components/ui/scroll-area'
export * from './components/ui/separator'
export * from './components/ui/tabs'

// Configuration
export { defaultConfig } from './config/hillnote-wiki.config'