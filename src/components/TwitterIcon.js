import React from 'react';
import Link from 'next/link';
import { FaTwitter } from 'react-icons/fa';

const TwitterIcon = ({ twitterHandle }) => {
    return (
        <Link href={`${twitterHandle}`} legacyBehavior>
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-125"
            >
                <FaTwitter
                    size={40}
                    className="text-blue-500 hover:text-blue-400 transition-colors duration-300 animate-bounce"
                />
            </a>
        </Link>
    );
};

export default TwitterIcon;