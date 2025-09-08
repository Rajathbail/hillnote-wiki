// Route exports for Next.js App Router
// These are kept separate to avoid bundling client components in server routes

export { default as sitemapRoute } from './routes/sitemap'
export { GET as robotsRoute } from './routes/robots'
export { GET as aiSitemapRoute } from './routes/ai-sitemap'
export { default as DocIndexPage } from './routes/doc-index'

// Document page exports are handled differently due to client components
// Users should create their own document page using the provided utilities