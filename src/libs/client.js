// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

export const getCategories = async () => {
    try {
        const data = await client.get({ endpoint: "categories" });
        return data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
};


export const getTags= async () => {
    try {
        const data = await client.get({ endpoint: "tags" });
        return data;
    } catch (error) {
        console.error("Error fetching tags:", error);
        return [];
    }
};

// ブログデータを取得する関数を追加
export const getBlogs = async () => {
    try {
        const data = await client.get({ endpoint: "blogs" });
        return data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
};