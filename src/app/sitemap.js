import { fetchAllRoutes } from "./lib/storyblok"; // Adjust the import path as needed

export default async function Sitemap() {
    const routes = await fetchAllRoutes(); // Fetch all routes from your CMS or database

    const sitemap = routes.map(route => ({
        url: `https://webb23-cms-boilerplate-jh.vercel.app${route.path}`,
        lastModified: new Date().toISOString(),
    }));

    return sitemap;
}