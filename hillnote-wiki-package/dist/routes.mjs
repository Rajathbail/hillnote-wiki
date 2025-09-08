import {
  pathToSlug
} from "./chunk-GANLFL5H.mjs";

// src/lib/documents-server.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
var publicDir = path.join(process.cwd(), "public");
async function getDocumentRegistry(siteConfig) {
  try {
    const registryPath = path.join(
      publicDir,
      siteConfig.workspace.path,
      siteConfig.workspace.registryFile
    );
    const registryContent = fs.readFileSync(registryPath, "utf8");
    return JSON.parse(registryContent);
  } catch (error) {
    console.error("Error reading document registry:", error);
    return { documents: [], folders: [] };
  }
}

// src/lib/seo-utils.js
async function generateSitemapEntries(baseUrl = "https://example.com", siteConfig) {
  var _a;
  const registry = await getDocumentRegistry(siteConfig);
  const documentEntries = ((_a = registry.documents) == null ? void 0 : _a.map((doc) => {
    const slug = pathToSlug(doc.path);
    return {
      url: `${baseUrl}/doc/${slug}`,
      lastModified: /* @__PURE__ */ new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    };
  })) || [];
  const staticPages = [
    {
      url: baseUrl,
      lastModified: /* @__PURE__ */ new Date(),
      changeFrequency: "daily",
      priority: 1
    },
    {
      url: `${baseUrl}/doc`,
      lastModified: /* @__PURE__ */ new Date(),
      changeFrequency: "daily",
      priority: 0.9
    }
  ];
  return [...staticPages, ...documentEntries];
}
function generateRobotsTxt(baseUrl = "https://example.com") {
  const hostname = baseUrl.replace(/^https?:\/\//, "");
  return `# Hillnote Wiki Documentation
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
# - Last modified dates`;
}
async function generateAISitemap(baseUrl = "https://example.com", siteConfig = {}) {
  var _a, _b;
  const registry = await getDocumentRegistry(siteConfig);
  const aiSitemap = {
    site: {
      name: siteConfig.siteName || "HillnoteWiki",
      description: siteConfig.siteDescription || "Beautiful documentation with Next.js",
      baseUrl
    },
    documents: ((_a = registry.documents) == null ? void 0 : _a.map((doc) => {
      const slug = pathToSlug(doc.path);
      return {
        title: doc.name,
        url: `${baseUrl}/doc/${slug}`,
        path: doc.path,
        description: doc.description || `Documentation page: ${doc.name}`,
        emoji: doc.emoji,
        lastModified: doc.lastModified,
        references: {
          referencedIn: doc.referencedIn || [],
          containsReferencesTo: doc.containsReferencesTo || []
        },
        type: doc.type
      };
    })) || [],
    navigation: {
      home: baseUrl,
      documentation: `${baseUrl}/doc`,
      aiSitemap: `${baseUrl}/api/ai-sitemap`,
      standardSitemap: `${baseUrl}/sitemap.xml`
    },
    metadata: {
      totalDocuments: ((_b = registry.documents) == null ? void 0 : _b.length) || 0,
      lastUpdated: (/* @__PURE__ */ new Date()).toISOString(),
      format: "This endpoint provides structured JSON data optimized for AI crawlers and language models"
    }
  };
  return aiSitemap;
}

// src/routes/sitemap.js
async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const siteConfig = {
    workspace: {
      path: process.env.NEXT_PUBLIC_WORKSPACE_PATH || "/Welcome to Hillnote! /",
      enabled: true,
      documentsFolder: "documents",
      registryFile: "documents-registry.json"
    }
  };
  return await generateSitemapEntries(baseUrl, siteConfig);
}

// src/routes/robots.js
async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const robotsTxt = generateRobotsTxt(baseUrl);
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}

// src/routes/ai-sitemap.js
async function GET2() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const siteConfig = {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "HillnoteWiki",
    siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Beautiful documentation with Next.js",
    workspace: {
      path: process.env.NEXT_PUBLIC_WORKSPACE_PATH || "/Welcome to Hillnote! /",
      enabled: true,
      documentsFolder: "documents",
      registryFile: "documents-registry.json"
    }
  };
  const aiSitemap = await generateAISitemap(baseUrl, siteConfig);
  return Response.json(aiSitemap, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

// src/routes/doc-index.js
import { redirect } from "next/navigation";
async function DocIndexPage() {
  const siteConfig = {
    workspace: {
      path: process.env.NEXT_PUBLIC_WORKSPACE_PATH || "/Welcome to Hillnote! /",
      enabled: true,
      documentsFolder: "documents",
      registryFile: "documents-registry.json",
      initialFile: process.env.NEXT_PUBLIC_INITIAL_FILE || "documents/Start Here .md"
    }
  };
  if (siteConfig.workspace.initialFile) {
    const slug = pathToSlug(siteConfig.workspace.initialFile);
    redirect(`/doc/${slug}`);
  }
  const registry = await getDocumentRegistry(siteConfig);
  if (registry.documents && registry.documents.length > 0) {
    const firstDoc = registry.documents[0];
    const slug = pathToSlug(firstDoc.path);
    redirect(`/doc/${slug}`);
  }
  redirect("/");
}
export {
  DocIndexPage,
  GET2 as aiSitemapRoute,
  GET as robotsRoute,
  sitemap as sitemapRoute
};
//# sourceMappingURL=routes.mjs.map