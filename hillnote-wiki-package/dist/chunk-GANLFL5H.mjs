// src/lib/slug-utils.js
function pathToSlug(path) {
  return path.replace("documents/", "").replace(".md", "").replace(/&/g, "and").toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-\/]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}
var slugToPathMap = null;
var pathToSlugMap = null;
async function initializeSlugMapping(siteConfig) {
  var _a;
  const { fetchWorkspaceRegistry } = await import("./workspace-SBB76BQF.mjs");
  const registry = await fetchWorkspaceRegistry(siteConfig);
  if (!registry) {
    return false;
  }
  slugToPathMap = /* @__PURE__ */ new Map();
  pathToSlugMap = /* @__PURE__ */ new Map();
  (_a = registry.documents) == null ? void 0 : _a.forEach((doc) => {
    const slug = pathToSlug(doc.path);
    slugToPathMap.set(slug, doc.path);
    pathToSlugMap.set(doc.path, slug);
  });
  return true;
}
function slugToPath(slug) {
  if (!slugToPathMap) {
    console.warn("Slug mapping not initialized, using fallback");
    return `documents/${slug}.md`;
  }
  return slugToPathMap.get(slug) || `documents/${slug}.md`;
}
function createSlugMap(documents) {
  const slugMap = /* @__PURE__ */ new Map();
  const pathMap = /* @__PURE__ */ new Map();
  documents.forEach((doc) => {
    const slug = pathToSlug(doc.path);
    slugMap.set(slug, doc.path);
    pathMap.set(doc.path, slug);
  });
  return { slugMap, pathMap };
}

export {
  pathToSlug,
  initializeSlugMapping,
  slugToPath,
  createSlugMap
};
//# sourceMappingURL=chunk-GANLFL5H.mjs.map