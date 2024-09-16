import StoryblokClient from "storyblok-js-client";

const accessToken = process.env.NODE_ENV === "production"
  ? process.env.NEXT_PUBLIC_PRODUCTION_STORYBLOK_TOKEN
  : process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN;

const Storyblok = new StoryblokClient({ accessToken });

const getVersion = () => process.env.NODE_ENV === "production" ? "published" : "draft";

const fetchFromStoryblok = async (params) => {
  try {
    const res = await Storyblok.get("cdn/stories", params);
    if (!res.data || !res.data.stories) {
      throw new Error('No stories found in response');
    }
    return res.data.stories;
  } catch (error) {
    console.error('Error fetching from Storyblok:', error.message);
    return [];
  }
};

export const fetchProducts = async () => {
  const params = {
    starts_with: "product/",
    version: getVersion(),
    token: accessToken,
    cv: new Date().getTime(),
  };
  return await fetchFromStoryblok(params);
};

export const fetchProductBySlug = async (slug) => {
  const params = {
    version: getVersion(),
    token: accessToken,
    cv: new Date().getTime(),
  };
  try {
    const res = await Storyblok.get(`cdn/stories/product/${slug}`, params);
    if (!res.data || !res.data.story) {
      throw new Error('No story found in response');
    }
    return res.data.story;
  } catch (error) {
    console.error(`Error fetching product by slug (${slug}):`, error.message);
    return null;
  }
};

export const fetchProductsByCategory = async (slug) => {
  const params = {
    starts_with: 'product/',
    version: getVersion(),
    token: accessToken,
    cv: new Date().getTime(),
  };
  const products = await fetchFromStoryblok(params);
  console.log('Fetched Products for Category:', products);
  const filteredProducts = products.filter(product => product.content.categories?.includes(slug));
  console.log('Filtered Products:', filteredProducts);
  return filteredProducts;
};

export const fetchNewestProducts = async (limit = 3) => {
  const params = {
    starts_with: "product/",
    version: getVersion(),
    token: accessToken,
    cv: new Date().getTime(),
    per_page: limit,
    sort_by: "created_at:desc",
  };
  return await fetchFromStoryblok(params);
};

export const fetchHomePageContent = async () => {
  const params = {
    version: getVersion(),
    token: accessToken,
    cv: new Date().getTime(),
  };
  try {
    const res = await Storyblok.get("cdn/stories/products", params);
    if (!res.data || !res.data.story) {
      throw new Error('No story found in response');
    }
    console.log('Fetched Home Page Content:', res.data.story.content);
    return res.data.story.content;
  } catch (error) {
    console.error('Error fetching home page content:', error.message);
    return null;
  }
};

export const fetchAllRoutes = async () => {
    const params = {
        version: getVersion(),
        token: accessToken,
        cv: new Date().getTime(),
    };
    try {
        const res = await Storyblok.get("cdn/stories", params);
        if (!res.data || !res.data.stories) {
            throw new Error('No stories found in response');
        }
        return res.data.stories.map(story => ({ path: `/${story.full_slug}` }));
    } catch (error) {
        console.error('Error fetching routes from Storyblok:', error.message);
        return [];
    }
};