
export default function Heading({ blok }) {

  const {
    title,
    h_tag,
    color,
  } = blok

  const Tag = `${h_tag || "h3"}`;

  return (
    <Tag className={color}>
      {title}
    </Tag>
  );
}