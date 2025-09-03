// Default configuration
export const defaultConfig = {
  siteName: "Hillnote Wiki",
  siteDescription: "Beautiful documentation powered by Hillnote",
  
  workspace: {
    path: "/workspace/",
    enabled: true,
    documentsFolder: "documents",
    registryFile: "documents-registry.json",
    initialFile: undefined,
    customOrder: []
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