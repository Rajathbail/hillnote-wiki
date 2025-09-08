// src/lib/workspace.js
function buildFileTree(registry, siteConfig) {
  var _a, _b, _c, _d;
  const tree = [];
  const nodeMap = /* @__PURE__ */ new Map();
  const orderMap = /* @__PURE__ */ new Map();
  (_a = registry.documents) == null ? void 0 : _a.forEach((doc, index) => {
    orderMap.set(doc.path, index);
  });
  (_b = registry.folders) == null ? void 0 : _b.forEach((folder, index) => {
    var _a2;
    orderMap.set(folder.path, index + (((_a2 = registry.documents) == null ? void 0 : _a2.length) || 0));
  });
  (_c = registry.folders) == null ? void 0 : _c.forEach((folder) => {
    const pathParts = folder.path.split("/");
    const folderName = pathParts[pathParts.length - 1];
    const node = {
      id: folder.path,
      name: folderName,
      type: "directory",
      path: folder.path,
      emoji: folder.emoji || "\u{1F4C1}",
      children: []
    };
    nodeMap.set(folder.path, node);
  });
  (_d = registry.documents) == null ? void 0 : _d.forEach((doc) => {
    const pathParts = doc.path.split("/");
    const fileName = pathParts[pathParts.length - 1];
    const node = {
      id: doc.path,
      name: fileName,
      type: "file",
      path: doc.path,
      emoji: doc.emoji || "\u{1F335}"
    };
    nodeMap.set(doc.path, node);
  });
  nodeMap.forEach((node, path) => {
    const pathParts = path.split("/");
    if (pathParts.length === 2) {
      tree.push(node);
    } else if (pathParts.length > 2) {
      const parentPath = pathParts.slice(0, -1).join("/");
      const parent = nodeMap.get(parentPath);
      if (parent && parent.children) {
        parent.children.push(node);
      } else {
        tree.push(node);
      }
    }
  });
  const sortNodes = (nodes) => {
    nodes.sort((a, b) => {
      var _a2;
      if (((_a2 = siteConfig == null ? void 0 : siteConfig.workspace) == null ? void 0 : _a2.customOrder) && siteConfig.workspace.customOrder.length > 0) {
        const customIndexA = siteConfig.workspace.customOrder.indexOf(a.path);
        const customIndexB = siteConfig.workspace.customOrder.indexOf(b.path);
        if (customIndexA !== -1 && customIndexB !== -1) {
          return customIndexA - customIndexB;
        }
        if (customIndexA !== -1) return -1;
        if (customIndexB !== -1) return 1;
      }
      const orderA = orderMap.get(a.path) ?? Number.MAX_SAFE_INTEGER;
      const orderB = orderMap.get(b.path) ?? Number.MAX_SAFE_INTEGER;
      return orderA - orderB;
    });
    nodes.forEach((node) => {
      if (node.children && node.children.length > 0) {
        sortNodes(node.children);
      }
    });
  };
  sortNodes(tree);
  return tree;
}
async function fetchWorkspaceRegistry(siteConfig) {
  var _a;
  if (!((_a = siteConfig == null ? void 0 : siteConfig.workspace) == null ? void 0 : _a.enabled)) {
    return null;
  }
  try {
    const registryPath = `${siteConfig.workspace.path}${siteConfig.workspace.registryFile}`;
    const response = await fetch(registryPath);
    if (!response.ok) {
      console.error("Failed to fetch workspace registry:", response.statusText);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading workspace registry:", error);
    return null;
  }
}
async function getWorkspaceFileTree(siteConfig) {
  const registry = await fetchWorkspaceRegistry(siteConfig);
  if (!registry) {
    return [];
  }
  return buildFileTree(registry, siteConfig);
}

export {
  buildFileTree,
  fetchWorkspaceRegistry,
  getWorkspaceFileTree
};
//# sourceMappingURL=chunk-NOCHJRA2.mjs.map