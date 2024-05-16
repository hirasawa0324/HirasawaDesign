import { client } from "../../libs/client";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import "../../app/globals.css";
import Sidebar from "../../components/Sidebar";
import { AiOutlineClockCircle, AiOutlineTags, AiOutlineUser } from "react-icons/ai";
import { formatRichText, formatDate } from '@/libs/utils';
import ShareButtons from "../../components/ShareButtons";
import styles from './index.module.css';
import { differenceInCalendarYears, parseISO } from 'date-fns';
import Image from "next/image";

export default function BlogId({ blog }) {
  const yearsSinceUpdate = differenceInCalendarYears(new Date(), parseISO(blog.updatedAt));

  return (
    <main>
      <Navigation />
      <div className="grid grid-cols-4 mx-auto max-w-5xl p-4 gap-12 ">
        <div className="col-span-3">
          {yearsSinceUpdate >= 1 && (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-5" role="alert">
              <p>この記事は公開後、1年以上経過しています。情報が古い可能性がありますので、ご注意ください。</p>
            </div>
          )}
          <Image
            className="rounded-md"
            src={blog.eyecatch.url}
            alt={blog.title}
            width={600}
            height={337}
          />
          <h1 className="font-bold text-3xl mt-12 mb-4">{blog.title}</h1>
          <div className="flex mb-3 gap-3">
            <p className="bg-gray-200 rounded-md px-2 py-0 w-fit">{blog.category.name}</p>
            <div className="flex items-center gap-1">
              <AiOutlineTags />
              <p>{blog.tags.map(tag => `#${tag.name}`).join(', ')}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <AiOutlineClockCircle />
              <p>{formatDate(blog.createdAt)}</p>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineUser />
            </div>
          </div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: `${formatRichText(blog.content)}` }}
          />
          <ShareButtons title={blog.title} url={`https://hirasawa-design.vercel.app/blog/${blog.id}`} />
        </div>
        <div className="col-span-1">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};
