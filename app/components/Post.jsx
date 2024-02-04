import DeletePostButton from "./DeletePostButton";

export default async function Post({
  id,
  title,
  content,
  authorName,
  category = null,
}) {
  return (
    <div
      style={{ border: "1px solid white", padding: "15px", margin: "10px 0px" }}
    >
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
      {category ? <p>{category}</p> : null}
      <DeletePostButton postId={id} />
    </div>
  );
}
