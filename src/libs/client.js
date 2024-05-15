import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

export { client };

export const getCategories = async () => {
  try {
    const data = await client.get({ endpoint: 'categories' });
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const getTags = async () => {
  try {
    const data = await client.get({ endpoint: 'tags' });
    return data;
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
};

export const getBlogs = async () => {
  try {
    const data = await client.get({ endpoint: 'blogs' });
    return data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};
