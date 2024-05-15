import Link from 'next/link';


// タグアイテム表示コンポーネント
export default function TagListItem({ tag, hasLink = true }) {
  if (hasLink) {
    return (
      <Link href={`/tags/${tag.id}`} className="bg-gray-100 px-2 py-1 text-[0.8rem] rounded-md whitespace-nowrap">
        #{tag.name}
      </Link>
    );
  }
  return <span className={styles.tag}>#{tag.name}</span>;
}
