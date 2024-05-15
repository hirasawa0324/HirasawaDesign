// タグリスト表示コンポーネント
import TagListItem from "./TagListItem";
export default function TagList({ tags, hasLink = true }) {
  if (!tags) {
    return null;
  }
  return (
    <ul className="flex justify-center flex-wrap gap-2 my-6 pb-4">
      {tags.map((tag) => (
        <li key={tag.id}>
          <TagListItem tag={tag} hasLink={hasLink} />
        </li>
      ))}
    </ul>
  );
}