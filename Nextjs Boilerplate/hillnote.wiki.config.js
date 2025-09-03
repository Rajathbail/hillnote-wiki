export const wikiConfig = {
  // Site metadata
  siteName: "HillnoteWiki",
  siteDescription: "Beautiful documentation with Next.js and Shadcn UI",
  
  // Workspace Configuration
  workspace: {
    // Path to the workspace folder (relative to public directory)
    path: "/Welcome to Hillnote! /",
    // Enable workspace connection
    enabled: true,
    // Documents folder name
    documentsFolder: "documents",
    // Registry file name
    registryFile: "documents-registry.json",
    // Initial file to display when the app loads
    initialFile: "documents/Start Here .md",
    // Custom document order (optional)
    customOrder: [
      // Root level ordering
      "documents/Start Here .md",
      "documents/Customization",
      "documents/More",
      
      // Order within Connect folder
      "documents/Connect/Connect with Claude .md",
      "documents/Connect/Connect with ChatGPT.md",
      "documents/Connect/Connect with Gemini.md",
      "documents/Connect/Connect with Deepseek.md",
      "documents/Connect/Connect with Perplexity.md",
    ]
  },
  
  // UI Configuration
  ui: {
    // Comments/Authors Notes section
    authorsNotes: {
      enabled: true,
      title: "Author's Notes"
    },
    
    // Related documents section
    relatedDocuments: {
      enabled: true,
      title: "Related Documents"
    }
  }
}

export default wikiConfig