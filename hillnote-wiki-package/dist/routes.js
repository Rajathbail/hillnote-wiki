var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes.js
var routes_exports = {};
__export(routes_exports, {
  DocIndexPage: () => DocIndexPage,
  aiSitemapRoute: () => GET2,
  robotsRoute: () => GET,
  sitemapRoute: () => sitemap
});
module.exports = __toCommonJS(routes_exports);

// src/lib/documents-server.js
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_gray_matter = __toESM(require("gray-matter"));

// src/lib/slug-utils.js
function pathToSlug(path2) {
  return path2.replace("documents/", "").replace(".md", "").replace(/&/g, "and").toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-\/]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}

// src/lib/documents-server.js
var publicDir = import_path.default.join(process.cwd(), "public");
async function getDocumentRegistry(siteConfig) {
  try {
    const registryPath = import_path.default.join(
      publicDir,
      siteConfig.workspace.path,
      siteConfig.workspace.registryFile
    );
    const registryContent = import_fs.default.readFileSync(registryPath, "utf8");
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
var import_navigation = require("next/navigation");
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
    (0, import_navigation.redirect)(`/doc/${slug}`);
  }
  const registry = await getDocumentRegistry(siteConfig);
  if (registry.documents && registry.documents.length > 0) {
    const firstDoc = registry.documents[0];
    const slug = pathToSlug(firstDoc.path);
    (0, import_navigation.redirect)(`/doc/${slug}`);
  }
  (0, import_navigation.redirect)("/");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DocIndexPage,
  aiSitemapRoute,
  robotsRoute,
  sitemapRoute
});
//# sourceMappingURL=routes.js.map