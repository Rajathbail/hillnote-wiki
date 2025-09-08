# Setup Guide for @hillnote/wiki

This guide will help you set up @hillnote/wiki in your Next.js project step by step.

## Prerequisites

- Next.js 13+ with App Router
- Node.js 18+
- A Hillnote workspace with markdown documents

## Step-by-Step Setup

### Step 1: Install the Package

```bash
npm install @hillnote/wiki
```

### Step 2: Create the Providers Component

Create `app/providers.js`:

```javascript
"use client"

import { ThemeProvider } from '@hillnote/wiki'

export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
```

### Step 3: Update Root Layout

Update `app/layout.js`:

```javascript
import { Providers } from "./providers"
import "@hillnote/wiki/styles"
import "./globals.css"

export const metadata = {
  title: "My Wiki",
  description: "Documentation powered by Hillnote",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

### Step 4: Configure CSS Variables

Update `app/globals.css`:

```css
@import "tailwindcss";

:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  --secondary: 0 0% 96.1%;
  --secondary-foreground: 0 0% 9%;
  --muted: 0 0% 96.1%;
  --muted-foreground: 0 0% 45.1%;
  --accent: 0 0% 96.1%;
  --accent-foreground: 0 0% 9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 89.8%;
  --input: 0 0% 89.8%;
  --ring: 0 0% 3.9%;
  --radius: 0.5rem;
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --card: 0 0% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 0 0% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 0 0% 9%;
  --secondary: 0 0% 14.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 0 0% 14.9%;
  --muted-foreground: 0 0% 63.9%;
  --accent: 0 0% 14.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 14.9%;
  --input: 0 0% 14.9%;
  --ring: 0 0% 83.1%;
}

body {
  background: hsl(var(--background));
  color: hsl(var(--foreground));
}
```

### Step 5: Configure Tailwind

Create or update `tailwind.config.js`:

```javascript
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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

### Step 6: Copy Your Hillnote Workspace

Copy your Hillnote workspace to the public folder:

```bash
cp -r ~/your-hillnote-workspace public/workspace
```

Your workspace structure should look like:
```
public/
└── workspace/
    ├── documents/
    │   ├── Start Here.md
    │   ├── Getting Started.md
    │   └── ...
    └── documents-registry.json
```

### Step 7: Create the Main Wiki Page

Create `app/page.js`:

```javascript
"use client"

import { Document, Navbar, ConfigProvider, pathToSlug, initializeSlugMapping } from '@hillnote/wiki'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const wikiConfig = {
  siteName: "My Wiki",
  workspace: {
    path: "/workspace/",
    enabled: true,
    documentsFolder: "documents",
    registryFile: "documents-registry.json",
    initialFile: "documents/Start Here.md"
  },
  ui: {
    authorsNotes: true,
    navigationText: "All Pages",
    navigationMode: "wiki"  // Options: "emoji" or "wiki"
  }
}

export default function WikiPage() {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    initializeSlugMapping(wikiConfig)
  }, [])

  const handleFileSelect = (filePath) => {
    if (!filePath) return
    const slug = pathToSlug(filePath)
    router.push(`/doc/${slug}`)
  }

  if (!mounted) return null

  return (
    <ConfigProvider config={wikiConfig}>
      <div className="h-screen flex flex-col">
        <Navbar siteName={wikiConfig.siteName} showThemeToggle={true} />
        <Document 
          siteConfig={wikiConfig}
          initialFile={wikiConfig.workspace.initialFile}
          showNavigation={true}
          showTableOfContents={true}
          onFileSelect={handleFileSelect}
        />
      </div>
    </ConfigProvider>
  )
}
```

### Step 8: Create Dynamic Document Routes

Create `app/doc/[...path]/page.js`:

```javascript
"use client"

import { Document, Navbar, ConfigProvider, pathToSlug, slugToPath, initializeSlugMapping } from '@hillnote/wiki'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

const wikiConfig = {
  siteName: "My Wiki",
  workspace: {
    path: "/workspace/",
    enabled: true,
    documentsFolder: "documents",
    registryFile: "documents-registry.json",
    initialFile: "documents/Start Here.md"
  },
  ui: {
    authorsNotes: true,
    navigationText: "All Pages",
    navigationMode: "wiki"  // Options: "emoji" or "wiki"
  }
}

export default function DocumentPage() {
  const params = useParams()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [filePath, setFilePath] = useState(wikiConfig.workspace.initialFile)
  
  const slug = params.path ? params.path.join('/') : null

  useEffect(() => {
    setMounted(true)
    const initAndSetPath = async () => {
      await initializeSlugMapping(wikiConfig)
      if (slug) {
        const path = slugToPath(slug)
        setFilePath(path)
      }
    }
    initAndSetPath()
  }, [slug])

  const handleFileSelect = (filePath) => {
    if (!filePath) return
    const slug = pathToSlug(filePath)
    router.push(`/doc/${slug}`)
  }

  if (!mounted) return null

  return (
    <ConfigProvider config={wikiConfig}>
      <div className="h-screen flex flex-col">
        <Navbar siteName={wikiConfig.siteName} showThemeToggle={true} />
        <Document 
          siteConfig={wikiConfig}
          initialFile={filePath}
          showNavigation={true}
          showTableOfContents={true}
          onFileSelect={handleFileSelect}
        />
      </div>
    </ConfigProvider>
  )
}
```

### Step 9: Run Your Application

```bash
npm run dev
```

Visit `http://localhost:3000` to see your wiki!

## Navigation Modes

The sidebar navigation supports two different display modes:

### Emoji Mode (Default)
Shows folders with emoji icons (📁) and expand/collapse arrows (▶/▼). This is the default mode.

```javascript
ui: {
  navigationMode: "emoji"  // or omit for default
}
```

### Wiki Mode
Clean accordion-style navigation similar to traditional wiki sites. Folders expand/collapse smoothly without arrows.

```javascript
ui: {
  navigationMode: "wiki"
}
```

## Troubleshooting

### Theme not changing
- Ensure `suppressHydrationWarning` is added to the `<html>` element in layout.js
- Check that CSS variables are properly defined in globals.css
- Verify Tailwind config includes the theme color definitions

### Navigation not working
- Make sure `initializeSlugMapping` is called on mount
- Check that your workspace path matches the actual folder in public
- Verify documents-registry.json exists and is properly formatted

### Hydration errors
- Always use the `mounted` state pattern shown above
- Ensure ThemeProvider is at the root level in providers.js
- Don't duplicate ThemeProvider in individual pages

## Next Steps

- Customize the theme colors in globals.css
- Add custom components to your wiki pages
- Implement search functionality
- Add analytics tracking