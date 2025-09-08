import {
  createSlugMap,
  initializeSlugMapping,
  pathToSlug,
  slugToPath
} from "./chunk-GANLFL5H.mjs";
import {
  buildFileTree,
  fetchWorkspaceRegistry,
  getWorkspaceFileTree
} from "./chunk-NOCHJRA2.mjs";

// src/components/wiki/Navbar.jsx
import React3 from "react";

// src/components/theme-toggle.jsx
import * as React2 from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// src/components/ui/button.jsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/button.jsx
var buttonVariants = cva(
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
  const Comp = asChild ? Slot : "button";
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
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ React2.createElement(
    Button,
    {
      variant: "ghost",
      size: "icon",
      onClick: () => setTheme(theme === "light" ? "dark" : "light"),
      className: "h-8 w-8"
    },
    /* @__PURE__ */ React2.createElement(Sun, { className: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
    /* @__PURE__ */ React2.createElement(Moon, { className: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
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
  return /* @__PURE__ */ React3.createElement("header", { className: `h-16 bg-background flex items-center justify-between px-4 md:px-8 pt-8 pb-4 ${className}` }, showSiteName && /* @__PURE__ */ React3.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React3.createElement("span", { className: "font-semibold text-lg" }, siteName)), /* @__PURE__ */ React3.createElement("div", { className: "flex items-center gap-4" }, children, showThemeToggle && /* @__PURE__ */ React3.createElement(ThemeToggle, null)));
};

// src/components/wiki/Document.jsx
import React17, { useState as useState6, useEffect as useEffect4 } from "react";

// src/components/navigation-sidebar.jsx
import React6, { useState, useEffect } from "react";
import {
  ChevronDown as ChevronDown2,
  ChevronRight,
  Loader2,
  BookOpen,
  Sparkles
} from "lucide-react";

// src/components/ui/scroll-area.jsx
import * as React4 from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
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

// src/components/ui/accordion.jsx
import * as React5 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React5.createElement(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React5.createElement(AccordionPrimitive.Header, { className: "flex" }, /* @__PURE__ */ React5.createElement(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-2 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props
  },
  children,
  /* @__PURE__ */ React5.createElement(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
)));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React5.createElement(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props
  },
  /* @__PURE__ */ React5.createElement("div", { className: cn("pb-4 pt-0", className) }, children)
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/navigation-sidebar.jsx
var folderContainsActiveFile = (node, currentFile) => {
  if (!node.children || !currentFile) return false;
  return node.children.some((child) => {
    if (child.id === currentFile) return true;
    if (child.children) return folderContainsActiveFile(child, currentFile);
    return false;
  });
};
var WikiTreeNode = ({ node, currentFile, onFileSelect, parentPath = "", openItems, setOpenItems }) => {
  var _a;
  const isActive = currentFile === node.id;
  const hasChildren = node.children && node.children.length > 0;
  const accordionValue = parentPath ? `${parentPath}-${node.id}` : node.id;
  if (node.type === "file") {
    return /* @__PURE__ */ React6.createElement(
      "button",
      {
        className: cn(
          "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors w-full text-left",
          isActive ? "bg-accent font-semibold" : "hover:bg-accent/50"
        ),
        onClick: () => onFileSelect(node.id)
      },
      /* @__PURE__ */ React6.createElement("span", { className: "break-words" }, node.name.endsWith(".md") ? node.name.replace(/\.md$/, "") : node.name)
    );
  }
  if (!hasChildren) {
    return /* @__PURE__ */ React6.createElement("div", { className: "px-3 py-1.5 text-sm text-muted-foreground" }, node.name);
  }
  return /* @__PURE__ */ React6.createElement(
    Accordion,
    {
      type: "single",
      collapsible: true,
      className: "w-full",
      value: openItems.includes(accordionValue) ? accordionValue : "",
      onValueChange: (value) => {
        if (value) {
          setOpenItems((prev) => [...prev.filter((item) => item !== accordionValue), accordionValue]);
        } else {
          setOpenItems((prev) => prev.filter((item) => item !== accordionValue));
        }
      }
    },
    /* @__PURE__ */ React6.createElement(AccordionItem, { value: accordionValue, className: "border-b-0" }, /* @__PURE__ */ React6.createElement(AccordionTrigger, { className: "px-3 py-2 text-sm hover:no-underline hover:bg-accent/50 rounded-md" }, node.name), /* @__PURE__ */ React6.createElement(AccordionContent, { className: "pl-3" }, /* @__PURE__ */ React6.createElement("div", { className: "flex flex-col space-y-1" }, (_a = node.children) == null ? void 0 : _a.map((child) => /* @__PURE__ */ React6.createElement(
      WikiTreeNode,
      {
        key: child.id,
        node: child,
        currentFile,
        onFileSelect,
        parentPath: accordionValue,
        openItems,
        setOpenItems
      }
    )))))
  );
};
var TreeNodeComponent = ({ node, level = 0, currentFile, onFileSelect, mode = "emoji" }) => {
  var _a;
  const shouldBeOpen = folderContainsActiveFile(node, currentFile);
  const [isExpanded, setIsExpanded] = useState(shouldBeOpen);
  const isActive = currentFile === node.id;
  const hasChildren = node.children && node.children.length > 0;
  useEffect(() => {
    if (shouldBeOpen) {
      setIsExpanded(true);
    }
  }, [shouldBeOpen, currentFile]);
  const handleClick = () => {
    if (node.type === "file") {
      onFileSelect(node.id);
    } else {
      setIsExpanded(!isExpanded);
    }
  };
  return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("div", { className: "relative group" }, /* @__PURE__ */ React6.createElement(
    "button",
    {
      className: cn(
        "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium transition-colors w-full text-left relative",
        isActive ? "bg-accent font-bold opacity-100" : "hover:bg-accent/50 opacity-80"
      ),
      onClick: handleClick,
      style: { paddingLeft: `${level * 8 + 8}px` }
    },
    mode === "emoji" && /* @__PURE__ */ React6.createElement(React6.Fragment, null, node.type === "directory" && /* @__PURE__ */ React6.createElement("span", { className: "transition-transform" }, isExpanded ? /* @__PURE__ */ React6.createElement(ChevronDown2, { className: "h-3 w-3" }) : /* @__PURE__ */ React6.createElement(ChevronRight, { className: "h-3 w-3" })), node.type === "directory" ? isExpanded ? /* @__PURE__ */ React6.createElement("span", { className: "text-md" }, "\u{1F4C1}") : /* @__PURE__ */ React6.createElement("span", { className: "text-md" }, "\u{1F4C2}") : /* @__PURE__ */ React6.createElement("span", { className: "text-xs ml-5 shrink-0" }, node.emoji || "\u{1F335}")),
    mode === "wiki" && node.type === "directory" && /* @__PURE__ */ React6.createElement("span", { className: "transition-transform" }, isExpanded ? /* @__PURE__ */ React6.createElement(ChevronDown2, { className: "h-3 w-3" }) : /* @__PURE__ */ React6.createElement(ChevronRight, { className: "h-3 w-3" })),
    /* @__PURE__ */ React6.createElement("span", { className: "truncate" }, node.type === "file" && node.name.endsWith(".md") ? node.name.replace(/\.md$/, "") : node.name)
  )), isExpanded && hasChildren && /* @__PURE__ */ React6.createElement("div", { className: "relative" }, (_a = node.children) == null ? void 0 : _a.map((child) => /* @__PURE__ */ React6.createElement(
    TreeNodeComponent,
    {
      key: child.id,
      node: child,
      level: level + 1,
      currentFile,
      onFileSelect,
      mode
    }
  ))));
};
function NavigationSidebar({
  showTitle = true,
  title = "All Pages",
  onFileSelect,
  selectedFile,
  siteConfig
} = {}) {
  var _a;
  const [currentFile, setCurrentFile] = useState(selectedFile || null);
  const [fileTree, setFileTree] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [navigationMode, setNavigationMode] = useState(((_a = siteConfig == null ? void 0 : siteConfig.ui) == null ? void 0 : _a.navigationMode) || "emoji");
  const [openAccordionItems, setOpenAccordionItems] = useState([]);
  useEffect(() => {
    setCurrentFile(selectedFile || null);
  }, [selectedFile]);
  useEffect(() => {
    if (navigationMode === "wiki" && currentFile && fileTree.length > 0) {
      const findPathToFile = (nodes, targetId, currentPath = []) => {
        for (const node of nodes) {
          if (node.id === targetId) {
            return currentPath;
          }
          if (node.children) {
            const path = findPathToFile(node.children, targetId, [...currentPath, currentPath.length > 0 ? `${currentPath[currentPath.length - 1]}-${node.id}` : node.id]);
            if (path) return path;
          }
        }
        return null;
      };
      const pathToOpen = findPathToFile(fileTree, currentFile);
      if (pathToOpen) {
        setOpenAccordionItems((prev) => {
          const newItems = [...prev];
          pathToOpen.forEach((item) => {
            if (!newItems.includes(item)) {
              newItems.push(item);
            }
          });
          return newItems;
        });
      }
    }
  }, [currentFile, fileTree, navigationMode]);
  useEffect(() => {
    const loadWorkspace = async () => {
      var _a2, _b;
      try {
        setIsLoading(true);
        setError(null);
        if ((_a2 = siteConfig == null ? void 0 : siteConfig.workspace) == null ? void 0 : _a2.enabled) {
          const tree = await getWorkspaceFileTree(siteConfig);
          setFileTree(tree);
          if (tree.length === 0) {
            setError("No documents found in workspace");
          } else {
            if (((_b = siteConfig == null ? void 0 : siteConfig.workspace) == null ? void 0 : _b.initialFile) && !currentFile) {
              const initialFile = siteConfig.workspace.initialFile;
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
  return /* @__PURE__ */ React6.createElement("div", { className: "h-full flex flex-col p-3" }, showTitle && /* @__PURE__ */ React6.createElement("div", { className: "px-3 pt-6 pb-4" }, /* @__PURE__ */ React6.createElement("h3", { className: "text-xs text-primary/40 font-semibold" }, title)), /* @__PURE__ */ React6.createElement("div", { className: "flex-1 min-h-0" }, /* @__PURE__ */ React6.createElement(ScrollArea, { className: "h-full px-2 py-2" }, /* @__PURE__ */ React6.createElement("div", { className: "flex flex-col space-y-1" }, isLoading ? /* @__PURE__ */ React6.createElement("div", { className: "flex items-center justify-center py-8" }, /* @__PURE__ */ React6.createElement(Loader2, { className: "h-6 w-6 animate-spin text-muted-foreground" })) : error ? /* @__PURE__ */ React6.createElement("div", { className: "text-xs text-muted-foreground text-center py-4" }, error) : fileTree.length === 0 ? /* @__PURE__ */ React6.createElement("div", { className: "text-xs text-muted-foreground text-center py-4" }, "No documents found") : navigationMode === "wiki" ? fileTree.map((node) => /* @__PURE__ */ React6.createElement(
    WikiTreeNode,
    {
      key: node.id,
      node,
      currentFile,
      onFileSelect: (id) => {
        setCurrentFile(id);
        if (onFileSelect) {
          onFileSelect(id);
        }
      },
      openItems: openAccordionItems,
      setOpenItems: setOpenAccordionItems
    }
  )) : fileTree.map((node) => /* @__PURE__ */ React6.createElement(
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
      },
      mode: navigationMode
    }
  ))))));
}

// src/components/table-of-contents.jsx
import React7, { useState as useState2, useEffect as useEffect2 } from "react";
import { ChevronRight as ChevronRight2, ChevronDown as ChevronDown3 } from "lucide-react";
function TableOfContents({
  showTitle = true,
  title = "On This Page",
  contentSelector = ".markdown-content"
} = {}) {
  const [activeId, setActiveId] = useState2("");
  const [tocItems, setTocItems] = useState2([]);
  const [collapsedItems, setCollapsedItems] = useState2(/* @__PURE__ */ new Set());
  useEffect2(() => {
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
  useEffect2(() => {
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
    return /* @__PURE__ */ React7.createElement("div", { key: item.id }, /* @__PURE__ */ React7.createElement("div", { className: "flex items-center" }, hasChildren && /* @__PURE__ */ React7.createElement(
      "button",
      {
        onClick: (e) => toggleCollapse(e, item.id),
        className: "p-0.5 hover:bg-accent/50 rounded mr-1"
      },
      isCollapsed ? /* @__PURE__ */ React7.createElement(ChevronRight2, { className: "h-3 w-3" }) : /* @__PURE__ */ React7.createElement(ChevronDown3, { className: "h-3 w-3" })
    ), /* @__PURE__ */ React7.createElement(
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
    )), hasChildren && !isCollapsed && /* @__PURE__ */ React7.createElement("div", null, item.children.map((child) => renderTocItem(child, depth + 1))));
  };
  if (tocItems.length === 0) {
    return /* @__PURE__ */ React7.createElement("div", { className: "h-full p-3" }, /* @__PURE__ */ React7.createElement("div", { className: "h-full flex flex-col bg-muted rounded-lg" }, showTitle && /* @__PURE__ */ React7.createElement("div", { className: "px-6 pt-6 pb-4" }, /* @__PURE__ */ React7.createElement("h3", { className: "text-xs text-primary/40 font-semibold" }, title)), /* @__PURE__ */ React7.createElement("div", { className: "flex-1 px-4 py-2 text-sm text-muted-foreground" }, "No headings found")));
  }
  return /* @__PURE__ */ React7.createElement("div", { className: "h-full p-3" }, /* @__PURE__ */ React7.createElement("div", { className: "h-full flex flex-col" }, showTitle && /* @__PURE__ */ React7.createElement("div", { className: "px-6 pt-6 pb-4 flex-shrink-0" }, /* @__PURE__ */ React7.createElement("h3", { className: "text-xs text-primary/40 font-semibold" }, title)), /* @__PURE__ */ React7.createElement("div", { className: "flex-1 overflow-y-auto px-4 py-2" }, /* @__PURE__ */ React7.createElement("nav", { className: "space-y-1" }, tocItems.map((item) => renderTocItem(item))))));
}

// src/components/markdown-renderer.jsx
import React15, { useEffect as useEffect3, useState as useState5, useRef } from "react";
import { marked } from "marked";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { Layers2, Loader2 as Loader22 } from "lucide-react";

// src/components/ui/checkbox.jsx
import * as React8 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
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
      /* @__PURE__ */ React8.createElement(CheckIcon, { className: "size-3.5" })
    )
  );
}

// src/components/document-footer.jsx
import React12, { useState as useState3 } from "react";

// src/components/authors-notes.jsx
import React9 from "react";
import { User, Calendar, MessageSquare } from "lucide-react";
function AuthorsNotes({ comments }) {
  if (!comments || comments.length === 0) {
    return /* @__PURE__ */ React9.createElement("div", { className: "text-sm text-muted-foreground text-center py-8" }, "No comments yet");
  }
  const rootComments = comments.filter((c) => !c.parentId);
  const childComments = comments.filter((c) => c.parentId);
  const getChildComments = (parentId) => {
    return childComments.filter((c) => c.parentId === parentId);
  };
  const renderComment = (comment, depth = 0, isReply = false) => {
    const children = getChildComments(comment.id);
    const initials = comment.author ? comment.author.charAt(0).toUpperCase() : "A";
    return /* @__PURE__ */ React9.createElement("div", { key: comment.id, className: `${depth > 0 ? "ml-12" : ""} group` }, /* @__PURE__ */ React9.createElement("div", { className: `${isReply ? "pl-0" : ""}` }, /* @__PURE__ */ React9.createElement("div", { className: "flex gap-3" }, /* @__PURE__ */ React9.createElement("div", { className: "flex-shrink-0" }, /* @__PURE__ */ React9.createElement("div", { className: "w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center" }, /* @__PURE__ */ React9.createElement("span", { className: "text-sm font-medium text-emerald-500" }, initials))), /* @__PURE__ */ React9.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React9.createElement("div", { className: "flex items-center gap-2 mb-1" }, /* @__PURE__ */ React9.createElement("span", { className: "text-sm font-semibold text-foreground" }, comment.author || "Anonymous"), comment.timestamp && /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement("span", { className: "text-xs text-muted-foreground" }, "\u2022"), /* @__PURE__ */ React9.createElement("span", { className: "text-xs text-muted-foreground" }, new Date(comment.timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })))), /* @__PURE__ */ React9.createElement("div", { className: "text-sm text-foreground leading-relaxed whitespace-pre-wrap" }, comment.text), children.length > 0 && /* @__PURE__ */ React9.createElement("div", { className: "mt-3" }, /* @__PURE__ */ React9.createElement("div", { className: "flex items-center gap-2 text-xs text-muted-foreground mb-3" }, /* @__PURE__ */ React9.createElement(MessageSquare, { className: "h-3 w-3" }), /* @__PURE__ */ React9.createElement("span", null, children.length, " ", children.length === 1 ? "reply" : "replies"))))), children.length > 0 && /* @__PURE__ */ React9.createElement("div", { className: "mt-4 space-y-4" }, children.map((child) => renderComment(child, depth + 1, true)))), depth === 0 && !isReply && /* @__PURE__ */ React9.createElement("div", { className: "border-b border-border/50 my-6 last:border-0" }));
  };
  return /* @__PURE__ */ React9.createElement("div", { className: "space-y-2" }, rootComments.map((comment) => renderComment(comment)));
}

// src/components/related-documents.jsx
import React10 from "react";
import { FileText, FolderOpen, ExternalLink, Layers } from "lucide-react";
function RelatedDocuments({ documents, onDocumentClick }) {
  if (!documents || documents.length === 0) {
    return /* @__PURE__ */ React10.createElement("div", { className: "text-sm text-muted-foreground text-center py-8" }, "No related documents found");
  }
  return /* @__PURE__ */ React10.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3" }, documents.map((doc, index) => /* @__PURE__ */ React10.createElement(
    "button",
    {
      key: index,
      onClick: () => onDocumentClick == null ? void 0 : onDocumentClick(doc.path),
      className: "flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-border transition-all text-left group"
    },
    /* @__PURE__ */ React10.createElement("div", { className: "flex-shrink-0" }, doc.emoji ? /* @__PURE__ */ React10.createElement("span", { className: "text-lg" }, doc.emoji) : doc.isFolder ? /* @__PURE__ */ React10.createElement(FolderOpen, { className: "h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" }) : /* @__PURE__ */ React10.createElement(Layers, { className: "h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" })),
    /* @__PURE__ */ React10.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React10.createElement("div", { className: "text-sm font-medium group-hover:text-primary transition-colors truncate" }, doc.title)),
    /* @__PURE__ */ React10.createElement(ExternalLink, { className: "h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" })
  )));
}

// src/components/ConfigProvider.jsx
import React11, { createContext, useContext } from "react";
var ConfigContext = createContext(null);
function ConfigProvider({ children, config }) {
  return /* @__PURE__ */ React11.createElement(ConfigContext.Provider, { value: config }, children);
}
function useConfig() {
  const config = useContext(ConfigContext);
  if (!config) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return config;
}

// src/components/document-footer.jsx
function DocumentFooter({ comments, relatedDocuments, onDocumentClick }) {
  var _a, _b, _c, _d;
  const config = useConfig();
  const [activeTab, setActiveTab] = useState3("related");
  const showAuthorsNotes = ((_a = config.ui.authorsNotes) == null ? void 0 : _a.enabled) && comments.length > 0;
  const showRelated = ((_b = config.ui.relatedDocuments) == null ? void 0 : _b.enabled) && relatedDocuments.length > 0;
  if (!showAuthorsNotes && !showRelated) {
    return null;
  }
  if (showAuthorsNotes && !showRelated) {
    return /* @__PURE__ */ React12.createElement("div", { className: "mt-12 pt-8" }, /* @__PURE__ */ React12.createElement("h2", { className: "text-lg font-semibold mb-6" }, ((_c = config.ui.authorsNotes) == null ? void 0 : _c.title) || "Author's Notes"), /* @__PURE__ */ React12.createElement(AuthorsNotes, { comments }));
  }
  if (showRelated && !showAuthorsNotes) {
    return /* @__PURE__ */ React12.createElement("div", { className: "mt-12 pt-8" }, /* @__PURE__ */ React12.createElement("h2", { className: "text-lg font-semibold mb-6" }, ((_d = config.ui.relatedDocuments) == null ? void 0 : _d.title) || "Related Documents"), /* @__PURE__ */ React12.createElement(RelatedDocuments, { documents: relatedDocuments, onDocumentClick }));
  }
  return /* @__PURE__ */ React12.createElement("div", { className: "mt-12 pt-8" }, /* @__PURE__ */ React12.createElement("div", { className: "flex items-center gap-8 mb-8 border-b border-border" }, /* @__PURE__ */ React12.createElement(
    "button",
    {
      onClick: () => setActiveTab("related"),
      className: cn(
        "pb-2 px-1 text-sm font-medium transition-all relative",
        activeTab === "related" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
      )
    },
    /* @__PURE__ */ React12.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React12.createElement("span", null, "Related Documents"), /* @__PURE__ */ React12.createElement("span", { className: "text-xs text-muted-foreground ml-1" }, "(", relatedDocuments.length, ")")),
    activeTab === "related" && /* @__PURE__ */ React12.createElement("div", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary" })
  ), /* @__PURE__ */ React12.createElement(
    "button",
    {
      onClick: () => setActiveTab("comments"),
      className: cn(
        "pb-2 px-1 text-sm font-medium transition-all relative",
        activeTab === "comments" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
      )
    },
    /* @__PURE__ */ React12.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React12.createElement("span", null, "Notes"), /* @__PURE__ */ React12.createElement("span", { className: "text-xs text-muted-foreground ml-1" }, "(", comments.length, ")")),
    activeTab === "comments" && /* @__PURE__ */ React12.createElement("div", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary" })
  )), /* @__PURE__ */ React12.createElement("div", { className: "mt-2" }, activeTab === "related" && /* @__PURE__ */ React12.createElement(
    RelatedDocuments,
    {
      documents: relatedDocuments,
      onDocumentClick
    }
  ), activeTab === "comments" && /* @__PURE__ */ React12.createElement(AuthorsNotes, { comments })));
}

// src/components/scratchspace.jsx
import React13, { useState as useState4 } from "react";
import { ChevronDown as ChevronDown4, ChevronRight as ChevronRight3, Copy, Sparkles as Sparkles2, AlertTriangle, Users } from "lucide-react";
function ScratchSpace({ title, variant = "default", content, collapsed: initialCollapsed = true }) {
  const [isCollapsed, setIsCollapsed] = useState4(initialCollapsed);
  const variantConfig = {
    "ai-response": {
      icon: /* @__PURE__ */ React13.createElement(Sparkles2, { size: 14, className: "sparkle-icon text-purple-500 dark:text-purple-400" }),
      borderClass: "border-purple-300 dark:border-purple-700",
      bgClass: "bg-purple-50/30 dark:bg-purple-900/10",
      shadowClass: "shadow-[0_0_15px_rgba(147,51,234,0.1)] dark:shadow-[0_0_15px_rgba(147,51,234,0.15)]",
      headerBgClass: "bg-gradient-to-r from-purple-50/80 to-purple-50/30 dark:from-purple-900/30 dark:to-purple-900/10 border-purple-200 dark:border-purple-800",
      textColorClass: "text-purple-600 dark:text-purple-400",
      iconColorClass: "text-purple-500 dark:text-purple-400",
      defaultTitle: "AI Response"
    },
    "conflict": {
      icon: /* @__PURE__ */ React13.createElement(AlertTriangle, { size: 14, className: "text-orange-500 dark:text-orange-400" }),
      borderClass: "border-orange-300 dark:border-orange-700",
      bgClass: "bg-orange-50/30 dark:bg-orange-900/10",
      shadowClass: "shadow-[0_0_15px_rgba(255,165,0,0.1)] dark:shadow-[0_0_15px_rgba(255,165,0,0.15)]",
      headerBgClass: "bg-orange-50/50 dark:bg-orange-900/20",
      textColorClass: "text-orange-600 dark:text-orange-400",
      iconColorClass: "text-orange-500 dark:text-orange-400",
      defaultTitle: "Merge Conflict"
    },
    "conflict-version": {
      icon: /* @__PURE__ */ React13.createElement(Users, { size: 14, className: "text-yellow-600 dark:text-yellow-400" }),
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
  return /* @__PURE__ */ React13.createElement(
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
    /* @__PURE__ */ React13.createElement(
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
      /* @__PURE__ */ React13.createElement("div", { className: "flex-1 flex items-center min-w-0" }, /* @__PURE__ */ React13.createElement(
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
        isCollapsed ? /* @__PURE__ */ React13.createElement(ChevronRight3, { size: 16 }) : /* @__PURE__ */ React13.createElement(ChevronDown4, { size: 16 })
      ), variant === "ai-response" ? /* @__PURE__ */ React13.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React13.createElement("span", { className: "flex items-center gap-1.5 cursor-pointer font-medium truncate" }, config.icon, /* @__PURE__ */ React13.createElement("span", { className: cn(
        "truncate",
        isCollapsed && "text-muted-foreground",
        !isCollapsed && config.textColorClass
      ) }, displayTitle))) : variant === "conflict" ? /* @__PURE__ */ React13.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React13.createElement("span", { className: "flex items-center gap-1.5 cursor-pointer font-medium truncate" }, config.icon, /* @__PURE__ */ React13.createElement("span", { className: cn(
        "truncate",
        isCollapsed && "text-muted-foreground",
        !isCollapsed && config.textColorClass
      ) }, displayTitle))) : variant === "conflict-version" ? /* @__PURE__ */ React13.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React13.createElement("span", { className: "flex items-center gap-1.5 cursor-pointer font-medium truncate" }, config.icon, /* @__PURE__ */ React13.createElement("span", { className: cn(
        "truncate",
        isCollapsed && "text-muted-foreground",
        !isCollapsed && config.textColorClass
      ) }, displayTitle))) : displayTitle && /* @__PURE__ */ React13.createElement(
        "span",
        {
          className: cn(
            "cursor-text truncate mr-2",
            isCollapsed && "text-muted-foreground"
          )
        },
        displayTitle
      ), isCollapsed && /* @__PURE__ */ React13.createElement("div", { className: cn(
        "flex-1 h-[1px] bg-border/50 mx-2",
        variant === "ai-response" && "bg-purple-200/50 dark:bg-purple-700/30"
      ) })),
      /* @__PURE__ */ React13.createElement("div", { className: "flex items-center space-x-1" }, /* @__PURE__ */ React13.createElement(
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
        /* @__PURE__ */ React13.createElement(Copy, { size: 14 })
      ))
    ),
    /* @__PURE__ */ React13.createElement(
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
      /* @__PURE__ */ React13.createElement("div", { className: cn(
        "prose dark:prose-invert",
        variant === "ai-response" && "prose-purple dark:prose-purple"
      ) }, /* @__PURE__ */ React13.createElement(
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
import React14, { useContext as useContext2 } from "react";
import { FileText as FileText2, Download, ExternalLink as ExternalLink2, Folder, File, Play } from "lucide-react";
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
  return /* @__PURE__ */ React14.createElement("div", { className: "resource-pdf-container w-full my-3" }, /* @__PURE__ */ React14.createElement("div", { className: "flex items-center p-3 bg-muted/30 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer", onClick: handleOpen }, /* @__PURE__ */ React14.createElement("div", { className: "flex items-center gap-3 flex-1" }, /* @__PURE__ */ React14.createElement("span", { className: "text-red-500 text-lg" }, "\u{1F4CB}"), /* @__PURE__ */ React14.createElement("span", { className: "font-medium text-foreground text-sm", title }, title)), /* @__PURE__ */ React14.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React14.createElement(
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
    /* @__PURE__ */ React14.createElement(ExternalLink2, { className: "w-4 h-4" })
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
  return /* @__PURE__ */ React14.createElement("div", { className: "resource-html-container w-full my-3" }, /* @__PURE__ */ React14.createElement("div", { className: "flex items-center p-3 bg-muted/30 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer", onClick: handleOpen }, /* @__PURE__ */ React14.createElement("div", { className: "flex items-center gap-3 flex-1" }, /* @__PURE__ */ React14.createElement("span", { className: "text-blue-500 text-lg" }, "\u{1F310}"), /* @__PURE__ */ React14.createElement("span", { className: "font-medium text-foreground text-sm", title }, title)), /* @__PURE__ */ React14.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React14.createElement(
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
    /* @__PURE__ */ React14.createElement(ExternalLink2, { className: "w-4 h-4" })
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
  return /* @__PURE__ */ React14.createElement("div", { className: "resource-youtube-container w-full my-6" }, /* @__PURE__ */ React14.createElement("div", { className: "aspect-video w-full" }, /* @__PURE__ */ React14.createElement(
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
  return /* @__PURE__ */ React14.createElement("div", { className: "resource-file-container w-full my-3" }, /* @__PURE__ */ React14.createElement(
    "div",
    {
      className: "flex items-center p-3 bg-muted/30 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors",
      onClick: handleOpen
    },
    /* @__PURE__ */ React14.createElement("div", { className: "flex items-center gap-3 flex-1" }, /* @__PURE__ */ React14.createElement("span", { className: "text-lg" }, icon), /* @__PURE__ */ React14.createElement("span", { className: "font-medium text-foreground text-sm", title: displayName }, displayName)),
    /* @__PURE__ */ React14.createElement("div", { className: "flex gap-2" }, type === "file" && /* @__PURE__ */ React14.createElement(
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
      /* @__PURE__ */ React14.createElement(Download, { className: "w-4 h-4" })
    ), /* @__PURE__ */ React14.createElement(
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
      type === "folder" ? /* @__PURE__ */ React14.createElement(Folder, { className: "w-4 h-4" }) : /* @__PURE__ */ React14.createElement(File, { className: "w-4 h-4" })
    ))
  ));
}

// src/components/markdown-renderer.jsx
import { createRoot } from "react-dom/client";
var renderer = new marked.Renderer();
marked.use({
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
marked.use({
  gfm: true,
  breaks: true,
  pedantic: false,
  renderer
});
marked.use(gfmHeadingId({
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
  return /* @__PURE__ */ React15.createElement(
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
  const [content, setContent] = useState5("");
  const [isLoading, setIsLoading] = useState5(false);
  const [error, setError] = useState5(null);
  const [comments, setComments] = useState5([]);
  const [relatedDocs, setRelatedDocs] = useState5([]);
  const [documentTitle, setDocumentTitle] = useState5("");
  const contentRef = useRef(null);
  const checkboxRootsRef = useRef([]);
  const scratchspaceRootsRef = useRef([]);
  const resourceRootsRef = useRef([]);
  useEffect3(() => {
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
        let html = marked.parse(preprocessedMarkdown);
        html = processTaskLists(html);
        Object.entries(scratchspaceMarkers).forEach(([marker, { title, variant, content: content2, index }]) => {
          let processedContent = content2.replace(/==([^=]+)==/g, "<mark>$1</mark>");
          processedContent = processedContent.replace(
            /<color:(#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|[a-zA-Z]+)>([^<]+)<\/color>/g,
            '<span style="color:$1">$2</span>'
          );
          let contentHtml = marked.parse(processedContent);
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
  useEffect3(() => {
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
          const root = createRoot(container);
          root.render(/* @__PURE__ */ React15.createElement(TaskCheckbox, { checked: isChecked }));
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
            const root = createRoot(container);
            root.render(
              /* @__PURE__ */ React15.createElement(
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
          const root = createRoot(container);
          root.render(/* @__PURE__ */ React15.createElement(ResourcePDF, { src, title, workspacePath: config.workspace.path }));
          resourceRootsRef.current.push(root);
        });
        const htmlPlaceholders = contentRef.current.querySelectorAll(".resource-html-placeholder");
        htmlPlaceholders.forEach((placeholder) => {
          const src = placeholder.getAttribute("data-src") || "";
          const title = placeholder.getAttribute("data-title") || "HTML Document";
          const container = document.createElement("div");
          placeholder.replaceWith(container);
          const root = createRoot(container);
          root.render(/* @__PURE__ */ React15.createElement(ResourceHTML, { src, title, workspacePath: config.workspace.path }));
          resourceRootsRef.current.push(root);
        });
        const filePlaceholders = contentRef.current.querySelectorAll(".resource-file-placeholder");
        filePlaceholders.forEach((placeholder) => {
          const path = placeholder.getAttribute("data-path") || "";
          const name = placeholder.getAttribute("data-name") || "Resource";
          const type = placeholder.getAttribute("data-file-type") || "file";
          const container = document.createElement("div");
          placeholder.replaceWith(container);
          const root = createRoot(container);
          root.render(/* @__PURE__ */ React15.createElement(ResourceFile, { path, name, type, workspacePath: config.workspace.path }));
          resourceRootsRef.current.push(root);
        });
        const youtubePlaceholders = contentRef.current.querySelectorAll(".resource-youtube-placeholder");
        youtubePlaceholders.forEach((placeholder) => {
          const videoId = placeholder.getAttribute("data-video-id") || "";
          const title = placeholder.getAttribute("data-title") || "YouTube Video";
          const container = document.createElement("div");
          placeholder.replaceWith(container);
          const root = createRoot(container);
          root.render(/* @__PURE__ */ React15.createElement(ResourceYouTube, { videoId, title }));
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
    return /* @__PURE__ */ React15.createElement("div", { className: "flex items-center justify-center h-full" }, /* @__PURE__ */ React15.createElement(Loader22, { className: "h-8 w-8 animate-spin text-muted-foreground" }));
  }
  if (error) {
    return /* @__PURE__ */ React15.createElement("div", { className: "flex items-center justify-center h-full" }, /* @__PURE__ */ React15.createElement("p", { className: "text-muted-foreground" }, error));
  }
  if (!filePath) {
    return /* @__PURE__ */ React15.createElement("div", { className: "flex items-center justify-center h-full" }, /* @__PURE__ */ React15.createElement("p", { className: "text-muted-foreground" }, "Select a document to view"));
  }
  return /* @__PURE__ */ React15.createElement("div", { className: "h-full overflow-auto" }, /* @__PURE__ */ React15.createElement("div", { className: "max-w-4xl mx-auto px-8 pt-4 pb-12" }, /* @__PURE__ */ React15.createElement("div", { className: "mb-8 px-8 py-8 bg-muted rounded-lg" }, /* @__PURE__ */ React15.createElement(Layers2, { className: "w-5 h-5 text-primary opacity-20 transition-opacity duration-200" }), /* @__PURE__ */ React15.createElement("h1", { className: "text-3xl md:text-4xl font-light mt-2" }, documentTitle), /* @__PURE__ */ React15.createElement("div", { className: "document-title-divider" })), /* @__PURE__ */ React15.createElement(
    "div",
    {
      ref: contentRef,
      className: "markdown-content px-12",
      dangerouslySetInnerHTML: { __html: content }
    }
  ), /* @__PURE__ */ React15.createElement(
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
import { Menu, List, ChevronRight as ChevronRight4 } from "lucide-react";

// src/components/ui/sheet.jsx
import * as React16 from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva as cva2 } from "class-variance-authority";
import { X } from "lucide-react";
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetClose = SheetPrimitive.Close;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React16.createElement(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = cva2(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
var SheetContent = React16.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ React16.createElement(SheetPortal, null, /* @__PURE__ */ React16.createElement(SheetOverlay, null), /* @__PURE__ */ React16.createElement(
  SheetPrimitive.Content,
  {
    ref,
    className: cn(sheetVariants({ side }), className),
    ...props
  },
  children,
  /* @__PURE__ */ React16.createElement(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, /* @__PURE__ */ React16.createElement(X, { className: "h-4 w-4" }), /* @__PURE__ */ React16.createElement("span", { className: "sr-only" }, "Close"))
)));
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ React16.createElement(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ React16.createElement(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React16.createElement(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React16.createElement(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

// src/components/wiki/Document.jsx
var Document = ({
  initialFile = null,
  showNavigation = true,
  showTableOfContents = true,
  navigationTitle = "All Pages",
  tocTitle = "On This Page",
  className = "",
  onFileSelect: onFileSelectProp,
  siteConfig = null,
  serverDocument = null
}) => {
  var _a;
  const [selectedFile, setSelectedFile] = useState6(initialFile);
  const [mobileNavOpen, setMobileNavOpen] = useState6(false);
  const [mobileTocOpen, setMobileTocOpen] = useState6(false);
  useEffect4(() => {
    setSelectedFile(initialFile);
  }, [initialFile]);
  const handleFileSelect = (file) => {
    setSelectedFile(file);
    onFileSelectProp == null ? void 0 : onFileSelectProp(file);
    setMobileNavOpen(false);
  };
  return /* @__PURE__ */ React17.createElement(React17.Fragment, null, /* @__PURE__ */ React17.createElement("div", { className: "md:hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" }, /* @__PURE__ */ React17.createElement("div", { className: "flex items-center h-12 px-2" }, showNavigation && /* @__PURE__ */ React17.createElement(
    Button,
    {
      variant: "ghost",
      size: "icon",
      className: "h-9 w-9",
      onClick: () => setMobileNavOpen(true)
    },
    /* @__PURE__ */ React17.createElement(Menu, { className: "h-5 w-5" })
  ), /* @__PURE__ */ React17.createElement("div", { className: "flex-1 flex items-center px-2 text-sm text-muted-foreground overflow-hidden" }, /* @__PURE__ */ React17.createElement("span", { className: "truncate" }, selectedFile ? /* @__PURE__ */ React17.createElement(React17.Fragment, null, /* @__PURE__ */ React17.createElement("span", null, "Documents"), /* @__PURE__ */ React17.createElement(ChevronRight4, { className: "h-3 w-3 inline mx-1" }), /* @__PURE__ */ React17.createElement("span", { className: "text-foreground" }, (_a = selectedFile.split("/").pop()) == null ? void 0 : _a.replace(".md", ""))) : "Select a document")), showTableOfContents && /* @__PURE__ */ React17.createElement(
    Button,
    {
      variant: "ghost",
      size: "icon",
      className: "h-9 w-9 lg:hidden",
      onClick: () => setMobileTocOpen(true)
    },
    /* @__PURE__ */ React17.createElement(List, { className: "h-5 w-5" })
  ))), /* @__PURE__ */ React17.createElement("div", { className: `flex-1 overflow-hidden ${className}` }, /* @__PURE__ */ React17.createElement("div", { className: "h-full flex max-w-8xl mx-auto" }, showNavigation && /* @__PURE__ */ React17.createElement("aside", { className: "hidden md:block w-64 border-r border-border border-dashed overflow-y-auto flex-shrink-0" }, /* @__PURE__ */ React17.createElement(
    NavigationSidebar,
    {
      showTitle: true,
      title: navigationTitle,
      onFileSelect: handleFileSelect,
      selectedFile,
      siteConfig
    }
  )), /* @__PURE__ */ React17.createElement("main", { className: "flex-1 bg-background overflow-y-auto" }, /* @__PURE__ */ React17.createElement(
    MarkdownRenderer,
    {
      filePath: selectedFile,
      onFileSelect: handleFileSelect
    }
  )), showTableOfContents && /* @__PURE__ */ React17.createElement("aside", { className: "hidden lg:block w-64 overflow-y-auto flex-shrink-0" }, /* @__PURE__ */ React17.createElement(
    TableOfContents,
    {
      showTitle: true,
      title: tocTitle
    }
  )))), showNavigation && /* @__PURE__ */ React17.createElement(Sheet, { open: mobileNavOpen, onOpenChange: setMobileNavOpen }, /* @__PURE__ */ React17.createElement(SheetContent, { side: "left", className: "w-80 p-0 flex flex-col h-full" }, /* @__PURE__ */ React17.createElement(SheetHeader, { className: "px-6 py-4 border-b" }, /* @__PURE__ */ React17.createElement(SheetTitle, null, "All Pages")), /* @__PURE__ */ React17.createElement("div", { className: "flex-1 overflow-hidden" }, /* @__PURE__ */ React17.createElement("div", { className: "h-full overflow-y-auto" }, /* @__PURE__ */ React17.createElement(
    NavigationSidebar,
    {
      showTitle: false,
      onFileSelect: handleFileSelect,
      selectedFile,
      siteConfig
    }
  ))))), showTableOfContents && /* @__PURE__ */ React17.createElement(Sheet, { open: mobileTocOpen, onOpenChange: setMobileTocOpen }, /* @__PURE__ */ React17.createElement(SheetContent, { side: "right", className: "w-80 p-0 flex flex-col h-full" }, /* @__PURE__ */ React17.createElement(SheetHeader, { className: "px-6 py-4 border-b" }, /* @__PURE__ */ React17.createElement(SheetTitle, null, "On This Page")), /* @__PURE__ */ React17.createElement("div", { className: "flex-1 overflow-hidden" }, /* @__PURE__ */ React17.createElement("div", { className: "h-full overflow-y-auto" }, /* @__PURE__ */ React17.createElement(
    TableOfContents,
    {
      showTitle: false
    }
  ))))));
};

// src/components/wiki/TableOfContents.jsx
import React18 from "react";
var TableOfContents2 = ({
  showTitle = true,
  title = "On This Page",
  className = ""
}) => {
  return /* @__PURE__ */ React18.createElement("div", { className }, /* @__PURE__ */ React18.createElement(
    TableOfContents,
    {
      showTitle,
      title
    }
  ));
};

// src/components/theme-provider.jsx
import * as React19 from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
function ThemeProvider({
  children,
  ...props
}) {
  return /* @__PURE__ */ React19.createElement(NextThemesProvider, { ...props }, children);
}

// src/components/ui/dialog.jsx
import * as React20 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ React20.createElement(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ React20.createElement(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ React20.createElement(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ React20.createElement(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ React20.createElement(
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
  return /* @__PURE__ */ React20.createElement(DialogPortal, { "data-slot": "dialog-portal" }, /* @__PURE__ */ React20.createElement(DialogOverlay, null), /* @__PURE__ */ React20.createElement(
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
    showCloseButton && /* @__PURE__ */ React20.createElement(
      DialogPrimitive.Close,
      {
        "data-slot": "dialog-close",
        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      },
      /* @__PURE__ */ React20.createElement(XIcon, null),
      /* @__PURE__ */ React20.createElement("span", { className: "sr-only" }, "Close")
    )
  ));
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ React20.createElement(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ React20.createElement(
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
  return /* @__PURE__ */ React20.createElement(
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
  return /* @__PURE__ */ React20.createElement(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/components/ui/dropdown-menu.jsx
import * as React21 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon as CheckIcon2, ChevronRightIcon, CircleIcon } from "lucide-react";
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ React21.createElement(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ React21.createElement(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ React21.createElement(
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
  return /* @__PURE__ */ React21.createElement(DropdownMenuPrimitive.Portal, null, /* @__PURE__ */ React21.createElement(
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
  return /* @__PURE__ */ React21.createElement(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ React21.createElement(
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
  return /* @__PURE__ */ React21.createElement(
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
    /* @__PURE__ */ React21.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React21.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React21.createElement(CheckIcon2, { className: "size-4" }))),
    children
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ React21.createElement(
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
  return /* @__PURE__ */ React21.createElement(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React21.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React21.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React21.createElement(CircleIcon, { className: "size-2 fill-current" }))),
    children
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ React21.createElement(
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
  return /* @__PURE__ */ React21.createElement(
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
  return /* @__PURE__ */ React21.createElement(
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
  return /* @__PURE__ */ React21.createElement(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ React21.createElement(
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
    /* @__PURE__ */ React21.createElement(ChevronRightIcon, { className: "ml-auto size-4" })
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ React21.createElement(
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
import * as React22 from "react";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ React22.createElement(
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
import * as React23 from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
function Separator2({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ React23.createElement(
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
import * as React24 from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ React24.createElement(
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
  return /* @__PURE__ */ React24.createElement(
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
  return /* @__PURE__ */ React24.createElement(
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
  return /* @__PURE__ */ React24.createElement(
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
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
  Separator2 as Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
  TableOfContents2 as TableOfContents,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ThemeProvider,
  buildFileTree,
  buttonVariants,
  createSlugMap,
  defaultConfig,
  fetchWorkspaceRegistry,
  getWorkspaceFileTree,
  initializeSlugMapping,
  pathToSlug,
  slugToPath,
  useConfig
};
//# sourceMappingURL=index.mjs.map