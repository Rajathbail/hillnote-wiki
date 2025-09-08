import { generateRobotsTxt } from '../lib/seo-utils'

/**
 * Next.js robots.txt route handler
 * Usage: Export this from your app/robots.txt/route.js file
 * 
 * @example
 * // app/robots.txt/route.js
 * export { GET } from '@hillnote/wiki/routes/robots'
 */
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const robotsTxt = generateRobotsTxt(baseUrl)
  
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}