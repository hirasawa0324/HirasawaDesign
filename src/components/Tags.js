import React, { useEffect, useState } from 'react'
import { getTags } from '../libs/client'
import { AiOutlineTags } from 'react-icons/ai'

const Tags = () => {
    const [tags, setTags] = useState([])

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const tagsData = await getTags();
                setTags(tagsData.contents)
            } catch (error) {
                console.error("Failed to fetch tags:", error)                
            }
        };
        fetchTags();
    },[])

    return (
        <div className='mb-12'>
            <h3 className='px-3 py-1 mt-4 mb-1 rounded-sm bg-gray-100 font-bold text-gray-800'>タグ</h3>
            <div className='flex flex-wrap'>
                {tags.map((tag) => (
                    <p key={tag.id} className='hover:opacity-70 text-xs p-2 cursor-pointer flex items-center gap-1'>
                        <AiOutlineTags />
                        {tag.name}
                    </p>
                ))}
            </div>
        </div>
    )
}


export default Tags