module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/twitter-image.jpeg.mjs { IMAGE => \"[project]/app/twitter-image.jpeg (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/twitter-image.jpeg.mjs { IMAGE => \"[project]/app/twitter-image.jpeg (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/wordpress.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WordPressAPIError",
    ()=>WordPressAPIError,
    "getAllAuthors",
    ()=>getAllAuthors,
    "getAllCategories",
    ()=>getAllCategories,
    "getAllPages",
    ()=>getAllPages,
    "getAllPostSlugs",
    ()=>getAllPostSlugs,
    "getAllPostsForSitemap",
    ()=>getAllPostsForSitemap,
    "getAllProjectSlugs",
    ()=>getAllProjectSlugs,
    "getAllTags",
    ()=>getAllTags,
    "getAuthorById",
    ()=>getAuthorById,
    "getAuthorBySlug",
    ()=>getAuthorBySlug,
    "getCategoryById",
    ()=>getCategoryById,
    "getCategoryBySlug",
    ()=>getCategoryBySlug,
    "getFeaturedMediaById",
    ()=>getFeaturedMediaById,
    "getPageById",
    ()=>getPageById,
    "getPageBySlug",
    ()=>getPageBySlug,
    "getPostById",
    ()=>getPostById,
    "getPostBySlug",
    ()=>getPostBySlug,
    "getPostsByAuthor",
    ()=>getPostsByAuthor,
    "getPostsByAuthorPaginated",
    ()=>getPostsByAuthorPaginated,
    "getPostsByAuthorSlug",
    ()=>getPostsByAuthorSlug,
    "getPostsByCategory",
    ()=>getPostsByCategory,
    "getPostsByCategoryPaginated",
    ()=>getPostsByCategoryPaginated,
    "getPostsByCategorySlug",
    ()=>getPostsByCategorySlug,
    "getPostsByTag",
    ()=>getPostsByTag,
    "getPostsByTagPaginated",
    ()=>getPostsByTagPaginated,
    "getPostsByTagSlug",
    ()=>getPostsByTagSlug,
    "getPostsPaginated",
    ()=>getPostsPaginated,
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "getProjectCategories",
    ()=>getProjectCategories,
    "getProjectImages",
    ()=>getProjectImages,
    "getProjectsPaginated",
    ()=>getProjectsPaginated,
    "getRecentPosts",
    ()=>getRecentPosts,
    "getTagById",
    ()=>getTagById,
    "getTagBySlug",
    ()=>getTagBySlug,
    "getTagsByPost",
    ()=>getTagsByPost,
    "searchAuthors",
    ()=>searchAuthors,
    "searchCategories",
    ()=>searchCategories,
    "searchTags",
    ()=>searchTags
]);
// lib/wordpress.ts
// Used to fetch data from a WordPress site using the WordPress REST API
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$query$2d$string$40$9$2e$3$2e$1$2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/query-string@9.3.1/node_modules/query-string/index.js [app-rsc] (ecmascript)");
;
// Single source of truth for WordPress configuration
const baseUrl = process.env.WORDPRESS_URL;
const isConfigured = Boolean(baseUrl);
if (!isConfigured) {
    console.warn("WORDPRESS_URL environment variable is not defined - WordPress features will be unavailable");
}
class WordPressAPIError extends Error {
    status;
    endpoint;
    constructor(message, status, endpoint){
        super(message), this.status = status, this.endpoint = endpoint;
        this.name = "WordPressAPIError";
    }
}
const USER_AGENT = "Next.js WordPress Client";
const CACHE_TTL = 60; // 1 min
// Core fetch - throws on error (for functions that require data)
async function wordpressFetch(path, query, tags = [
    "wordpress"
]) {
    if (!baseUrl) {
        throw new Error("WordPress URL not configured");
    }
    const url = `${baseUrl}${path}${query ? `?${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$query$2d$string$40$9$2e$3$2e$1$2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].stringify(query)}` : ""}`;
    const response = await fetch(url, {
        headers: {
            "User-Agent": USER_AGENT
        },
        next: {
            tags,
            revalidate: CACHE_TTL
        }
    });
    if (!response.ok) {
        throw new WordPressAPIError(`WordPress API request failed: ${response.statusText}`, response.status, url);
    }
    return response.json();
}
// Graceful fetch - returns fallback when WordPress unavailable or on error
async function wordpressFetchGraceful(path, fallback, query, tags = [
    "wordpress"
]) {
    if (!isConfigured) return fallback;
    try {
        return await wordpressFetch(path, query, tags);
    } catch  {
        console.warn(`WordPress fetch failed for ${path}`);
        return fallback;
    }
}
// Paginated fetch - returns response with headers
async function wordpressFetchPaginated(path, query, tags = [
    "wordpress"
]) {
    if (!baseUrl) {
        throw new Error("WordPress URL not configured");
    }
    const url = `${baseUrl}${path}${query ? `?${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$query$2d$string$40$9$2e$3$2e$1$2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].stringify(query)}` : ""}`;
    const response = await fetch(url, {
        headers: {
            "User-Agent": USER_AGENT
        },
        next: {
            tags,
            revalidate: CACHE_TTL
        }
    });
    if (!response.ok) {
        throw new WordPressAPIError(`WordPress API request failed: ${response.statusText}`, response.status, url);
    }
    return {
        data: await response.json(),
        headers: {
            total: parseInt(response.headers.get("X-WP-Total") || "0", 10),
            totalPages: parseInt(response.headers.get("X-WP-TotalPages") || "0", 10)
        }
    };
}
// Graceful paginated fetch - returns empty response when unavailable
async function wordpressFetchPaginatedGraceful(path, query, tags = [
    "wordpress"
]) {
    const emptyResponse = {
        data: [],
        headers: {
            total: 0,
            totalPages: 0
        }
    };
    if (!isConfigured) return emptyResponse;
    try {
        return await wordpressFetchPaginated(path, query, tags);
    } catch  {
        console.warn(`WordPress paginated fetch failed for ${path}`);
        return emptyResponse;
    }
}
async function getPostsPaginated(page = 1, perPage = 9, filterParams) {
    const query = {
        _embed: true,
        per_page: perPage,
        page
    };
    // Build cache tags based on filters
    const cacheTags = [
        "wordpress",
        "posts",
        `posts-page-${page}`
    ];
    if (filterParams?.search) {
        query.search = filterParams.search;
        cacheTags.push("posts-search");
    }
    if (filterParams?.author) {
        query.author = filterParams.author;
        cacheTags.push(`posts-author-${filterParams.author}`);
    }
    if (filterParams?.tag) {
        query.tags = filterParams.tag;
        cacheTags.push(`posts-tag-${filterParams.tag}`);
    }
    if (filterParams?.category) {
        const category = await getCategoryBySlug(filterParams.category);
        if (category) {
            query.categories = category.id;
            cacheTags.push(`projects-category-${filterParams.category}`);
        }
    }
    return wordpressFetchPaginatedGraceful("/wp-json/wp/v2/posts", query, cacheTags);
}
async function getProjectsPaginated(page = 1, perPage = 9, filterParams) {
    const query = {
        _embed: true,
        per_page: perPage,
        page
    };
    const cacheTags = [
        "wordpress",
        "projects",
        `projects-page-${page}`
    ];
    if (filterParams?.search) {
        query.search = filterParams.search;
        cacheTags.push("projects-search");
    }
    if (filterParams?.category) {
        const category = await getCategoryBySlug(filterParams.category);
        if (category) {
            query.categories = category.id;
            cacheTags.push(`projects-category-${filterParams.category}`);
        }
    }
    return wordpressFetchPaginatedGraceful("/wp-json/wp/v2/projects", query, cacheTags);
}
async function getProjectBySlug(slug) {
    const projects = await wordpressFetchGraceful("/wp-json/wp/v2/projects", [], {
        slug,
        _embed: true
    });
    return projects[0];
}
async function getProjectImages(ids) {
    if (!ids.length) {
        return [];
    }
    const images = await wordpressFetchGraceful("/wp-json/wp/v2/media", [], {
        include: ids.join(","),
        per_page: 100
    }, [
        "wordpress",
        "project-images"
    ]);
    const imagesById = new Map(images.map((image)=>[
            image.id,
            image
        ]));
    return ids.map((id)=>imagesById.get(id)).filter((image)=>Boolean(image));
}
async function getRecentPosts(filterParams) {
    const query = {
        _embed: true,
        per_page: 100
    };
    if (filterParams?.search) query.search = filterParams.search;
    if (filterParams?.author) query.author = filterParams.author;
    if (filterParams?.tag) query.tags = filterParams.tag;
    if (filterParams?.category) query.categories = filterParams.category;
    return wordpressFetchGraceful("/wp-json/wp/v2/posts", [], query, [
        "wordpress",
        "posts"
    ]);
}
async function getPostById(id) {
    return wordpressFetch(`/wp-json/wp/v2/posts/${id}`);
}
async function getPostBySlug(slug) {
    const posts = await wordpressFetchGraceful("/wp-json/wp/v2/posts", [], {
        slug
    });
    return posts[0];
}
async function getAllCategories() {
    return wordpressFetchGraceful("/wp-json/wp/v2/categories", [], {
        per_page: 100
    }, [
        "wordpress",
        "categories"
    ]);
}
async function getCategoryById(id) {
    return wordpressFetch(`/wp-json/wp/v2/categories/${id}`);
}
async function getCategoryBySlug(slug) {
    return wordpressFetch("/wp-json/wp/v2/categories", {
        slug
    }).then((categories)=>categories[0]);
}
async function getPostsByCategory(categoryId) {
    return wordpressFetch("/wp-json/wp/v2/posts", {
        categories: categoryId
    });
}
async function getProjectCategories() {
    const projects = await wordpressFetchGraceful("/wp-json/wp/v2/projects", [], {
        per_page: 100,
        _fields: "categories"
    }, [
        "wordpress",
        "projects",
        "project-categories"
    ]);
    const categoryIds = [
        ...new Set(projects.flatMap((project)=>project.categories))
    ];
    if (categoryIds.length === 0) {
        return [];
    }
    return wordpressFetchGraceful("/wp-json/wp/v2/categories", [], {
        include: categoryIds.join(","),
        per_page: 100
    }, [
        "wordpress",
        "categories",
        "project-categories"
    ]);
}
async function getPostsByTag(tagId) {
    return wordpressFetch("/wp-json/wp/v2/posts", {
        tags: tagId
    });
}
async function getTagsByPost(postId) {
    return wordpressFetch("/wp-json/wp/v2/tags", {
        post: postId
    });
}
async function getAllTags() {
    return wordpressFetchGraceful("/wp-json/wp/v2/tags", [], {
        per_page: 100
    }, [
        "wordpress",
        "tags"
    ]);
}
async function getTagById(id) {
    return wordpressFetch(`/wp-json/wp/v2/tags/${id}`);
}
async function getTagBySlug(slug) {
    return wordpressFetch("/wp-json/wp/v2/tags", {
        slug
    }).then((tags)=>tags[0]);
}
async function getAllPages() {
    return wordpressFetchGraceful("/wp-json/wp/v2/pages", [], {
        per_page: 100
    }, [
        "wordpress",
        "pages"
    ]);
}
async function getPageById(id) {
    return wordpressFetch(`/wp-json/wp/v2/pages/${id}`);
}
async function getPageBySlug(slug) {
    const pages = await wordpressFetchGraceful("/wp-json/wp/v2/pages", [], {
        slug,
        _embed: true
    });
    return pages[0];
}
async function getAllAuthors() {
    return wordpressFetchGraceful("/wp-json/wp/v2/users", [], {
        per_page: 100
    }, [
        "wordpress",
        "authors"
    ]);
}
async function getAuthorById(id) {
    return wordpressFetch(`/wp-json/wp/v2/users/${id}`);
}
async function getAuthorBySlug(slug) {
    return wordpressFetch("/wp-json/wp/v2/users", {
        slug
    }).then((users)=>users[0]);
}
async function getPostsByAuthor(authorId) {
    return wordpressFetch("/wp-json/wp/v2/posts", {
        author: authorId
    });
}
async function getPostsByAuthorSlug(authorSlug) {
    const author = await getAuthorBySlug(authorSlug);
    return wordpressFetch("/wp-json/wp/v2/posts", {
        author: author.id
    });
}
async function getPostsByCategorySlug(categorySlug) {
    const category = await getCategoryBySlug(categorySlug);
    if (!category) {
        throw new Error(`Category not found: ${categorySlug}`);
    }
    return wordpressFetch("/wp-json/wp/v2/posts", {
        categories: category.id
    });
}
async function getPostsByTagSlug(tagSlug) {
    const tag = await getTagBySlug(tagSlug);
    return wordpressFetch("/wp-json/wp/v2/posts", {
        tags: tag.id
    });
}
async function getFeaturedMediaById(id) {
    return wordpressFetch(`/wp-json/wp/v2/media/${id}`);
}
async function searchCategories(query) {
    return wordpressFetchGraceful("/wp-json/wp/v2/categories", [], {
        search: query,
        per_page: 100
    });
}
async function searchTags(query) {
    return wordpressFetchGraceful("/wp-json/wp/v2/tags", [], {
        search: query,
        per_page: 100
    });
}
async function searchAuthors(query) {
    return wordpressFetchGraceful("/wp-json/wp/v2/users", [], {
        search: query,
        per_page: 100
    });
}
async function getAllPostSlugs() {
    if (!isConfigured) return [];
    try {
        const allSlugs = [];
        let page = 1;
        let hasMore = true;
        while(hasMore){
            const response = await wordpressFetchPaginated("/wp-json/wp/v2/posts", {
                per_page: 100,
                page,
                _fields: "slug"
            });
            allSlugs.push(...response.data.map((post)=>({
                    slug: post.slug
                })));
            hasMore = page < response.headers.totalPages;
            page++;
        }
        return allSlugs;
    } catch  {
        console.warn("WordPress unavailable, skipping static generation for posts");
        return [];
    }
}
async function getAllProjectSlugs() {
    // Fetches ALL project slugs for generateStaticParams
    if (!isConfigured) return []; // Return empty array if WordPress is unavailable (allows build to succeed)
    try {
        const allSlugs = [];
        let page = 1;
        let hasMore = true;
        while(hasMore){
            const response = await wordpressFetchPaginated("/wp-json/wp/v2/projects", {
                per_page: 100,
                page,
                _fields: "slug"
            });
            allSlugs.push(...response.data.map((project)=>({
                    slug: project.slug
                })));
            hasMore = page < response.headers.totalPages;
            page++;
        }
        return allSlugs;
    } catch  {
        console.warn("WordPress unavailable, skipping static generation for projects");
        return [];
    }
}
async function getAllPostsForSitemap() {
    if (!isConfigured) return [];
    try {
        const allPosts = [];
        let page = 1;
        let hasMore = true;
        while(hasMore){
            const response = await wordpressFetchPaginated("/wp-json/wp/v2/posts", {
                per_page: 100,
                page,
                _fields: "slug,modified"
            });
            allPosts.push(...response.data.map((post)=>({
                    slug: post.slug,
                    modified: post.modified
                })));
            hasMore = page < response.headers.totalPages;
            page++;
        }
        return allPosts;
    } catch  {
        console.warn("WordPress unavailable, skipping sitemap generation");
        return [];
    }
}
async function getPostsByCategoryPaginated(categoryId, page = 1, perPage = 9) {
    return wordpressFetchPaginatedGraceful("/wp-json/wp/v2/posts", {
        _embed: true,
        per_page: perPage,
        page,
        categories: categoryId
    });
}
async function getPostsByTagPaginated(tagId, page = 1, perPage = 9) {
    return wordpressFetchPaginatedGraceful("/wp-json/wp/v2/posts", {
        _embed: true,
        per_page: perPage,
        page,
        tags: tagId
    });
}
async function getPostsByAuthorPaginated(authorId, page = 1, perPage = 9) {
    return wordpressFetchPaginatedGraceful("/wp-json/wp/v2/posts", {
        _embed: true,
        per_page: perPage,
        page,
        author: authorId
    });
}
;
}),
"[project]/lib/metadata.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateContentMetadata",
    ()=>generateContentMetadata,
    "stripHtml",
    ()=>stripHtml,
    "truncateHtml",
    ()=>truncateHtml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site.config.ts [app-rsc] (ecmascript)");
;
function generateContentMetadata({ title, description, slug, basePath, url }) {
    const ogUrl = new URL(`${__TURBOPACK__imported__module__$5b$project$5d2f$site$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].site_domain}/api/og`);
    ogUrl.searchParams.append("title", title);
    ogUrl.searchParams.append("description", description);
    const contentUrl = url ?? `${__TURBOPACK__imported__module__$5b$project$5d2f$site$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].site_domain}/${basePath}/${slug}`;
    return {
        title,
        description,
        alternates: {
            canonical: contentUrl
        },
        openGraph: {
            title,
            description,
            type: "article",
            url: contentUrl,
            images: [
                {
                    url: ogUrl.toString(),
                    width: 1200,
                    height: 630,
                    alt: title
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [
                ogUrl.toString()
            ]
        }
    };
}
const namedEntities = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: " ",
    ndash: "–",
    mdash: "—",
    hellip: "…",
    lsquo: "\u2018",
    rsquo: "\u2019",
    ldquo: "\u201c",
    rdquo: "\u201d"
};
function decodeHtmlEntities(text) {
    return text.replace(/&#(\d+);/g, (_, dec)=>String.fromCharCode(parseInt(dec, 10))).replace(/&#x([0-9a-fA-F]+);/g, (_, hex)=>String.fromCharCode(parseInt(hex, 16))).replace(/&([a-zA-Z]+);/g, (match, name)=>namedEntities[name] ?? match);
}
function stripHtml(html) {
    return decodeHtmlEntities(html.replace(/<[^>]*>/g, "")).trim();
}
function truncateHtml(html, maxWords) {
    const text = decodeHtmlEntities(html.replace(/<[^>]*>/g, "")).trim();
    const words = text.split(/\s+/);
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
}
}),
"[project]/components/pageHeader.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$craft$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/craft.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/metadata.ts [app-rsc] (ecmascript)");
;
;
;
;
function PageHeader({ title = "", subtitle = "", imgSrc = "", alt = "Header Image", textAlign = "center" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "relative bg-primary py-24 lg:py-32 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    imgSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: imgSrc,
                        className: "h-full w-full object-cover",
                        fill: true,
                        priority: true,
                        alt: alt
                    }, void 0, false, {
                        fileName: "[project]/components/pageHeader.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/40"
                    }, void 0, false, {
                        fileName: "[project]/components/pageHeader.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pageHeader.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$craft$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
                className: "relative z-10 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `max-w-3xl ${textAlign === "left" ? "mr-auto text-left" : textAlign === "right" ? "ml-auto text-right" : "mx-auto text-center"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: `text-balance font-serif text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl max-w-3xl`,
                            style: {
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/pageHeader.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 text-pretty text-lg leading-relaxed text-white/90 lg:text-xl",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripHtml"])(subtitle)
                        }, void 0, false, {
                            fileName: "[project]/components/pageHeader.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pageHeader.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pageHeader.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pageHeader.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$craft$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/craft.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$wordpress$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/wordpress.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/metadata.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$site$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/site.config.ts [app-rsc] (ecmascript)");
// Custom Components
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pageHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/pageHeader.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function generateMetadata({ params }) {
    const { slug } = await params;
    const page = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$wordpress$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPageBySlug"])(slug);
    if (!page) {
        return {};
    }
    const description = page.excerpt?.rendered ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripHtml"])(page.excerpt.rendered) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripHtml"])(page.content.rendered).slice(0, 200) + "...";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateContentMetadata"])({
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripHtml"])(page.title.rendered),
        description,
        url: `${__TURBOPACK__imported__module__$5b$project$5d2f$site$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].site_domain}/${page.slug}`
    });
}
async function Page({ params }) {
    const { slug } = await params;
    const page = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$wordpress$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPageBySlug"])(slug);
    if (!page) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const featuredMedia = page._embedded?.["wp:featuredmedia"]?.[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            featuredMedia ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pageHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                title: page.title.rendered,
                imgSrc: featuredMedia.source_url,
                alt: page.title.rendered,
                textAlign: "left"
            }, void 0, false, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$craft$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
                className: "pb-0 md:pb-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        dangerouslySetInnerHTML: {
                            __html: page.title.rendered
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/[slug]/page.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$craft$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
                className: `${featuredMedia ? "pt-4 md:pt-4" : "pt-0 md:pt-0"} min-h-screen`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$craft$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$craft$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Article"], {
                        dangerouslySetInnerHTML: {
                            __html: page.content.rendered
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/[slug]/page.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cd3c1247._.js.map