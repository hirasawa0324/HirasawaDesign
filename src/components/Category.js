// components/Category.js
import React, { useEffect, useState } from 'react';
import { getCategories } from '../libs/client';

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData.contents);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className='mb-12'>
      <h3 className='px-3 py-2 mt-4 mb-1 rounded-sm bg-gray-100 font-bold  text-gray-800'>カテゴリー</h3>
      <ul>
        {categories.map((category) => (
          <li 
          className='text-sm p-2 border-b hover:opacity-50 border-gray-100 cursor-pointer '
          key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
