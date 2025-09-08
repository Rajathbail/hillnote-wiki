export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const hostname = baseUrl.replace(/^https?:\/\//, '')
  
  const robotsTxt = `# Hillnote Wiki Documentation
# AI-friendly structured data endpoint: ${baseUrl}/api/ai-sitemap
# This endpoint provides JSON with document descriptions and relationships

User-Agent: *
Allow: /
Allow: /api/ai-sitemap
Disallow: /api/

User-Agent: GPTBot
Allow: /
Allow: /api/ai-sitemap

User-Agent: ChatGPT-User
Allow: /
Allow: /api/ai-sitemap

User-Agent: CCBot
Allow: /
Allow: /api/ai-sitemap

User-Agent: Googlebot
Allow: /

User-Agent: Bingbot
Allow: /

# Site information
Host: ${hostname}
Sitemap: ${baseUrl}/sitemap.xml

# For AI assistants: Access /api/ai-sitemap for structured document data
# This endpoint provides:
# - Document titles and descriptions
# - Document relationships and references
# - Navigation structure
# - Last modified dates`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}