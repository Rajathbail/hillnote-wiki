# Changelog

## [0.2.6] - 2025-09-08

### Added
- 📱 Full responsive design for mobile and tablet devices
- 🍔 Mobile hamburger menu for navigation access
- 📍 Breadcrumb navigation on mobile devices
- 📑 Slide-out navigation drawer for mobile/tablet
- 📋 Slide-out table of contents panel for mobile/tablet
- 🖥️ Desktop sidebars remain visible on larger screens

### Changed
- Document component now includes built-in responsive layout
- Navbar component now has responsive padding (px-4 mobile, px-8 desktop)
- Navigation and TOC use Sheet components for mobile overlays

### Fixed
- Mobile users can now properly navigate the wiki on small screens
- Touch-friendly buttons and interactions for mobile devices

## [0.2.5] - 2025-09-08

### Fixed
- Handle ampersand (&) in file names by converting to "and" in slugs
- Fix 404 errors for files with special characters like "Sync & Collaborate"

## [0.2.4] - 2025-09-08

### Fixed
- Wiki mode accordion now stays open when clicking files inside folders
- Accordion state is properly managed and persisted during navigation

### Added
- Documentation for navigation modes (emoji vs wiki)

## [0.2.3] - 2025-09-08

### Added
- Slug mapping utilities (`pathToSlug`, `slugToPath`, `initializeSlugMapping`)
- Workspace utilities exported to npm package (`buildFileTree`, `fetchWorkspaceRegistry`, `getWorkspaceFileTree`)

### Fixed
- Direct URL access now works correctly with async slug initialization
- Theme toggle functionality with proper ThemeProvider setup
- Background color changes correctly with theme toggle

### Changed
- Document component now requires `siteConfig` prop for proper initialization
- Updated README with accurate setup instructions

## [0.2.2] - 2025-09-08

### Added
- Workspace utility functions exported from package
- File tree building functionality

### Fixed
- Navigation sidebar now shows actual workspace files instead of placeholder items

## [0.2.1] - 2025-09-08

### Fixed
- Removed non-existent @radix-ui/react-sheet dependency
- Fixed config.ui.authorsNotes undefined error
- Corrected file path references in configuration

## [0.2.0] - 2025-09-08

### Added
- 🎯 Smart URL routing with slug conversion for cleaner URLs
- 🤖 AI-friendly sitemap generation with structured data endpoint
- 📁 Auto-expanding navigation folders for active documents
- 🔍 SEO utilities for generating sitemaps and robots.txt
- 📊 Support for document descriptions in registry
- 🎨 Accordion UI component for wiki-style navigation
- 📱 Sheet UI component for mobile navigation drawers

### Changed
- Navigation sidebar now accepts `siteConfig` as a prop for better modularity
- All server utilities now require `siteConfig` parameter
- Improved file tree building with custom ordering support
- Enhanced navigation with two modes: emoji and wiki (accordion)

### Fixed
- Sidebar now correctly highlights the active document
- URL synchronization when navigating through sidebar
- Import paths now use relative imports instead of aliases

## [0.1.4] - Previous Release

- Initial release with basic wiki components
- Markdown rendering support
- Theme provider and dark mode
- Basic navigation sidebar