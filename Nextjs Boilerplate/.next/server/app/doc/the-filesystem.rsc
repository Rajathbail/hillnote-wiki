1:"$Sreact.fragment"
2:I[2887,["177","static/chunks/app/layout-487684e597392fbd.js"],"ThemeProvider"]
3:I[9766,[],""]
4:I[8924,[],""]
6:I[4431,[],"OutletBoundary"]
8:I[5278,[],"AsyncMetadataOutlet"]
a:I[4431,[],"ViewportBoundary"]
c:I[4431,[],"MetadataBoundary"]
d:"$Sreact.suspense"
f:I[7150,[],""]
:HL["/_next/static/media/569ce4b8f30dc480-s.p.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/media/93f479601ee12b01-s.p.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/css/0ba2d6dbf488281f.css","style"]
:HL["/_next/static/css/822c3e8538ddc1da.css","style"]
0:{"P":null,"b":"NrV2WXyyqB9VzWORwR7UE","p":"","c":["","doc","the-filesystem"],"i":false,"f":[[["",{"children":["doc",{"children":[["path","the-filesystem","c"],{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/0ba2d6dbf488281f.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","suppressHydrationWarning":true,"children":["$","body",null,{"className":"__variable_5cfdac __variable_9a8899 antialiased","children":["$","$L2",null,{"attribute":"class","defaultTheme":"system","enableSystem":true,"disableTransitionOnChange":true,"children":["$","$L3",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]}]]}],{"children":["doc",["$","$1","c",{"children":[null,["$","$L3",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":[["path","the-filesystem","c"],["$","$1","c",{"children":[null,["$","$L3",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":["$L5",[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/822c3e8538ddc1da.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","$L6",null,{"children":["$L7",["$","$L8",null,{"promise":"$@9"}]]}]]}],{},null,false]},null,false]},null,false]},null,false],["$","$1","h",{"children":[null,[["$","$La",null,{"children":"$Lb"}],["$","meta",null,{"name":"next-size-adjust","content":""}]],["$","$Lc",null,{"children":["$","div",null,{"hidden":true,"children":["$","$d",null,{"fallback":null,"children":"$Le"}]}]}]]}],false]],"m":"$undefined","G":["$f",[]],"s":false,"S":true}
10:I[2415,["902","static/chunks/902-a94930665e6dcb91.js","182","static/chunks/182-a923bbb434e34f6a.js","497","static/chunks/app/doc/%5B...path%5D/page-d0ecc23cd9fe2caa.js"],"default"]
11:T982,# ==An overview of the local files==

![](resources/images/Start Here/1755083595272.png)Hillnote being a local first editor has a very intentional method to how it stored files. The idea is to keep it easy to manage while also providing all the context and resources to any AI agent that enters the workspace.

While we still a little ways out when it comes to true AI agentic software built right into our file management software I do think its close[^1] so consider this as prep for when it happens. In the meantime however software like Claude Code, Claude desktop, Cursor, Copilot, Open AI, etc work great with the structure provided.

### 📕 Workspaces

Project workspaces serve as dedicated storage areas for your files and resources. You can choose to organize these workspaces across different locations on your computer, either grouping them together or keeping them separate based on your preferences. Think of a workspace as a master container that houses all your project-related content.

### 📁 Documents

The documents folder is where all documents are housed. Its where each file you see in this editor is present.

### 📄 Document registry

A centralized registry that contains essential information like document definitions and file paths, helping both AI models and Hillnote navigate and understand your workspace structure.

### 📄 Readme

This file serves as a guide that helps AI models understand the workspace and project structure, providing essential context to ensure they can navigate the directory effectively and work in the intended direction.

### 📁 Resources

All supporting materials to your documents like tools, PDF’s, Images or even files you want to store can be stored here. Its where anything that is not a document is stored.

## Reveal in finder

Pretty self explanatory really but you can open a file in your machines file system manager by clicking on reveal in finder within the 3 dot menu in the sidebar.

![Pasted image](resources/images/The Filesystem/1757070687980.png)

<!-- COMMENTS_SECTION_START -->
<!-- COMMENT
{"name":"Rajath Bail","email":"rajath@hillnote.com","timestamp":"2025-09-05T04:42:13.412Z","id":"comment_2025-09-05T04:42:13.412Z_hd9jds9sd","parentId":null}
-->
As with all things AI - everything changes so rapidly that I feel the need to mention that I wrote [1] on September 5th 2025. Don't know if this still holds up. 

<!-- COMMENTS_SECTION_END -->5:[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"the filesystem\",\"description\":\"![](resources/images/Start Here/1755083595272.png)Hillnote being a local first editor has a very intentional method to how it stored files. The idea is to keep \",\"datePublished\":\"2025-09-05T12:11:22.780Z\",\"dateModified\":\"2025-09-05T12:11:22.780Z\",\"author\":{\"@type\":\"Organization\",\"name\":\"HillnoteWiki\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"HillnoteWiki\"},\"breadcrumb\":{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"http://localhost:3000/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Documentation\",\"item\":\"http://localhost:3000/doc\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"the filesystem\",\"item\":\"http://localhost:3000/doc/the-filesystem\"}]},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"http://localhost:3000/doc/the-filesystem\"}}"}}],["$","$L10",null,{"documentPath":"documents/The Filesystem.md","document":{"path":"documents/The Filesystem.md","title":"the filesystem","description":"![](resources/images/Start Here/1755083595272.png)Hillnote being a local first editor has a very intentional method to how it stored files. The idea is to keep ","content":"$11","frontmatter":{},"headings":[{"level":1,"text":"==An overview of the local files==","id":"-an-overview-of-the-local-files-"},{"level":3,"text":"📕 Workspaces","id":"-workspaces"},{"level":3,"text":"📁 Documents","id":"-documents"},{"level":3,"text":"📄 Document registry","id":"-document-registry"},{"level":3,"text":"📄 Readme","id":"-readme"},{"level":3,"text":"📁 Resources","id":"-resources"},{"level":2,"text":"Reveal in finder","id":"reveal-in-finder"}],"lastModified":"2025-09-05T12:11:22.780Z"},"breadcrumbs":[{"name":"Home","path":"/"},{"name":"Documentation","path":"/doc"},{"name":"the filesystem","path":"/doc/the-filesystem","isLast":true}],"relatedDocuments":[{"title":"Start Here ","path":"/doc/Start Here "},{"title":"About the Editor","path":"/doc/About the Editor"},{"title":"The Filesystem","path":"/doc/The Filesystem"},{"title":"Using AI in Hillnote","path":"/doc/Using AI in Hillnote"},{"title":"Make it yours","path":"/doc/Make it yours"}]}]]
b:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
7:null
12:I[622,[],"IconMark"]
9:{"metadata":[["$","title","0",{"children":"the filesystem | HillnoteWiki"}],["$","meta","1",{"name":"description","content":"![](resources/images/Start Here/1755083595272.png)Hillnote being a local first editor has a very intentional method to how it stored files. The idea is to keep "}],["$","meta","2",{"name":"robots","content":"index, follow"}],["$","meta","3",{"name":"googlebot","content":"index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"}],["$","link","4",{"rel":"canonical","href":"http://localhost:3000/doc/the-filesystem"}],["$","meta","5",{"property":"og:title","content":"the filesystem | HillnoteWiki"}],["$","meta","6",{"property":"og:description","content":"![](resources/images/Start Here/1755083595272.png)Hillnote being a local first editor has a very intentional method to how it stored files. The idea is to keep "}],["$","meta","7",{"property":"og:url","content":"http://localhost:3000/doc/the-filesystem"}],["$","meta","8",{"property":"og:site_name","content":"HillnoteWiki"}],["$","meta","9",{"property":"og:type","content":"article"}],["$","meta","10",{"property":"article:published_time","content":"2025-09-05T12:11:22.780Z"}],["$","meta","11",{"property":"article:modified_time","content":"2025-09-05T12:11:22.780Z"}],["$","meta","12",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","13",{"name":"twitter:title","content":"the filesystem | HillnoteWiki"}],["$","meta","14",{"name":"twitter:description","content":"![](resources/images/Start Here/1755083595272.png)Hillnote being a local first editor has a very intentional method to how it stored files. The idea is to keep "}],["$","link","15",{"rel":"icon","href":"/favicon.ico","type":"image/x-icon","sizes":"16x16"}],["$","$L12","16",{}]],"error":null,"digest":"$undefined"}
e:"$9:metadata"
