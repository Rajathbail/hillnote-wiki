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

// src/index.js
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Checkbox: () => Checkbox,
  ConfigProvider: () => ConfigProvider,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  Document: () => Document,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  Input: () => Input,
  MarkdownRenderer: () => MarkdownRenderer,
  Navbar: () => Navbar,
  NavigationSidebar: () => NavigationSidebar,
  ScrollArea: () => ScrollArea,
  ScrollBar: () => ScrollBar,
  Separator: () => Separator2,
  TableOfContents: () => TableOfContents2,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  ThemeProvider: () => ThemeProvider,
  buttonVariants: () => buttonVariants,
  defaultConfig: () => defaultConfig,
  useConfig: () => useConfig
});
module.exports = __toCommonJS(index_exports);

// src/components/wiki/Navbar.jsx
var import_react = __toESM(require("react"));

// src/components/theme-toggle.jsx
var React2 = __toESM(require("react"));
var import_lucide_react = require("lucide-react");
var import_next_themes = require("next-themes");

// src/components/ui/button.jsx
var React = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// src/lib/utils.js
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/button.jsx
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot.Slot : "button";
  return /* @__PURE__ */ React.createElement(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/theme-toggle.jsx
function ThemeToggle() {
  const { theme, setTheme } = (0, import_next_themes.useTheme)();
  return /* @__PURE__ */ React2.createElement(
    Button,
    {
      variant: "ghost",
      size: "icon",
      onClick: () => setTheme(theme === "light" ? "dark" : "light"),
      className: "h-8 w-8"
    },
    /* @__PURE__ */ React2.createElement(import_lucide_react.Sun, { className: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
    /* @__PURE__ */ React2.createElement(import_lucide_react.Moon, { className: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
    /* @__PURE__ */ React2.createElement("span", { className: "sr-only" }, "Toggle theme")
  );
}

// src/components/wiki/Navbar.jsx
var Navbar = ({
  siteName = "Hillnote Wiki",
  showSiteName = true,
  showThemeToggle = true,
  className = "",
  children
}) => {
  return /* @__PURE__ */ import_react.default.createElement("header", { className: `h-16 bg-background flex items-center justify-between px-8 pt-8 pb-4 ${className}` }, showSiteName && /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "font-semibold text-lg" }, siteName)), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-4" }, children, showThemeToggle && /* @__PURE__ */ import_react.default.createElement(ThemeToggle, null)));
};

// src/components/wiki/Document.jsx
var import_react11 = __toESM(require("react"));

// src/components/navigation-sidebar.jsx
var import_react3 = __toESM(require("react"));
var import_lucide_react2 = require("lucide-react");

// src/components/ui/scroll-area.jsx
var React4 = __toESM(require("react"));
var ScrollAreaPrimitive = __toESM(require("@radix-ui/react-scroll-area"));
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React4.createElement(
    ScrollAreaPrimitive.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props
    },
    /* @__PURE__ */ React4.createElement(
      ScrollAreaPrimitive.Viewport,
      {
        "data-slot": "scroll-area-viewport",
        className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      },
      children
    ),
    /* @__PURE__ */ React4.createElement(ScrollBar, null),
    /* @__PURE__ */ React4.createElement(ScrollAreaPrimitive.Corner, null)
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ React4.createElement(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React4.createElement(
      ScrollAreaPrimitive.ScrollAreaThumb,
      {
        "data-slot": "scroll-area-thumb",
        className: "bg-border relative flex-1 rounded-full"
      }
    )
  );
}

// src/lib/workspace.js
function buildFileTree(registry, config) {
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
      let orderA;
      let orderB;
      if (((_a2 = config == null ? void 0 : config.workspace) == null ? void 0 : _a2.customOrder) && config.workspace.customOrder.length > 0) {
        const customIndexA = config.workspace.customOrder.indexOf(a.path);
        const customIndexB = config.workspace.customOrder.indexOf(b.path);
        if (customIndexA !== -1 && customIndexB !== -1) {
          return customIndexA - customIndexB;
        }
        if (customIndexA !== -1) return -1;
        if (customIndexB !== -1) return 1;
        orderA = orderMap.get(a.path) ?? Number.MAX_SAFE_INTEGER;
        orderB = orderMap.get(b.path) ?? Number.MAX_SAFE_INTEGER;
      } else {
        orderA = orderMap.get(a.path) ?? Number.MAX_SAFE_INTEGER;
        orderB = orderMap.get(b.path) ?? Number.MAX_SAFE_INTEGER;
      }
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
async function fetchWorkspaceRegistry(config) {
  var _a;
  if (!((_a = config == null ? void 0 : config.workspace) == null ? void 0 : _a.enabled)) {
    return null;
  }
  try {
    const registryPath = `${config.workspace.path}${config.workspace.registryFile}`;
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
async function getWorkspaceFileTree(config) {
  const registry = await fetchWorkspaceRegistry(config);
  if (!registry) {
    return [];
  }
  return buildFileTree(registry, config);
}

// src/components/ConfigProvider.jsx
var import_react2 = __toESM(require("react"));
var ConfigContext = (0, import_react2.createContext)(null);
function ConfigProvider({ children, config }) {
  return /* @__PURE__ */ import_react2.default.createElement(ConfigContext.Provider, { value: config }, children);
}
function useConfig() {
  const config = (0, import_react2.useContext)(ConfigContext);
  if (!config) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return config;
}

// src/components/navigation-sidebar.jsx
var TreeNodeComponent = ({ node, level = 0, currentFile, onFileSelect }) => {
  var _a;
  const [isExpanded, setIsExpanded] = (0, import_react3.useState)(false);
  const isActive = currentFile === node.id;
  const hasChildren = node.children && node.children.length > 0;
  const handleClick = () => {
    if (node.type === "file") {
      onFileSelect(node.id);
    } else {
      setIsExpanded(!isExpanded);
    }
  };
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "relative group" }, /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      className: cn(
        "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium transition-colors w-full text-left relative",
        isActive ? "bg-accent font-bold opacity-100" : "hover:bg-accent/50 opacity-80"
      ),
      onClick: handleClick,
      style: { paddingLeft: `${level * 8 + 8}px` }
    },
    node.type === "directory" && /* @__PURE__ */ import_react3.default.createElement("span", { className: "transition-transform" }, isExpanded ? /* @__PURE__ */ import_react3.default.createElement(import_lucide_react2.ChevronDown, { className: "h-3 w-3" }) : /* @__PURE__ */ import_react3.default.createElement(import_lucide_react2.ChevronRight, { className: "h-3 w-3" })),
    node.type === "directory" ? isExpanded ? /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-md" }, "\u{1F4C1}") : /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-md" }, "\u{1F4C2}") : /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs ml-5 shrink-0" }, node.emoji || "\u{1F335}"),
    /* @__PURE__ */ import_react3.default.createElement("span", { className: "truncate" }, node.type === "file" && node.name.endsWith(".md") ? node.name.replace(/\.md$/, "") : node.name)
  )), isExpanded && hasChildren && /* @__PURE__ */ import_react3.default.createElement("div", { className: "relative" }, (_a = node.children) == null ? void 0 : _a.map((child) => /* @__PURE__ */ import_react3.default.createElement(
    TreeNodeComponent,
    {
      key: child.id,
      node: child,
      level: level + 1,
      currentFile,
      onFileSelect
    }
  ))));
};
function NavigationSidebar({
  showTitle = true,
  title = "All Pages",
  onFileSelect,
  selectedFile
} = {}) {
  const config = useConfig();
  const [currentFile, setCurrentFile] = (0, import_react3.useState)(selectedFile || null);
  const [fileTree, setFileTree] = (0, import_react3.useState)([]);
  const [isLoading, setIsLoading] = (0, import_react3.useState)(true);
  const [error, setError] = (0, import_react3.useState)(null);
  (0, import_react3.useEffect)(() => {
    setCurrentFile(selectedFile || null);
  }, [selectedFile]);
  (0, import_react3.useEffect)(() => {
    const loadWorkspace = async () => {
      var _a;
      try {
        setIsLoading(true);
        setError(null);
        if ((_a = config == null ? void 0 : config.workspace) == null ? void 0 : _a.enabled) {
          const tree = await getWorkspaceFileTree(config);
          setFileTree(tree);
          if (tree.length === 0) {
            setError("No documents found in workspace");
          } else {
            if (config.workspace.initialFile && !currentFile) {
              const initialFile = config.workspace.initialFile;
              setCurrentFile(initialFile);
              if (onFileSelect) {
                onFileSelect(initialFile);
              }
            }
          }
        } else {
          setFileTree([
            {
              id: "1",
              name: "Getting Started",
              type: "directory",
              path: "documents/Getting Started",
              children: [
                { id: "1-1", name: "Introduction.md", type: "file", path: "documents/Getting Started/Introduction.md", emoji: "\u{1F44B}" },
                { id: "1-2", name: "Installation.md", type: "file", path: "documents/Getting Started/Installation.md", emoji: "\u{1F4BF}" },
                { id: "1-3", name: "Quick Start.md", type: "file", path: "documents/Getting Started/Quick Start.md", emoji: "\u{1F680}" }
              ]
            },
            { id: "4", name: "README.md", type: "file", path: "documents/README.md", emoji: "\u{1F4D6}" }
          ]);
        }
      } catch (err) {
        console.error("Error loading workspace:", err);
        setError("Failed to load workspace");
      } finally {
        setIsLoading(false);
      }
    };
    loadWorkspace();
  }, []);
  return /* @__PURE__ */ import_react3.default.createElement("div", { className: "h-full p-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "h-full flex flex-col overflow-hidden" }, showTitle && /* @__PURE__ */ import_react3.default.createElement("div", { className: "px-3 pt-6" }, /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-xs text-primary/40 font-semibold" }, title)), /* @__PURE__ */ import_react3.default.createElement(ScrollArea, { className: "mt-4 flex-1 px-2 py-2" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex flex-col space-y-1" }, isLoading ? /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-center py-8" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react2.Loader2, { className: "h-6 w-6 animate-spin text-muted-foreground" })) : error ? /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-muted-foreground text-center py-4" }, error) : fileTree.length === 0 ? /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-muted-foreground text-center py-4" }, "No documents found") : fileTree.map((node) => /* @__PURE__ */ import_react3.default.createElement(
    TreeNodeComponent,
    {
      key: node.id,
      node,
      level: 0,
      currentFile,
      onFileSelect: (id) => {
        setCurrentFile(id);
        if (onFileSelect) {
          onFileSelect(id);
        }
      }
    }
  ))))));
}

// src/components/table-of-contents.jsx
var import_react4 = __toESM(require("react"));
var import_lucide_react3 = require("lucide-react");
function TableOfContents({
  showTitle = true,
  title = "On This Page",
  contentSelector = ".markdown-content"
} = {}) {
  const [activeId, setActiveId] = (0, import_react4.useState)("");
  const [tocItems, setTocItems] = (0, import_react4.useState)([]);
  const [collapsedItems, setCollapsedItems] = (0, import_react4.useState)(/* @__PURE__ */ new Set());
  (0, import_react4.useEffect)(() => {
    const extractHeadings = () => {
      const contentElement = document.querySelector(contentSelector);
      if (!contentElement) {
        console.log("TableOfContents: No content element found for selector:", contentSelector);
        return;
      }
      const headings = contentElement.querySelectorAll("h1, h2, h3, h4, h5, h6");
      console.log("TableOfContents: Found headings:", headings.length);
      const items = [];
      const stack = [];
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        const text = heading.innerText || heading.textContent || "";
        if (!text.trim()) return;
        if (!heading.id) {
          heading.id = `heading-${index}-${text.toLowerCase().replace(/[^\w]+/g, "-")}`;
        }
        const item = {
          id: heading.id,
          title: text,
          level,
          children: []
        };
        while (stack.length > 0 && stack[stack.length - 1].level >= level) {
          stack.pop();
        }
        if (stack.length === 0) {
          items.push(item);
        } else {
          const parent = stack[stack.length - 1].item;
          if (!parent.children) parent.children = [];
          parent.children.push(item);
        }
        stack.push({ item, level });
      });
      console.log("TableOfContents: Extracted items:", items);
      setTocItems(items);
      if (items.length > 0 && !activeId) {
        setActiveId(items[0].id);
      }
    };
    const handleContentLoaded = () => {
      console.log("TableOfContents: Content loaded event received");
      setTimeout(extractHeadings, 100);
    };
    window.addEventListener("markdown-content-loaded", handleContentLoaded);
    const initialTimeout = setTimeout(() => {
      extractHeadings();
    }, 1e3);
    const observer = new MutationObserver(() => {
      extractHeadings();
    });
    const observerTimeout = setTimeout(() => {
      const contentElement = document.querySelector(contentSelector);
      if (contentElement) {
        observer.observe(contentElement, {
          childList: true,
          subtree: true,
          characterData: true
        });
      }
    }, 500);
    return () => {
      window.removeEventListener("markdown-content-loaded", handleContentLoaded);
      clearTimeout(initialTimeout);
      clearTimeout(observerTimeout);
      observer.disconnect();
    };
  }, [contentSelector]);
  (0, import_react4.useEffect)(() => {
    var _a;
    const handleScroll = () => {
      var _a2;
      const getAllIds = (items) => {
        const ids = [];
        items.forEach((item) => {
          ids.push(item.id);
          if (item.children) {
            ids.push(...getAllIds(item.children));
          }
        });
        return ids;
      };
      const allIds = getAllIds(tocItems);
      const headingElements = allIds.map((id) => ({
        id,
        el: document.getElementById(id)
      })).filter((item) => item.el);
      const scrollContainer2 = (_a2 = document.querySelector(".markdown-content")) == null ? void 0 : _a2.closest(".overflow-auto");
      const scrollTop = scrollContainer2 ? scrollContainer2.scrollTop : window.scrollY;
      const offset = 100;
      let currentActiveId = "";
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const { id, el } = headingElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          const containerRect = scrollContainer2 == null ? void 0 : scrollContainer2.getBoundingClientRect();
          const topPosition = containerRect ? rect.top - containerRect.top + scrollTop : rect.top + window.scrollY;
          if (topPosition <= scrollTop + offset) {
            currentActiveId = id;
            break;
          }
        }
      }
      if (currentActiveId && currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };
    const scrollContainer = (_a = document.querySelector(".markdown-content")) == null ? void 0 : _a.closest(".overflow-auto");
    const scrollHandler = () => handleScroll();
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", scrollHandler);
    }
    window.addEventListener("scroll", scrollHandler);
    handleScroll();
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", scrollHandler);
      }
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [tocItems, activeId]);
  const handleClick = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("TableOfContents: Clicking on heading with id:", id);
    setActiveId(id);
    const allHeadings = document.querySelectorAll('[id*="heading"]');
    console.log("TableOfContents: All heading elements found:", allHeadings.length);
    allHeadings.forEach((h) => console.log("  - ID:", h.id, "Text:", h.textContent));
    const targetElement = document.getElementById(id);
    console.log("TableOfContents: Looking for element with id:", id);
    console.log("TableOfContents: Found element:", targetElement);
    if (!targetElement) {
      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      headings.forEach((h) => {
        if (h.id === id) {
          console.log("TableOfContents: Found heading via query selector:", h);
        }
      });
      console.log("TableOfContents: Element not found for id:", id);
      return;
    }
    console.log("TableOfContents: Scrolling to element");
    try {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      console.log("TableOfContents: Used scrollIntoView");
    } catch (error) {
      console.error("TableOfContents: Error with scrollIntoView:", error);
      try {
        const rect = targetElement.getBoundingClientRect();
        const absoluteTop = rect.top + window.pageYOffset;
        window.scrollTo({
          top: absoluteTop - 100,
          behavior: "smooth"
        });
        console.log("TableOfContents: Used window.scrollTo");
      } catch (error2) {
        console.error("TableOfContents: Error with window.scrollTo:", error2);
      }
    }
  };
  const toggleCollapse = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setCollapsedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };
  const renderTocItem = (item, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isCollapsed = collapsedItems.has(item.id);
    const isActive = activeId === item.id;
    return /* @__PURE__ */ import_react4.default.createElement("div", { key: item.id }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "flex items-center" }, hasChildren && /* @__PURE__ */ import_react4.default.createElement(
      "button",
      {
        onClick: (e) => toggleCollapse(e, item.id),
        className: "p-0.5 hover:bg-accent/50 rounded mr-1"
      },
      isCollapsed ? /* @__PURE__ */ import_react4.default.createElement(import_lucide_react3.ChevronRight, { className: "h-3 w-3" }) : /* @__PURE__ */ import_react4.default.createElement(import_lucide_react3.ChevronDown, { className: "h-3 w-3" })
    ), /* @__PURE__ */ import_react4.default.createElement(
      "button",
      {
        onClick: (e) => handleClick(e, item.id),
        className: cn(
          "flex-1 text-left text-sm py-1 px-2 rounded-md transition-colors",
          depth === 0 ? "font-medium" : "",
          depth === 1 ? "text-muted-foreground" : "",
          depth >= 2 ? "text-muted-foreground" : "",
          isActive ? "bg-accent text-accent-foreground font-medium" : "hover:bg-accent/50",
          !hasChildren && depth === 0 ? "ml-5" : "",
          !hasChildren && depth > 0 ? "ml-5" : ""
        ),
        style: { paddingLeft: `${depth * 12 + 8}px` }
      },
      item.title
    )), hasChildren && !isCollapsed && /* @__PURE__ */ import_react4.default.createElement("div", null, item.children.map((child) => renderTocItem(child, depth + 1))));
  };
  if (tocItems.length === 0) {
    return /* @__PURE__ */ import_react4.default.createElement("div", { className: "h-full p-3" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "h-full flex flex-col bg-muted rounded-lg" }, showTitle && /* @__PURE__ */ import_react4.default.createElement("div", { className: "px-6 pt-6 pb-4" }, /* @__PURE__ */ import_react4.default.createElement("h3", { className: "text-xs text-primary/40 font-semibold" }, title)), /* @__PURE__ */ import_react4.default.createElement("div", { className: "flex-1 px-4 py-2 text-sm text-muted-foreground" }, "No headings found")));
  }
  return /* @__PURE__ */ import_react4.default.createElement("div", { className: "h-full p-3" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "h-full flex flex-col" }, showTitle && /* @__PURE__ */ import_react4.default.createElement("div", { className: "px-6 pt-6 pb-4 flex-shrink-0" }, /* @__PURE__ */ import_react4.default.createElement("h3", { className: "text-xs text-primary/40 font-semibold" }, title)), /* @__PURE__ */ import_react4.default.createElement("div", { className: "flex-1 overflow-y-auto px-4 py-2" }, /* @__PURE__ */ import_react4.default.createElement("nav", { className: "space-y-1" }, tocItems.map((item) => renderTocItem(item))))));
}

// src/components/markdown-renderer.jsx
var import_react10 = __toESM(require("react"));
var import_marked = require("marked");
var import_marked_gfm_heading_id = require("marked-gfm-heading-id");
var import_lucide_react9 = require("lucide-react");

// src/components/ui/checkbox.jsx
var React8 = __toESM(require("react"));
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));
var import_lucide_react4 = require("lucide-react");
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ React8.createElement(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React8.createElement(
      CheckboxPrimitive.Indicator,
      {
        "data-slot": "checkbox-indicator",
        className: "flex items-center justify-center text-current transition-none"
      },
      /* @__PURE__ */ React8.createElement(import_lucide_react4.CheckIcon, { className: "size-3.5" })
    )
  );
}

// src/components/document-footer.jsx
var import_react7 = __toESM(require("react"));

// src/components/authors-notes.jsx
var import_react5 = __toESM(require("react"));
var import_lucide_react5 = require("lucide-react");
function AuthorsNotes({ comments }) {
  if (!comments || comments.length === 0) {
    return /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-sm text-muted-foreground text-center py-8" }, "No comments yet");
  }
  const rootComments = comments.filter((c) => !c.parentId);
  const childComments = comments.filter((c) => c.parentId);
  const getChildComments = (parentId) => {
    return childComments.filter((c) => c.parentId === parentId);
  };
  const renderComment = (comment, depth = 0, isReply = false) => {
    const children = getChildComments(comment.id);
    const initials = comment.author ? comment.author.charAt(0).toUpperCase() : "A";
    return /* @__PURE__ */ import_react5.default.createElement("div", { key: comment.id, className: `${depth > 0 ? "ml-12" : ""} group` }, /* @__PURE__ */ import_react5.default.createElement("div", { className: `${isReply ? "pl-0" : ""}` }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex gap-3" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex-shrink-0" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-sm font-medium text-emerald-500" }, initials))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex-1" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-center gap-2 mb-1" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-sm font-semibold text-foreground" }, comment.author || "Anonymous"), comment.timestamp && /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-xs text-muted-foreground" }, "\u2022"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-xs text-muted-foreground" }, new Date(comment.timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-sm text-foreground leading-relaxed whitespace-pre-wrap" }, comment.text), children.length > 0 && /* @__PURE__ */ import_react5.default.createElement("div", { className: "mt-3" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-center gap-2 text-xs text-muted-foreground mb-3" }, /* @__PURE__ */ import_react5.default.createElement(import_lucide_react5.MessageSquare, { className: "h-3 w-3" }), /* @__PURE__ */ import_react5.default.createElement("span", null, children.length, " ", children.length === 1 ? "reply" : "replies"))))), children.length > 0 && /* @__PURE__ */ import_react5.default.createElement("div", { className: "mt-4 space-y-4" }, children.map((child) => renderComment(child, depth + 1, true)))), depth === 0 && !isReply && /* @__PURE__ */ import_react5.default.createElement("div", { className: "border-b border-border/50 my-6 last:border-0" }));
  };
  return /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-2" }, rootComments.map((comment) => renderComment(comment)));
}

// src/components/related-documents.jsx
var import_react6 = __toESM(require("react"));
var import_lucide_react6 = require("lucide-react");
function RelatedDocuments({ documents, onDocumentClick }) {
  if (!documents || documents.length === 0) {
    return /* @__PURE__ */ import_react6.default.createElement("div", { className: "text-sm text-muted-foreground text-center py-8" }, "No related documents found");
  }
  return /* @__PURE__ */ import_react6.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3" }, documents.map((doc, index) => /* @__PURE__ */ import_react6.default.createElement(
    "button",
    {
      key: index,
      onClick: () => onDocumentClick == null ? void 0 : onDocumentClick(doc.path),
      className: "flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-border transition-all text-left group"
    },
    /* @__PURE__ */ import_react6.default.createElement("div", { className: "flex-shrink-0" }, doc.emoji ? /* @__PURE__ */ import_react6.default.createElement("span", { className: "text-lg" }, doc.emoji) : doc.isFolder ? /* @__PURE__ */ import_react6.default.createElement(import_lucide_react6.FolderOpen, { className: "h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" }) : /* @__PURE__ */ import_react6.default.createElement(import_lucide_react6.Layers, { className: "h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" })),
    /* @__PURE__ */ import_react6.default.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "text-sm font-medium group-hover:text-primary transition-colors truncate" }, doc.title)),
    /* @__PURE__ */ import_react6.default.createElement(import_lucide_react6.ExternalLink, { className: "h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" })
  )));
}

// src/components/document-footer.jsx
function DocumentFooter({ comments, relatedDocuments, onDocumentClick }) {
  var _a, _b, _c, _d;
  const config = useConfig();
  const [activeTab, setActiveTab] = (0, import_react7.useState)("related");
  const showAuthorsNotes = ((_a = config.ui.authorsNotes) == null ? void 0 : _a.enabled) && comments.length > 0;
  const showRelated = ((_b = config.ui.relatedDocuments) == null ? void 0 : _b.enabled) && relatedDocuments.length > 0;
  if (!showAuthorsNotes && !showRelated) {
    return null;
  }
  if (showAuthorsNotes && !showRelated) {
    return /* @__PURE__ */ import_react7.default.createElement("div", { className: "mt-12 pt-8" }, /* @__PURE__ */ import_react7.default.createElement("h2", { className: "text-lg font-semibold mb-6" }, ((_c = config.ui.authorsNotes) == null ? void 0 : _c.title) || "Author's Notes"), /* @__PURE__ */ import_react7.default.createElement(AuthorsNotes, { comments }));
  }
  if (showRelated && !showAuthorsNotes) {
    return /* @__PURE__ */ import_react7.default.createElement("div", { className: "mt-12 pt-8" }, /* @__PURE__ */ import_react7.default.createElement("h2", { className: "text-lg font-semibold mb-6" }, ((_d = config.ui.relatedDocuments) == null ? void 0 : _d.title) || "Related Documents"), /* @__PURE__ */ import_react7.default.createElement(RelatedDocuments, { documents: relatedDocuments, onDocumentClick }));
  }
  return /* @__PURE__ */ import_react7.default.createElement("div", { className: "mt-12 pt-8" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex items-center gap-8 mb-8 border-b border-border" }, /* @__PURE__ */ import_react7.default.createElement(
    "button",
    {
      onClick: () => setActiveTab("related"),
      className: cn(
        "pb-2 px-1 text-sm font-medium transition-all relative",
        activeTab === "related" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
      )
    },
    /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ import_react7.default.createElement("span", null, "Related Documents"), /* @__PURE__ */ import_react7.default.createElement("span", { className: "text-xs text-muted-foreground ml-1" }, "(", relatedDocuments.length, ")")),
    activeTab === "related" && /* @__PURE__ */ import_react7.default.createElement("div", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary" })
  ), /* @__PURE__ */ import_react7.default.createElement(
    "button",
    {
      onClick: () => setActiveTab("comments"),
      className: cn(
        "pb-2 px-1 text-sm font-medium transition-all relative",
        activeTab === "comments" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
      )
    },
    /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ import_react7.default.createElement("span", null, "Notes"), /* @__PURE__ */ import_react7.default.createElement("span", { className: "text-xs text-muted-foreground ml-1" }, "(", comments.length, ")")),
    activeTab === "comments" && /* @__PURE__ */ import_react7.default.createElement("div", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary" })
  )), /* @__PURE__ */ import_react7.default.createElement("div", { className: "mt-2" }, activeTab === "related" && /* @__PURE__ */ import_react7.default.createElement(
    RelatedDocuments,
    {
      documents: relatedDocuments,
      onDocumentClick
    }
  ), activeTab === "comments" && /* @__PURE__ */ import_react7.default.createElement(AuthorsNotes, { comments })));
}

// src/components/scratchspace.jsx
var import_react8 = __toESM(require("react"));
var import_lucide_react7 = require("lucide-react");
function ScratchSpace({ title, variant = "default", content, collapsed: initialCollapsed = true }) {
  const [isCollapsed, setIsCollapsed] = (0, import_react8.useState)(initialCollapsed);
  const variantConfig = {
    "ai-response": {
      icon: /* @__PURE__ */ import_react8.default.createElement(import_lucide_react7.Sparkles, { size: 14, className: "sparkle-icon text-purple-500 dark:text-purple-400" }),
      borderClass: "border-purple-300 dark:border-purple-700",
      bgClass: "bg-purple-50/30 dark:bg-purple-900/10",
      shadowClass: "shadow-[0_0_15px_rgba(147,51,234,0.1)] dark:shadow-[0_0_15px_rgba(147,51,234,0.15)]",
      headerBgClass: "bg-gradient-to-r from-purple-50/80 to-purple-50/30 dark:from-purple-900/30 dark:to-purple-900/10 border-purple-200 dark:border-purple-800",
      textColorClass: "text-purple-600 dark:text-purple-400",
      iconColorClass: "text-purple-500 dark:text-purple-400",
      defaultTitle: "AI Response"
    },
    "conflict": {
      icon: /* @__PURE__ */ import_react8.default.createElement(import_lucide_react7.AlertTriangle, { size: 14, className: "text-orange-500 dark:text-orange-400" }),
      borderClass: "border-orange-300 dark:border-orange-700",
      bgClass: "bg-orange-50/30 dark:bg-orange-900/10",
      shadowClass: "shadow-[0_0_15px_rgba(255,165,0,0.1)] dark:shadow-[0_0_15px_rgba(255,165,0,0.15)]",
      headerBgClass: "bg-orange-50/50 dark:bg-orange-900/20",
      textColorClass: "text-orange-600 dark:text-orange-400",
      iconColorClass: "text-orange-500 dark:text-orange-400",
      defaultTitle: "Merge Conflict"
    },
    "conflict-version": {
      icon: /* @__PURE__ */ import_react8.default.createElement(import_lucide_react7.Users, { size: 14, className: "text-yellow-600 dark:text-yellow-400" }),
      borderClass: "border-yellow-300 dark:border-yellow-700",
      bgClass: "bg-yellow-50/30 dark:bg-yellow-900/10",
      shadowClass: "shadow-[0_0_10px_rgba(255,255,0,0.1)]",
      headerBgClass: "bg-yellow-50/50 dark:bg-yellow-900/20",
      textColorClass: "text-yellow-700 dark:text-yellow-400",
      iconColorClass: "text-yellow-600 dark:text-yellow-400",
      defaultTitle: "User Edit"
    },
    "default": {
      icon: null,
      borderClass: "border-border",
      bgClass: "",
      shadowClass: "",
      headerBgClass: "bg-background hover:bg-muted/50",
      textColorClass: "",
      iconColorClass: "text-muted-foreground",
      defaultTitle: "Note"
    }
  };
  const config = variantConfig[variant] || variantConfig.default;
  const displayTitle = title || config.defaultTitle;
  const handleCopy = () => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    const textContent = tempDiv.textContent || tempDiv.innerText || "";
    navigator.clipboard.writeText(textContent).then(() => {
      console.log("Content copied to clipboard");
    }).catch((err) => {
      console.error("Failed to copy:", err);
    });
  };
  return /* @__PURE__ */ import_react8.default.createElement(
    "div",
    {
      className: cn(
        "scratch-space my-2 transition-all duration-75",
        !isCollapsed && "rounded-md border border-dashed",
        !isCollapsed && config.borderClass,
        !isCollapsed && config.bgClass,
        !isCollapsed && variant === "ai-response" && config.shadowClass,
        !isCollapsed && variant === "conflict" && config.shadowClass,
        !isCollapsed && variant === "conflict-version" && config.shadowClass
      ),
      "data-expanded": !isCollapsed,
      "data-variant": variant
    },
    /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        className: cn(
          "flex items-center p-2 text-sm select-none",
          !isCollapsed && "bg-background hover:bg-muted/50 border-border rounded-md",
          !isCollapsed && variant === "ai-response" && config.headerBgClass,
          isCollapsed && "bg-background"
        ),
        onClick: () => setIsCollapsed(!isCollapsed)
      },
      /* @__PURE__ */ import_react8.default.createElement("div", { className: "flex-1 flex items-center min-w-0" }, /* @__PURE__ */ import_react8.default.createElement(
        "span",
        {
          className: cn(
            "mr-2 cursor-pointer p-1 hover:bg-muted rounded-sm",
            isCollapsed && "text-muted-foreground",
            variant === "ai-response" && config.iconColorClass
          ),
          onClick: (e) => {
            e.stopPropagation();
            setIsCollapsed(!isCollapsed);
          }
        },
        isCollapsed ? /* @__PURE__ */ import_react8.default.createElement(import_lucide_react7.ChevronRight, { size: 16 }) : /* @__PURE__ */ import_react8.default.createElement(import_lucide_react7.ChevronDown, { size: 16 })
      ), variant === "ai-response" ? /* @__PURE__ */ import_react8.default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ import_react8.default.createElement("span", { className: "flex items-center gap-1.5 cursor-pointer font-medium truncate" }, config.icon, /* @__PURE__ */ import_react8.default.createElement("span", { className: cn(
        "truncate",
        isCollapsed && "text-muted-foreground",
        !isCollapsed && config.textColorClass
      ) }, displayTitle))) : variant === "conflict" ? /* @__PURE__ */ import_react8.default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ import_react8.default.createElement("span", { className: "flex items-center gap-1.5 cursor-pointer font-medium truncate" }, config.icon, /* @__PURE__ */ import_react8.default.createElement("span", { className: cn(
        "truncate",
        isCollapsed && "text-muted-foreground",
        !isCollapsed && config.textColorClass
      ) }, displayTitle))) : variant === "conflict-version" ? /* @__PURE__ */ import_react8.default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ import_react8.default.createElement("span", { className: "flex items-center gap-1.5 cursor-pointer font-medium truncate" }, config.icon, /* @__PURE__ */ import_react8.default.createElement("span", { className: cn(
        "truncate",
        isCollapsed && "text-muted-foreground",
        !isCollapsed && config.textColorClass
      ) }, displayTitle))) : displayTitle && /* @__PURE__ */ import_react8.default.createElement(
        "span",
        {
          className: cn(
            "cursor-text truncate mr-2",
            isCollapsed && "text-muted-foreground"
          )
        },
        displayTitle
      ), isCollapsed && /* @__PURE__ */ import_react8.default.createElement("div", { className: cn(
        "flex-1 h-[1px] bg-border/50 mx-2",
        variant === "ai-response" && "bg-purple-200/50 dark:bg-purple-700/30"
      ) })),
      /* @__PURE__ */ import_react8.default.createElement("div", { className: "flex items-center space-x-1" }, /* @__PURE__ */ import_react8.default.createElement(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: cn(
            "h-7 w-7 p-0",
            isCollapsed && "text-muted-foreground",
            variant === "ai-response" && "text-purple-500 dark:text-purple-400"
          ),
          onClick: (e) => {
            e.stopPropagation();
            handleCopy();
          }
        },
        /* @__PURE__ */ import_react8.default.createElement(import_lucide_react7.Copy, { size: 14 })
      ))
    ),
    /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        className: cn(
          "scratch-space-content transition-[max-height,opacity,transform] duration-200 ease-out overflow-hidden",
          variant === "ai-response" && "bg-gradient-to-b from-purple-50/20 to-transparent dark:from-purple-900/10 dark:to-transparent",
          variant === "conflict" && "bg-gradient-to-b from-orange-50/20 to-transparent dark:from-orange-900/10 dark:to-transparent",
          variant === "conflict-version" && "bg-gradient-to-b from-yellow-50/20 to-transparent dark:from-yellow-900/10 dark:to-transparent"
        ),
        style: {
          maxHeight: isCollapsed ? "0" : "none",
          opacity: isCollapsed ? 0 : 1,
          padding: isCollapsed ? "0" : "1rem",
          transform: `translateY(${isCollapsed ? "-10px" : "0"})`,
          transitionProperty: "opacity, transform, padding",
          transitionDuration: "200ms",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
        }
      },
      /* @__PURE__ */ import_react8.default.createElement("div", { className: cn(
        "prose dark:prose-invert",
        variant === "ai-response" && "prose-purple dark:prose-purple"
      ) }, /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          className: "content",
          dangerouslySetInnerHTML: { __html: content }
        }
      ))
    )
  );
}

// src/components/resource-tiles.jsx
var import_react9 = __toESM(require("react"));
var import_lucide_react8 = require("lucide-react");
function useSafeConfig() {
  try {
    return useConfig();
  } catch (e) {
    return null;
  }
}
function ResourcePDF({ src, title, workspacePath }) {
  var _a;
  const config = useSafeConfig();
  const configWorkspacePath = ((_a = config == null ? void 0 : config.workspace) == null ? void 0 : _a.path) || workspacePath || "";
  const handleOpen = () => {
    let url = src;
    if (src.startsWith("resources/")) {
      url = `${configWorkspacePath}${src}`;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleDownload = async () => {
    let url = src;
    if (src.startsWith("resources/")) {
      url = `${configWorkspacePath}${src}`;
    }
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = title.endsWith(".pdf") ? title : `${title}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      handleOpen();
    }
  };
  return /* @__PURE__ */ import_react9.default.createElement("div", { className: "resource-pdf-container w-full my-3" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-center p-3 bg-muted/30 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer", onClick: handleOpen }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-center gap-3 flex-1" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "text-red-500 text-lg" }, "\u{1F4CB}"), /* @__PURE__ */ import_react9.default.createElement("span", { className: "font-medium text-foreground text-sm", title }, title)), /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ import_react9.default.createElement(
    "button",
    {
      onClick: (e) => {
        e.stopPropagation();
        handleOpen();
      },
      className: "p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors",
      title: "Open in new tab",
      "aria-label": "Open in new tab"
    },
    /* @__PURE__ */ import_react9.default.createElement(import_lucide_react8.ExternalLink, { className: "w-4 h-4" })
  ))));
}
function ResourceHTML({ src, title, workspacePath }) {
  var _a;
  const config = useSafeConfig();
  const configWorkspacePath = ((_a = config == null ? void 0 : config.workspace) == null ? void 0 : _a.path) || workspacePath || "";
  const handleOpen = () => {
    let url = src;
    if (src.startsWith("resources/")) {
      url = `${configWorkspacePath}${src}`;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleDownload = async () => {
    let url = src;
    if (src.startsWith("resources/")) {
      url = `${configWorkspacePath}${src}`;
    }
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = title.endsWith(".html") ? title : `${title}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading HTML:", error);
      handleOpen();
    }
  };
  return /* @__PURE__ */ import_react9.default.createElement("div", { className: "resource-html-container w-full my-3" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-center p-3 bg-muted/30 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer", onClick: handleOpen }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-center gap-3 flex-1" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "text-blue-500 text-lg" }, "\u{1F310}"), /* @__PURE__ */ import_react9.default.createElement("span", { className: "font-medium text-foreground text-sm", title }, title)), /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ import_react9.default.createElement(
    "button",
    {
      onClick: (e) => {
        e.stopPropagation();
        handleOpen();
      },
      className: "p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors",
      title: "Open in new tab",
      "aria-label": "Open in new tab"
    },
    /* @__PURE__ */ import_react9.default.createElement(import_lucide_react8.ExternalLink, { className: "w-4 h-4" })
  ))));
}
function getFileIcon(filename) {
  var _a;
  const extension = (_a = filename == null ? void 0 : filename.split(".").pop()) == null ? void 0 : _a.toLowerCase();
  const iconMap = {
    "pdf": "\u{1F4D5}",
    "doc": "\u{1F4C4}",
    "docx": "\u{1F4C4}",
    "xls": "\u{1F4CA}",
    "xlsx": "\u{1F4CA}",
    "ppt": "\u{1F4D1}",
    "pptx": "\u{1F4D1}",
    "zip": "\u{1F5DC}\uFE0F",
    "rar": "\u{1F5DC}\uFE0F",
    "7z": "\u{1F5DC}\uFE0F",
    "tar": "\u{1F5DC}\uFE0F",
    "gz": "\u{1F5DC}\uFE0F",
    "txt": "\u{1F4DD}",
    "md": "\u{1F4DD}",
    "json": "\u{1F4CB}",
    "xml": "\u{1F4CB}",
    "csv": "\u{1F4CA}",
    "js": "\u{1F4DC}",
    "ts": "\u{1F4DC}",
    "jsx": "\u{1F4DC}",
    "tsx": "\u{1F4DC}",
    "html": "\u{1F310}",
    "css": "\u{1F3A8}",
    "py": "\u{1F40D}",
    "java": "\u2615",
    "cpp": "\u2699\uFE0F",
    "c": "\u2699\uFE0F",
    "h": "\u2699\uFE0F",
    "hpp": "\u2699\uFE0F",
    "exe": "\u26A1",
    "app": "\u26A1",
    "dmg": "\u{1F4BF}",
    "iso": "\u{1F4BF}",
    "png": "\u{1F5BC}\uFE0F",
    "jpg": "\u{1F5BC}\uFE0F",
    "jpeg": "\u{1F5BC}\uFE0F",
    "gif": "\u{1F5BC}\uFE0F",
    "svg": "\u{1F5BC}\uFE0F",
    "mp4": "\u{1F3A5}",
    "avi": "\u{1F3A5}",
    "mov": "\u{1F3A5}",
    "mp3": "\u{1F3B5}",
    "wav": "\u{1F3B5}",
    "ogg": "\u{1F3B5}"
  };
  return iconMap[extension || ""] || "\u{1F4CE}";
}
function ResourceYouTube({ videoId, title }) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return /* @__PURE__ */ import_react9.default.createElement("div", { className: "resource-youtube-container w-full my-6" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "aspect-video w-full" }, /* @__PURE__ */ import_react9.default.createElement(
    "iframe",
    {
      width: "100%",
      height: "100%",
      src: embedUrl,
      title: title || "YouTube Video",
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerPolicy: "strict-origin-when-cross-origin",
      allowFullScreen: true,
      className: "w-full h-full rounded-lg"
    }
  )));
}
function ResourceFile({ path, name, type, workspacePath }) {
  var _a;
  const config = useSafeConfig();
  const configWorkspacePath = ((_a = config == null ? void 0 : config.workspace) == null ? void 0 : _a.path) || workspacePath || "";
  const displayName = name || (path == null ? void 0 : path.split("/").pop()) || "Resource";
  const icon = type === "folder" ? "\u{1F4C1}" : getFileIcon(displayName);
  const handleOpen = async () => {
    var _a2;
    let url = path;
    if (path.startsWith("resources/")) {
      url = `${configWorkspacePath}${path}`;
    }
    if (type === "folder") {
      alert(`Folder path: ${path}

Note: Folders cannot be opened directly in the browser. In the desktop app, this would open your file explorer.`);
    } else {
      const extension = (_a2 = displayName.split(".").pop()) == null ? void 0 : _a2.toLowerCase();
      const viewableExtensions = ["pdf", "txt", "md", "json", "xml", "html", "css", "js", "ts", "jsx", "tsx", "jpg", "jpeg", "png", "gif", "svg", "mp4", "mp3"];
      if (viewableExtensions.includes(extension || "")) {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        handleDownload();
      }
    }
  };
  const handleDownload = async () => {
    if (type === "folder") {
      alert(`Cannot download folders directly. Path: ${path}`);
      return;
    }
    let url = path;
    if (path.startsWith("resources/")) {
      url = `${configWorkspacePath}${path}`;
    }
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = displayName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading file:", error);
      alert(`Unable to download file: ${displayName}`);
    }
  };
  return /* @__PURE__ */ import_react9.default.createElement("div", { className: "resource-file-container w-full my-3" }, /* @__PURE__ */ import_react9.default.createElement(
    "div",
    {
      className: "flex items-center p-3 bg-muted/30 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors",
      onClick: handleOpen
    },
    /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-center gap-3 flex-1" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "text-lg" }, icon), /* @__PURE__ */ import_react9.default.createElement("span", { className: "font-medium text-foreground text-sm", title: displayName }, displayName)),
    /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex gap-2" }, type === "file" && /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        onClick: (e) => {
          e.stopPropagation();
          handleDownload();
        },
        className: "p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors",
        title: "Download file",
        "aria-label": "Download file"
      },
      /* @__PURE__ */ import_react9.default.createElement(import_lucide_react8.Download, { className: "w-4 h-4" })
    ), /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        onClick: (e) => {
          e.stopPropagation();
          if (type === "folder") {
            alert(`Folder path: ${path}`);
          } else {
            alert(`File path: ${path}`);
          }
        },
        className: "p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors",
        title: type === "folder" ? "Show folder info" : "Show file info",
        "aria-label": type === "folder" ? "Show folder info" : "Show file info"
      },
      type === "folder" ? /* @__PURE__ */ import_react9.default.createElement(import_lucide_react8.Folder, { className: "w-4 h-4" }) : /* @__PURE__ */ import_react9.default.createElement(import_lucide_react8.File, { className: "w-4 h-4" })
    ))
  ));
}

// src/components/markdown-renderer.jsx
var import_client = require("react-dom/client");
var renderer = new import_marked.marked.Renderer();
import_marked.marked.use({
  extensions: [
    {
      name: "pdf",
      level: "inline",
      start(src) {
        return src.indexOf("[pdf:");
      },
      tokenizer(src) {
        const match = src.match(/^\[pdf:([^\]]+)\]\(([^)]+)\)/);
        if (match) {
          return {
            type: "pdf",
            raw: match[0],
            title: match[1],
            href: match[2]
          };
        }
      },
      renderer(token) {
        const pdfTitle = token.title || "PDF Document";
        const pdfSrc = token.href || "";
        if (!pdfSrc) return "";
        return `<div class="resource-pdf-placeholder" data-type="resource-pdf" data-src="${pdfSrc}" data-title="${pdfTitle.replace(/"/g, "&quot;")}"></div>`;
      }
    },
    {
      name: "htmlEmbed",
      level: "inline",
      start(src) {
        return src.indexOf("[html:");
      },
      tokenizer(src) {
        const match = src.match(/^\[html:([^\]]+)\]\(([^)]+)\)/);
        if (match) {
          return {
            type: "htmlEmbed",
            raw: match[0],
            title: match[1],
            href: match[2]
          };
        }
      },
      renderer(token) {
        const htmlTitle = token.title || "HTML Document";
        const htmlSrc = token.href || "";
        if (!htmlSrc) return "";
        return `<div class="resource-html-placeholder" data-type="resource-html" data-src="${htmlSrc}" data-title="${htmlTitle.replace(/"/g, "&quot;")}"></div>`;
      }
    },
    {
      name: "fileResource",
      level: "inline",
      start(src) {
        return src.indexOf("[file:");
      },
      tokenizer(src) {
        const match = src.match(/^\[file:([^\]]+)\]\(([^)]+)\)/);
        if (match) {
          return {
            type: "fileResource",
            raw: match[0],
            name: match[1],
            path: match[2]
          };
        }
      },
      renderer(token) {
        const fileName = token.name || "File";
        const filePath = token.path || "";
        if (!filePath) return "";
        return `<div class="resource-file-placeholder" data-type="resource-file" data-path="${filePath}" data-name="${fileName.replace(/"/g, "&quot;")}" data-file-type="file"></div>`;
      }
    },
    {
      name: "youtube",
      level: "inline",
      start(src) {
        return src.indexOf("[youtube:");
      },
      tokenizer(src) {
        const match = src.match(/^\[youtube:([^\]]+)\]\(([^)]+)\)/);
        if (match) {
          return {
            type: "youtube",
            raw: match[0],
            title: match[1],
            videoId: match[2]
          };
        }
      },
      renderer(token) {
        const videoTitle = token.title || "YouTube Video";
        const videoId = token.videoId || "";
        if (!videoId) return "";
        return `<div class="resource-youtube-placeholder" data-type="resource-youtube" data-video-id="${videoId}" data-title="${videoTitle.replace(/"/g, "&quot;")}"></div>`;
      }
    },
    {
      name: "folderResource",
      level: "inline",
      start(src) {
        return src.indexOf("[folder:");
      },
      tokenizer(src) {
        const match = src.match(/^\[folder:([^\]]+)\]\(([^)]+)\)/);
        if (match) {
          return {
            type: "folderResource",
            raw: match[0],
            name: match[1],
            path: match[2]
          };
        }
      },
      renderer(token) {
        const folderName = token.name || "Folder";
        const folderPath = token.path || "";
        if (!folderPath) return "";
        return `<div class="resource-file-placeholder" data-type="resource-file" data-path="${folderPath}" data-name="${folderName.replace(/"/g, "&quot;")}" data-file-type="folder"></div>`;
      }
    }
  ]
});
renderer.link = function(options) {
  const { href, title, text } = options;
  let processedText = text || "";
  processedText = processedText.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  processedText = processedText.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  processedText = processedText.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  processedText = processedText.replace(/_([^_]+)_/g, "<em>$1</em>");
  processedText = processedText.replace(/`([^`]+)`/g, "<code>$1</code>");
  if (!href || typeof href !== "string") {
    return `<a href="">${processedText}</a>`;
  }
  if (href.startsWith("#") || href.startsWith("doc:")) {
    return `<a href="${href}"${title ? ` title="${title}"` : ""}>${processedText}</a>`;
  }
  return `<a href="${href}" target="_blank" rel="noopener noreferrer"${title ? ` title="${title}"` : ""}>${processedText}</a>`;
};
import_marked.marked.use({
  gfm: true,
  breaks: true,
  pedantic: false,
  renderer
});
import_marked.marked.use((0, import_marked_gfm_heading_id.gfmHeadingId)({
  prefix: "heading-"
}));
var parseCustomMarkdown = (markdown) => {
  let processedMarkdown = markdown;
  const scratchspaces = [];
  const fencedPattern = /:::scratchspace "(.+?)"\n> \*\*Note for AI:\*\* (.+?)\n\n([\s\S]*?)\n\n:::/g;
  const oldPattern = /::scratch-space(?:-([^:]+))?::([^]+?)::scratch-space-end::/g;
  let match;
  let scratchspaceCounter = 0;
  while ((match = fencedPattern.exec(markdown)) !== null) {
    const [fullMatch, title, note, content] = match;
    let variant = "default";
    if (note.includes("AI-generated response")) {
      variant = "ai-response";
    } else if (note.includes("merge conflict")) {
      variant = "conflict";
    } else if (note.includes("user edit from conflict resolution")) {
      variant = "conflict-version";
    }
    const placeholder = `__SCRATCHSPACE_${scratchspaceCounter++}__`;
    processedMarkdown = processedMarkdown.replace(fullMatch, placeholder);
    scratchspaces.push({
      title,
      variant,
      content: content.trim(),
      placeholder
    });
  }
  while ((match = oldPattern.exec(processedMarkdown)) !== null) {
    const [fullMatch, variantRaw = "default", content] = match;
    let variant = variantRaw;
    let title = "Note";
    if (variantRaw === "ai-response" || variantRaw === "AI Response") {
      variant = "ai-response";
      title = "AI Response";
    } else if (variantRaw === "conflict") {
      variant = "conflict";
      title = "Merge Conflict";
    } else if (variantRaw === "conflict-version") {
      variant = "conflict-version";
      title = "User Edit";
    } else {
      title = variantRaw === "default" ? "Note" : variantRaw;
      variant = "default";
    }
    const placeholder = `__SCRATCHSPACE_${scratchspaceCounter++}__`;
    processedMarkdown = processedMarkdown.replace(fullMatch, placeholder);
    scratchspaces.push({
      title,
      variant,
      content: content.trim(),
      placeholder
    });
  }
  processedMarkdown = processedMarkdown.replace(/\[pdf:([^\]]+)\]\(([^)]+)\)/g, (match2) => {
    return match2;
  });
  processedMarkdown = processedMarkdown.replace(/\[html:([^\]]+)\]\(([^)]+)\)/g, (match2) => {
    return match2;
  });
  processedMarkdown = processedMarkdown.replace(/\[file:([^\]]+)\]\(([^)]+)\)/g, (match2) => {
    return match2;
  });
  processedMarkdown = processedMarkdown.replace(/\[folder:([^\]]+)\]\(([^)]+)\)/g, (match2) => {
    return match2;
  });
  processedMarkdown = processedMarkdown.replace(/\[youtube:([^\]]+)\]\(([^)]+)\)/g, (match2) => {
    return match2;
  });
  processedMarkdown = processedMarkdown.replace(/\[\[([^\|]+)\|doc:([^\]]+)\]\]/g, (_match, title, href) => {
    let docPath = href;
    if (!docPath.endsWith(".md")) {
      docPath = `${docPath}.md`;
    }
    if (!docPath.startsWith("documents/")) {
      docPath = `documents/${docPath}`;
    }
    return `<a href="#" class="document-link" data-document="${docPath}">${title}</a>`;
  });
  processedMarkdown = processedMarkdown.replace(/\[\[([^\]]+)\]\]/g, (match2, docName) => {
    if (!match2.includes("|doc:")) {
      let docPath = docName;
      if (!docPath.endsWith(".md")) {
        docPath = `${docPath}.md`;
      }
      if (!docPath.startsWith("documents/")) {
        docPath = `documents/${docPath}`;
      }
      return `<a href="#" class="document-link" data-document="${docPath}">${docName}</a>`;
    }
    return match2;
  });
  processedMarkdown = processedMarkdown.replace(/==([^=]+)==/g, "<mark>$1</mark>");
  processedMarkdown = processedMarkdown.replace(
    /<color:(#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|[a-zA-Z]+)>([^<]+)<\/color>/g,
    '<span style="color:$1">$2</span>'
  );
  processedMarkdown = processedMarkdown.replace(/\[\^([^\]]+)\]/g, "<sup>$1</sup>");
  processedMarkdown = processedMarkdown.replace(/\[object Object\]/g, "");
  processedMarkdown = processedMarkdown.replace(/\\- \\\[ \\\]/g, "- [ ]");
  processedMarkdown = processedMarkdown.replace(/\\- \\\[x\\\]/g, "- [x]");
  processedMarkdown = processedMarkdown.replace(/^(\s+)(- \[[x ]\])/gm, (_, spaces, checkbox) => {
    const spaceCount = spaces.length;
    let normalizedIndent = spaces;
    if (spaceCount >= 4) {
      const indentLevel = Math.floor(spaceCount / 4);
      normalizedIndent = "  ".repeat(indentLevel);
    } else if (spaceCount >= 2) {
      normalizedIndent = "  ";
    }
    return normalizedIndent + checkbox;
  });
  return { processedMarkdown, scratchspaces };
};
var processTaskLists = (html) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const processList = (list) => {
    let hasTaskItems = false;
    const listItems = Array.from(list.children).filter((child) => child.tagName === "LI");
    listItems.forEach((li) => {
      const checkbox = li.querySelector('input[type="checkbox"]');
      if (checkbox) {
        hasTaskItems = true;
        const isChecked = checkbox.checked || checkbox.hasAttribute("checked");
        const clonedLi = li.cloneNode(true);
        const clonedCheckbox = clonedLi.querySelector('input[type="checkbox"]');
        clonedCheckbox == null ? void 0 : clonedCheckbox.remove();
        const contentNodes = [];
        clonedLi.childNodes.forEach((node) => {
          var _a;
          if (node.nodeType === Node.TEXT_NODE && !((_a = node.textContent) == null ? void 0 : _a.trim())) {
            return;
          }
          if (node.nodeName === "P") {
            node.childNodes.forEach((child) => {
              contentNodes.push(child.cloneNode(true));
            });
          } else {
            contentNodes.push(node.cloneNode(true));
          }
        });
        li.setAttribute("data-type", "taskItem");
        li.setAttribute("data-checked", isChecked ? "true" : "false");
        li.innerHTML = "";
        const checkboxPlaceholder = document.createElement("div");
        checkboxPlaceholder.className = "checkbox-placeholder";
        checkboxPlaceholder.setAttribute("data-checked", isChecked ? "true" : "false");
        li.appendChild(checkboxPlaceholder);
        const contentDiv = document.createElement("div");
        contentDiv.className = "task-content";
        contentNodes.forEach((node) => {
          contentDiv.appendChild(node);
        });
        li.appendChild(contentDiv);
      }
      const nestedLists = li.querySelectorAll("ul, ol");
      nestedLists.forEach((nestedList) => {
        processList(nestedList);
      });
    });
    if (hasTaskItems) {
      list.setAttribute("data-type", "taskList");
    }
  };
  const lists = tempDiv.querySelectorAll("ul, ol");
  lists.forEach((list) => {
    processList(list);
  });
  return tempDiv.innerHTML;
};
function TaskCheckbox({ checked, disabled = true }) {
  return /* @__PURE__ */ import_react10.default.createElement(
    Checkbox,
    {
      checked,
      disabled,
      className: "mt-0.5",
      "aria-label": checked ? "Completed task" : "Incomplete task"
    }
  );
}
function MarkdownRenderer({ filePath, onFileSelect }) {
  const config = useConfig();
  const [content, setContent] = (0, import_react10.useState)("");
  const [isLoading, setIsLoading] = (0, import_react10.useState)(false);
  const [error, setError] = (0, import_react10.useState)(null);
  const [comments, setComments] = (0, import_react10.useState)([]);
  const [relatedDocs, setRelatedDocs] = (0, import_react10.useState)([]);
  const [documentTitle, setDocumentTitle] = (0, import_react10.useState)("");
  const contentRef = (0, import_react10.useRef)(null);
  const checkboxRootsRef = (0, import_react10.useRef)([]);
  const scratchspaceRootsRef = (0, import_react10.useRef)([]);
  const resourceRootsRef = (0, import_react10.useRef)([]);
  (0, import_react10.useEffect)(() => {
    const loadMarkdown = async () => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (!filePath) {
        setContent("");
        setDocumentTitle("");
        return;
      }
      try {
        setIsLoading(true);
        setError(null);
        const extractTitle = (path) => {
          let title = path.replace(/^documents\//, "").replace(/\.md$/, "");
          const parts = title.split("/");
          title = parts[parts.length - 1];
          title = title.replace(/[-_]/g, " ").split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
          return title;
        };
        setDocumentTitle(extractTitle(filePath));
        let resolvedPath = filePath;
        try {
          const registryUrl = `${config.workspace.path}documents-registry.json`;
          const registryResponse = await fetch(registryUrl);
          if (registryResponse.ok) {
            const registry = await registryResponse.json();
            let doc = (_a = registry.documents) == null ? void 0 : _a.find((d) => d.path === filePath);
            if (!doc && filePath.includes("/")) {
              const fileName = filePath.split("/").pop();
              const candidates = ((_b = registry.documents) == null ? void 0 : _b.filter((d) => {
                const docFileName = d.path.split("/").pop();
                return docFileName === fileName;
              })) || [];
              if (candidates.length > 0) {
                for (const candidate of candidates) {
                  const requestedParts = filePath.split("/");
                  const candidateParts = candidate.path.split("/");
                  let isMatch = true;
                  for (let i = 0; i < requestedParts.length; i++) {
                    const requestedPart = requestedParts[i].toLowerCase();
                    if (i < requestedParts.length - 1) {
                      const candidatePart = (_c = candidateParts[i]) == null ? void 0 : _c.toLowerCase();
                      if (candidatePart && !candidatePart.startsWith(requestedPart)) {
                        isMatch = false;
                        break;
                      }
                    } else {
                      if (requestedParts[i] !== candidateParts[candidateParts.length - 1]) {
                        isMatch = false;
                        break;
                      }
                    }
                  }
                  if (isMatch) {
                    doc = candidate;
                    break;
                  }
                }
              }
            }
            if (doc) {
              resolvedPath = doc.path;
            }
          }
        } catch (registryError) {
          console.warn("Could not load documents registry:", registryError);
        }
        const normalizedPath = resolvedPath.startsWith("/") ? resolvedPath.slice(1) : resolvedPath;
        const fileUrl = `${config.workspace.path}${normalizedPath}`;
        const response = await fetch(fileUrl);
        if (!response.ok) {
          throw new Error(`Failed to load file: ${response.statusText}`);
        }
        let markdown = await response.text();
        let extractedComments = [];
        if ((_d = config.ui.authorsNotes) == null ? void 0 : _d.enabled) {
          const commentSectionRegex = /<!-- COMMENTS_SECTION_START -->([\s\S]*?)<!-- COMMENTS_SECTION_END -->/;
          const match = markdown.match(commentSectionRegex);
          if (match) {
            const commentsText = match[1];
            const commentBlocks = commentsText.split("<!-- COMMENT").filter((block) => block.trim()).map((block) => "<!-- COMMENT" + block);
            for (const block of commentBlocks) {
              try {
                const metadataMatch = block.match(/<!-- COMMENT\n([\s\S]+?)\n-->/);
                if (!metadataMatch) continue;
                const metadata = JSON.parse(metadataMatch[1]);
                const textStart = block.indexOf("-->") + 3;
                const text = block.substring(textStart).trim();
                extractedComments.push({
                  id: metadata.id,
                  text,
                  author: metadata.name || metadata.author,
                  // Use 'name' field from HillnoteApp
                  timestamp: metadata.timestamp,
                  parentId: metadata.parentId || null
                });
              } catch (e) {
                console.error("Error parsing comment:", e);
              }
            }
            markdown = markdown.replace(commentSectionRegex, "");
          }
          setComments(extractedComments);
        }
        const { processedMarkdown, scratchspaces } = parseCustomMarkdown(markdown);
        if ((_e = config.ui.relatedDocuments) == null ? void 0 : _e.enabled) {
          const docLinks = [];
          const linkRegex = /\[\[([^\|\]]+)(?:\|doc:([^\]]+))?\]\]/g;
          let match;
          let fullRegistry = null;
          try {
            const registryUrl = `${config.workspace.path}documents-registry.json`;
            const registryResponse = await fetch(registryUrl);
            if (registryResponse.ok) {
              fullRegistry = await registryResponse.json();
            }
          } catch (err) {
            console.warn("Could not load documents registry:", err);
          }
          const documentsMap = /* @__PURE__ */ new Map();
          if (fullRegistry) {
            (_f = fullRegistry.documents) == null ? void 0 : _f.forEach((doc) => {
              documentsMap.set(doc.path, {
                emoji: doc.emoji,
                name: doc.name
              });
              const pathWithoutDocs = doc.path.replace(/^documents\//, "");
              documentsMap.set(pathWithoutDocs, {
                emoji: doc.emoji,
                name: doc.name
              });
              const filename = doc.path.split("/").pop();
              if (filename && !documentsMap.has(filename)) {
                documentsMap.set(filename, {
                  emoji: doc.emoji,
                  name: doc.name
                });
              }
            });
            const currentDoc = (_g = fullRegistry.documents) == null ? void 0 : _g.find((d) => d.path === resolvedPath);
            if (currentDoc && currentDoc.referencedIn) {
              currentDoc.referencedIn.forEach((refPath) => {
                var _a2;
                const refDoc = (_a2 = fullRegistry.documents) == null ? void 0 : _a2.find((d) => d.path === refPath);
                if (refDoc && !docLinks.some((doc) => doc.path === refDoc.path)) {
                  docLinks.push({
                    title: refDoc.name,
                    path: refDoc.path,
                    emoji: refDoc.emoji
                  });
                }
              });
            }
            if (currentDoc && currentDoc.containsReferencesTo) {
              currentDoc.containsReferencesTo.forEach((refPath) => {
                var _a2;
                const refDoc = (_a2 = fullRegistry.documents) == null ? void 0 : _a2.find((d) => d.path === refPath);
                if (refDoc && !docLinks.some((doc) => doc.path === refDoc.path)) {
                  docLinks.push({
                    title: refDoc.name,
                    path: refDoc.path,
                    emoji: refDoc.emoji
                  });
                }
              });
            }
          }
          while ((match = linkRegex.exec(markdown)) !== null) {
            const title = match[1];
            let path = match[2] || match[1];
            if (!path.endsWith(".md")) {
              path = `${path}.md`;
            }
            if (!path.startsWith("documents/")) {
              path = `documents/${path}`;
            }
            if (!docLinks.some((doc) => doc.path === path)) {
              let docInfo = documentsMap.get(path);
              if (!docInfo) {
                docInfo = documentsMap.get(path.replace(/^documents\//, ""));
              }
              if (!docInfo) {
                const filename = path.split("/").pop();
                if (filename) {
                  docInfo = documentsMap.get(filename);
                }
              }
              if (!docInfo && fullRegistry) {
                const foundDoc = (_h = fullRegistry.documents) == null ? void 0 : _h.find(
                  (d) => d.path === path || d.path.endsWith(path.replace(/^documents\//, "")) || d.name === title
                );
                if (foundDoc) {
                  docInfo = {
                    emoji: foundDoc.emoji,
                    name: foundDoc.name
                  };
                }
              }
              docLinks.push({
                title: (docInfo == null ? void 0 : docInfo.name) || title,
                path,
                emoji: docInfo == null ? void 0 : docInfo.emoji
              });
            }
          }
          setRelatedDocs(docLinks);
        }
        let preprocessedMarkdown = processedMarkdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) => {
          if (src.startsWith("resources/")) {
            const fullPath = `${config.workspace.path}${src}`;
            return `<img src="${fullPath}" alt="${alt || ""}" data-resource-path="${src}" loading="lazy" class="markdown-image" />`;
          }
          return `<img src="${src}" alt="${alt || ""}" loading="lazy" class="markdown-image" />`;
        });
        const scratchspaceMarkers = {};
        scratchspaces.forEach(({ title, variant, content: content2, placeholder }, index) => {
          const marker = `<!--SCRATCHSPACE_MARKER_${index}-->`;
          scratchspaceMarkers[marker] = { title, variant, content: content2, index };
          preprocessedMarkdown = preprocessedMarkdown.replace(placeholder, marker);
        });
        let html = import_marked.marked.parse(preprocessedMarkdown);
        html = processTaskLists(html);
        Object.entries(scratchspaceMarkers).forEach(([marker, { title, variant, content: content2, index }]) => {
          let processedContent = content2.replace(/==([^=]+)==/g, "<mark>$1</mark>");
          processedContent = processedContent.replace(
            /<color:(#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|[a-zA-Z]+)>([^<]+)<\/color>/g,
            '<span style="color:$1">$2</span>'
          );
          let contentHtml = import_marked.marked.parse(processedContent);
          contentHtml = processTaskLists(contentHtml);
          const id = `scratchspace-${index}`;
          const scratchspaceHtml = `<div class="scratchspace-placeholder" data-id="${id}" data-title="${title.replace(/"/g, "&quot;")}" data-variant="${variant}" data-content="${encodeURIComponent(contentHtml)}"></div>`;
          html = html.replace(marker, scratchspaceHtml);
        });
        setContent(html);
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("markdown-content-loaded"));
        }, 100);
      } catch (err) {
        console.error("Error loading markdown:", err);
        setError("Failed to load document");
      } finally {
        setIsLoading(false);
      }
    };
    loadMarkdown();
  }, [filePath]);
  (0, import_react10.useEffect)(() => {
    if (!contentRef.current) return;
    const timeoutId = setTimeout(() => {
      checkboxRootsRef.current.forEach((root) => {
        try {
          root.unmount();
        } catch (e) {
        }
      });
      checkboxRootsRef.current = [];
      scratchspaceRootsRef.current.forEach((root) => {
        try {
          root.unmount();
        } catch (e) {
        }
      });
      scratchspaceRootsRef.current = [];
      resourceRootsRef.current.forEach((root) => {
        try {
          root.unmount();
        } catch (e) {
        }
      });
      resourceRootsRef.current = [];
      if (contentRef.current) {
        const checkboxPlaceholders = contentRef.current.querySelectorAll(".checkbox-placeholder");
        checkboxPlaceholders.forEach((placeholder) => {
          const isChecked = placeholder.getAttribute("data-checked") === "true";
          const container = document.createElement("div");
          container.className = "checkbox-container";
          placeholder.replaceWith(container);
          const root = (0, import_client.createRoot)(container);
          root.render(/* @__PURE__ */ import_react10.default.createElement(TaskCheckbox, { checked: isChecked }));
          checkboxRootsRef.current.push(root);
        });
        const scratchspacePlaceholders = contentRef.current.querySelectorAll(".scratchspace-placeholder");
        scratchspacePlaceholders.forEach((placeholder) => {
          const title = placeholder.getAttribute("data-title") || "Note";
          const variant = placeholder.getAttribute("data-variant") || "default";
          const contentEncoded = placeholder.getAttribute("data-content") || "";
          const content2 = decodeURIComponent(contentEncoded);
          if (content2) {
            const container = document.createElement("div");
            placeholder.replaceWith(container);
            const root = (0, import_client.createRoot)(container);
            root.render(
              /* @__PURE__ */ import_react10.default.createElement(
                ScratchSpace,
                {
                  title,
                  variant,
                  content: content2,
                  collapsed: true
                }
              )
            );
            scratchspaceRootsRef.current.push(root);
          }
        });
        const pdfPlaceholders = contentRef.current.querySelectorAll(".resource-pdf-placeholder");
        pdfPlaceholders.forEach((placeholder) => {
          const src = placeholder.getAttribute("data-src") || "";
          const title = placeholder.getAttribute("data-title") || "PDF Document";
          const container = document.createElement("div");
          placeholder.replaceWith(container);
          const root = (0, import_client.createRoot)(container);
          root.render(/* @__PURE__ */ import_react10.default.createElement(ResourcePDF, { src, title, workspacePath: config.workspace.path }));
          resourceRootsRef.current.push(root);
        });
        const htmlPlaceholders = contentRef.current.querySelectorAll(".resource-html-placeholder");
        htmlPlaceholders.forEach((placeholder) => {
          const src = placeholder.getAttribute("data-src") || "";
          const title = placeholder.getAttribute("data-title") || "HTML Document";
          const container = document.createElement("div");
          placeholder.replaceWith(container);
          const root = (0, import_client.createRoot)(container);
          root.render(/* @__PURE__ */ import_react10.default.createElement(ResourceHTML, { src, title, workspacePath: config.workspace.path }));
          resourceRootsRef.current.push(root);
        });
        const filePlaceholders = contentRef.current.querySelectorAll(".resource-file-placeholder");
        filePlaceholders.forEach((placeholder) => {
          const path = placeholder.getAttribute("data-path") || "";
          const name = placeholder.getAttribute("data-name") || "Resource";
          const type = placeholder.getAttribute("data-file-type") || "file";
          const container = document.createElement("div");
          placeholder.replaceWith(container);
          const root = (0, import_client.createRoot)(container);
          root.render(/* @__PURE__ */ import_react10.default.createElement(ResourceFile, { path, name, type, workspacePath: config.workspace.path }));
          resourceRootsRef.current.push(root);
        });
        const youtubePlaceholders = contentRef.current.querySelectorAll(".resource-youtube-placeholder");
        youtubePlaceholders.forEach((placeholder) => {
          const videoId = placeholder.getAttribute("data-video-id") || "";
          const title = placeholder.getAttribute("data-title") || "YouTube Video";
          const container = document.createElement("div");
          placeholder.replaceWith(container);
          const root = (0, import_client.createRoot)(container);
          root.render(/* @__PURE__ */ import_react10.default.createElement(ResourceYouTube, { videoId, title }));
          resourceRootsRef.current.push(root);
        });
      }
    }, 0);
    const handleDocumentLinkClick = (e) => {
      const target = e.target;
      if (target.classList.contains("document-link")) {
        e.preventDefault();
        const docPath = target.getAttribute("data-document");
        if (docPath && onFileSelect) {
          onFileSelect(docPath);
        }
      }
    };
    contentRef.current.addEventListener("click", handleDocumentLinkClick);
    return () => {
      var _a;
      clearTimeout(timeoutId);
      (_a = contentRef.current) == null ? void 0 : _a.removeEventListener("click", handleDocumentLinkClick);
      setTimeout(() => {
        checkboxRootsRef.current.forEach((root) => {
          try {
            root.unmount();
          } catch (e) {
          }
        });
        checkboxRootsRef.current = [];
        scratchspaceRootsRef.current.forEach((root) => {
          try {
            root.unmount();
          } catch (e) {
          }
        });
        scratchspaceRootsRef.current = [];
        resourceRootsRef.current.forEach((root) => {
          try {
            root.unmount();
          } catch (e) {
          }
        });
        resourceRootsRef.current = [];
      }, 0);
    };
  }, [content, onFileSelect]);
  if (isLoading) {
    return /* @__PURE__ */ import_react10.default.createElement("div", { className: "flex items-center justify-center h-full" }, /* @__PURE__ */ import_react10.default.createElement(import_lucide_react9.Loader2, { className: "h-8 w-8 animate-spin text-muted-foreground" }));
  }
  if (error) {
    return /* @__PURE__ */ import_react10.default.createElement("div", { className: "flex items-center justify-center h-full" }, /* @__PURE__ */ import_react10.default.createElement("p", { className: "text-muted-foreground" }, error));
  }
  if (!filePath) {
    return /* @__PURE__ */ import_react10.default.createElement("div", { className: "flex items-center justify-center h-full" }, /* @__PURE__ */ import_react10.default.createElement("p", { className: "text-muted-foreground" }, "Select a document to view"));
  }
  return /* @__PURE__ */ import_react10.default.createElement("div", { className: "h-full overflow-auto" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "max-w-4xl mx-auto px-8 pt-4 pb-12" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "mb-8 px-8 py-8 bg-muted rounded-lg" }, /* @__PURE__ */ import_react10.default.createElement(import_lucide_react9.Layers2, { className: "w-5 h-5 text-primary opacity-20 transition-opacity duration-200" }), /* @__PURE__ */ import_react10.default.createElement("h1", { className: "text-3xl md:text-4xl font-light mt-2" }, documentTitle), /* @__PURE__ */ import_react10.default.createElement("div", { className: "document-title-divider" })), /* @__PURE__ */ import_react10.default.createElement(
    "div",
    {
      ref: contentRef,
      className: "markdown-content px-12",
      dangerouslySetInnerHTML: { __html: content }
    }
  ), /* @__PURE__ */ import_react10.default.createElement(
    DocumentFooter,
    {
      comments,
      relatedDocuments: relatedDocs,
      onDocumentClick: (path) => {
        if (onFileSelect) {
          onFileSelect(path);
        }
      }
    }
  )));
}

// src/components/wiki/Document.jsx
var Document = ({
  initialFile = null,
  showNavigation = true,
  showTableOfContents = true,
  navigationTitle = "All Pages",
  tocTitle = "On This Page",
  className = "",
  onFileSelect: onFileSelectProp
}) => {
  const [selectedFile, setSelectedFile] = (0, import_react11.useState)(initialFile);
  (0, import_react11.useEffect)(() => {
    setSelectedFile(initialFile);
  }, [initialFile]);
  const handleFileSelect = (file) => {
    setSelectedFile(file);
    onFileSelectProp == null ? void 0 : onFileSelectProp(file);
  };
  const getGridColumns = () => {
    if (showNavigation && showTableOfContents) return "grid-cols-5";
    if (showNavigation || showTableOfContents) return "grid-cols-4";
    return "grid-cols-1";
  };
  const getMainColumns = () => {
    if (showNavigation && showTableOfContents) return "col-span-3";
    if (showNavigation || showTableOfContents) return "col-span-3";
    return "col-span-1";
  };
  return /* @__PURE__ */ import_react11.default.createElement("div", { className: `flex-1 overflow-hidden ${className}` }, /* @__PURE__ */ import_react11.default.createElement("div", { className: `h-full grid ${getGridColumns()} gap-0 max-w-8xl mx-auto` }, showNavigation && /* @__PURE__ */ import_react11.default.createElement("aside", { className: "col-span-1 border-r border-border border-dashed overflow-y-auto" }, /* @__PURE__ */ import_react11.default.createElement(
    NavigationSidebar,
    {
      showTitle: true,
      title: navigationTitle,
      onFileSelect: handleFileSelect,
      selectedFile
    }
  )), /* @__PURE__ */ import_react11.default.createElement("main", { className: `bg-background overflow-y-auto ${getMainColumns()}` }, /* @__PURE__ */ import_react11.default.createElement(ScrollArea, { className: "h-full" }, /* @__PURE__ */ import_react11.default.createElement(
    MarkdownRenderer,
    {
      filePath: selectedFile,
      onFileSelect: handleFileSelect
    }
  ))), showTableOfContents && /* @__PURE__ */ import_react11.default.createElement("aside", { className: "col-span-1 overflow-y-auto" }, /* @__PURE__ */ import_react11.default.createElement(
    TableOfContents,
    {
      showTitle: true,
      title: tocTitle
    }
  ))));
};

// src/components/wiki/TableOfContents.jsx
var import_react12 = __toESM(require("react"));
var TableOfContents2 = ({
  showTitle = true,
  title = "On This Page",
  className = ""
}) => {
  return /* @__PURE__ */ import_react12.default.createElement("div", { className }, /* @__PURE__ */ import_react12.default.createElement(
    TableOfContents,
    {
      showTitle,
      title
    }
  ));
};

// src/components/theme-provider.jsx
var React17 = __toESM(require("react"));
var import_next_themes2 = require("next-themes");
function ThemeProvider({
  children,
  ...props
}) {
  return /* @__PURE__ */ React17.createElement(import_next_themes2.ThemeProvider, { ...props }, children);
}

// src/components/ui/dialog.jsx
var React18 = __toESM(require("react"));
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react10 = require("lucide-react");
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ React18.createElement(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ React18.createElement(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ React18.createElement(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ React18.createElement(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ React18.createElement(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ React18.createElement(DialogPortal, { "data-slot": "dialog-portal" }, /* @__PURE__ */ React18.createElement(DialogOverlay, null), /* @__PURE__ */ React18.createElement(
    DialogPrimitive.Content,
    {
      "data-slot": "dialog-content",
      className: cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
        className
      ),
      ...props
    },
    children,
    showCloseButton && /* @__PURE__ */ React18.createElement(
      DialogPrimitive.Close,
      {
        "data-slot": "dialog-close",
        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      },
      /* @__PURE__ */ React18.createElement(import_lucide_react10.XIcon, null),
      /* @__PURE__ */ React18.createElement("span", { className: "sr-only" }, "Close")
    )
  ));
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ React18.createElement(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ React18.createElement(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ React18.createElement(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ React18.createElement(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/components/ui/dropdown-menu.jsx
var React19 = __toESM(require("react"));
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_lucide_react11 = require("lucide-react");
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(DropdownMenuPrimitive.Portal, null, /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ));
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props
    },
    /* @__PURE__ */ React19.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React19.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React19.createElement(import_lucide_react11.CheckIcon, { className: "size-4" }))),
    children
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...props
    }
  );
}
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React19.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React19.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React19.createElement(import_lucide_react11.CircleIcon, { className: "size-2 fill-current" }))),
    children
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSub({
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React19.createElement(import_lucide_react11.ChevronRightIcon, { className: "ml-auto size-4" })
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(
    DropdownMenuPrimitive.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/input.jsx
var React20 = __toESM(require("react"));
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ React20.createElement(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/separator.jsx
var React21 = __toESM(require("react"));
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
function Separator2({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ React21.createElement(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/tabs.jsx
var React22 = __toESM(require("react"));
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"));
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ React22.createElement(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ React22.createElement(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ React22.createElement(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ React22.createElement(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}

// src/config/hillnote-wiki.config.js
var defaultConfig = {
  siteName: "Hillnote Wiki",
  siteDescription: "Beautiful documentation powered by Hillnote",
  workspace: {
    path: "/workspace/",
    enabled: true,
    documentsFolder: "documents",
    registryFile: "documents-registry.json",
    initialFile: void 0,
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
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Checkbox,
  ConfigProvider,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Document,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Input,
  MarkdownRenderer,
  Navbar,
  NavigationSidebar,
  ScrollArea,
  ScrollBar,
  Separator,
  TableOfContents,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ThemeProvider,
  buttonVariants,
  defaultConfig,
  useConfig
});
//# sourceMappingURL=index.js.map