export const siteConfig = {
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
    // Initial file to display when the app loads (path relative to documents folder)
    // e.g., "Start Here .md" or "Connect/Connect with ChatGPT.md"
    initialFile: "documents/Start Here .md",
    // Custom document order (optional)
    // Define the order of documents/folders by their paths
    // Items not in this list will appear after, in their registry order
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
      // Add more paths here to customize the order
    ],
  },
  
  // UI Configuration - only keeping content-related settings
  ui: {
    // Comments/Authors Notes section
    authorsNotes: {
      // Show/hide authors notes section at the bottom
      enabled: true,
      // Section title
      title: "Author's Notes",
    },
    
    // Related documents section
    relatedDocuments: {
      // Show/hide related documents section
      enabled: true,
      // Section title
      title: "Related Documents",
    }
  }
}