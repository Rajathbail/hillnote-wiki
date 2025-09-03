# @hillnote/wiki

Turn your Hillnote workspace into a beautiful wiki for your Next.js projects. This package provides ready-to-use components for creating documentation sites powered by your Hillnote workspace.

## Installation

```bash
npm install @hillnote/wiki
# or
yarn add @hillnote/wiki
# or
pnpm add @hillnote/wiki
```

## Quick Start

### 1. Basic Setup

Create a new page in your Next.js app:

```jsx
// app/wiki/page.jsx
"use client"

import { Document, Navbar, ThemeProvider, ConfigProvider } from '@hillnote/wiki'

const wikiConfig = {
  siteName: "My Documentation",
  siteDescription: "Documentation powered by Hillnote",
  workspace: {
    path: "/workspace/", // Path to your Hillnote workspace in public folder
    enabled: true,
    documentsFolder: "documents",
    registryFile: "documents-registry.json",
    initialFile: "documents/Start Here.md"
  },
  ui: {
    showNavigation: true,
    showTableOfContents: true,
    showTitleBar: true,
    showThemeToggle: true
  }
}

export default function WikiPage() {
  return (
    <ConfigProvider config={wikiConfig}>
      <ThemeProvider>
        <div className="h-screen flex flex-col">
          <Navbar 
          siteName={wikiConfig.siteName}
          showThemeToggle={true}
        />
        <Document 
          initialFile={wikiConfig.workspace.initialFile}
          showNavigation={true}
          showTableOfContents={true}
        />
        </div>
      </ThemeProvider>
    </ConfigProvider>
  )
}
```

### 2. Copy Your Hillnote Workspace

Copy your Hillnote workspace to your Next.js public folder:

```bash
cp -r ~/path-to-hillnote-workspace public/workspace
```

### 3. Setup Styles and Tailwind

1. Import the package CSS in your layout:

```jsx
// app/layout.jsx
import "@hillnote/wiki/dist/index.css"
```

2. Update your `tailwind.config.js` to include the package's content and custom colors:

```js
// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    // ... your other content paths
    "./node_modules/@hillnote/wiki/dist/**/*.{js,mjs}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}
```

## Components

### Navbar

The navigation bar component for your wiki.

```jsx
import { Navbar } from '@hillnote/wiki'

<Navbar 
  siteName="My Wiki"
  showSiteName={true}
  showThemeToggle={true}
  className="custom-navbar"
>
  {/* Additional navbar items */}
</Navbar>
```

### Document

The main document viewer with navigation sidebar and table of contents.

```jsx
import { Document } from '@hillnote/wiki'

<Document 
  initialFile="documents/index.md"
  showNavigation={true}
  showTableOfContents={true}
  navigationTitle="All Pages"
  tocTitle="On This Page"
  onFileSelect={(file) => console.log('Selected:', file)}
/>
```

### TableOfContents

A standalone table of contents component.

```jsx
import { TableOfContents } from '@hillnote/wiki'

<TableOfContents 
  showTitle={true}
  title="Contents"
/>
```

## Configuration

Create a configuration file for your wiki:

```javascript
// config/wiki.config.js

export const wikiConfig = {
  siteName: "My Documentation",
  siteDescription: "Beautiful docs with Hillnote",
  
  workspace: {
    path: "/workspace/",
    enabled: true,
    documentsFolder: "documents",
    registryFile: "documents-registry.json",
    initialFile: "documents/Getting Started.md",
    customOrder: [
      "documents/Getting Started.md",
      "documents/Installation.md",
      "documents/Configuration.md"
    ]
  },
  
  ui: {
    showNavigation: true,
    showTableOfContents: true,
    showTitleBar: true,
    showThemeToggle: true,
    
    authorsNotes: {
      enabled: true,
      title: "Author's Notes"
    },
    
    relatedDocuments: {
      enabled: true,
      title: "Related Documents"
    }
  }
}
```

## Advanced Usage

### Custom Layout

You can compose the components to create custom layouts:

```jsx
import { useState } from 'react'
import { Navbar, Document, MarkdownRenderer, NavigationSidebar } from '@hillnote/wiki'

export default function CustomWiki() {
  const [selectedFile, setSelectedFile] = useState(null)
  
  return (
    <div className="custom-layout">
      <Navbar siteName="My Wiki" />
      
      <div className="flex">
        <NavigationSidebar 
          onFileSelect={setSelectedFile}
          selectedFile={selectedFile}
        />
        
        <main className="flex-1">
          <MarkdownRenderer 
            filePath={selectedFile}
            onFileSelect={setSelectedFile}
          />
        </main>
      </div>
    </div>
  )
}
```

### Theming

The package uses Tailwind CSS and supports dark mode out of the box:

```jsx
import { ThemeProvider } from '@hillnote/wiki'

export default function App({ children }) {
  return (
    <ThemeProvider 
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </ThemeProvider>
  )
}
```

## Workspace Structure

Your Hillnote workspace should have this structure in your public folder:

```
public/
└── workspace/
    ├── documents/
    │   ├── Getting Started.md
    │   ├── Installation.md
    │   └── ...
    └── documents-registry.json
```

The `documents-registry.json` file should contain metadata about your documents:

```json
{
  "documents": [
    {
      "path": "documents/Getting Started.md",
      "title": "Getting Started",
      "lastModified": "2024-01-01T00:00:00Z"
    }
  ]
}
```

## JavaScript/TypeScript Support

The package works with both JavaScript and TypeScript. For TypeScript users, types are available:

```tsx
import type { 
  NavbarProps, 
  DocumentProps, 
  TableOfContentsProps,
  HillnoteWikiConfig 
} from '@hillnote/wiki'
```

For JavaScript users, you can use JSDoc comments for type hints:

```javascript
/** @type {import('@hillnote/wiki').HillnoteWikiConfig} */
const wikiConfig = {
  // your configuration
}
```

## Requirements

- Next.js 13+ (with App Router)
- React 18+
- Tailwind CSS (for styling)
- A Hillnote workspace

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please visit our [GitHub repository](https://github.com/yourusername/hillnote-wiki).