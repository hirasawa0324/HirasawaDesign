import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../app/globals.css";
import Link from "next/link";
import { client } from "../libs/client";
import { formatRichText, formatDate } from '@/libs/utils';
import { AiOutlineClockCircle } from "react-icons/ai";
import SearchField from "../components/SearchField";
import TagList from "../components/TagList";
import Pagination from "../components/Pagination";
import Image from "next/image";

const POSTS_PER_PAGE = 10;

export async function getServerSideProps(context) {
  const currentPage = parseInt(context.query.page || 1, 10);
  const offset = (currentPage - 1) * POSTS_PER_PAGE;

  const blogData = await client.get({
    endpoint: "blogs",
    queries: { offset, limit: POSTS_PER_PAGE }
  });
  const tagData = await client.get({
    endpoint: "tags",
  });

  const totalPages = Math.ceil(blogData.totalCount / POSTS_PER_PAGE);

  return {
    props: {
      posts: blogData.contents,
      tags: tagData.contents,
      currentPage,
      totalPages
    },
  };
}

function excerptRichText(richText, length = 30) {
  const cheerio = require('cheerio');
  const $ = cheerio.load(richText);
  let text = $.text().slice(0, length);

  if (text.length === length) {
    text += '...';
  }

  return formatRichText(`<p>${text}</p>`);
}

export default function BlogPage({ posts, tags, currentPage, totalPages }) {
  return (
    <>
      <Navigation />
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center content-center border-b border-gray-300">
          <SearchField />
          <TagList tags={tags} hasLink={true} />
        </div>

        <ul>
          {posts.map((post) => (
            <li key={post.id} className="p-5">
              <Link href={`/blog/${post.id}`} legacyBehavior>
                <a className="flex gap-8">
                <Image
                    className="rounded-xl"
                    src={post.eyecatch.url}
                    alt={post.title}
                    width={300}
                    height={200}
                    loading="lazy"
                  />

                  <div>
                    <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                    <p className="bg-gray-200 rounded-md px-2 py-1 w-fit mb-3">{post.category.name}</p>
                    <div className="flex items-center gap-2">
                      <AiOutlineClockCircle />
                      <p>{formatDate(post.createdAt)}</p>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
      <Footer />
    </>
  );
}
