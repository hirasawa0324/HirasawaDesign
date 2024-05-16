import { FaFacebookF } from "react-icons/fa6";
import { SiHatenabookmark } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";


const ShareButtons = ({ title, url }) => {
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}%0A${encodedUrl}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    const hatenaUrl = `https://b.hatena.ne.jp/entry/s/?url=${encodedUrl}&btitle=${encodedTitle}`;

    return (
        <div className="bg-gray-100 p-5 text-center rounded-md my-12">
            <div className="">
                <p className="text-gray-800">記事をシェアする</p>
            </div>
            <div className="flex gap-5 mt-4 justify-center">
            <a href={twitterUrl} target="_blank" className="text-sm flex justify-center hover:opacity-80 items-center gap-2 rounded-md w-1/3 border px-8 py-1 border-[#000]" rel="noopener noreferrer" aria-label="Share on Twitter">
                <FaXTwitter size={20} />
                <span>ポストする</span>
            </a>
            <a href={facebookUrl} target="_blank" className="justify-center text-sm text-[#0866FF] hover:opacity-80 flex items-center w-1/3 gap-2 rounded-md border border-[#0866FF]  px-8 py-2" rel="noopener noreferrer" aria-label="Share on Facebook">
                <FaFacebookF  size={20} />
                <span>シェアする</span>
            </a>
            <a href={hatenaUrl} target="_blank" className="text-sm flex justify-center items-center gap-2 hover:opacity-80 rounded-md border px-8 py-2 w-1/3 border-[#00A4DE] text-[#00A4DE] " rel="noopener noreferrer" aria-label="Share on Hatena Bookmark">
                <SiHatenabookmark size={20} />
                <span>ブックマークする</span>
            </a>
            </div>
        </div>
    );
};

export default ShareButtons;
