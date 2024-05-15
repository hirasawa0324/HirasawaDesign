// components/Pagination.js
import Link from 'next/link';

export default function Pagination({ currentPage, totalPages }) {
  const generatePageLinks = () => {
    let links = [];
    for (let i = 1; i <= totalPages; i++) {
      links.push(
        <Link href={`blog/?page=${i}`} key={i} legacyBehavior>
          <a
            className={`px-3 py-2 mx-1 rounded-md ${
              i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {i}
          </a>
        </Link>
      );
    }
    return links;
  };

  return <div className="flex justify-center my-4">{generatePageLinks()}</div>;
}
