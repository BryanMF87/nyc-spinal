
export default function Heading({ blok }) {

  const {
    title,
    h_tag,
    color,
    variant = 'default',
  } = blok

  const variants = {
    default: '',
    'section hero': 'text-3xl md:text-5xl'
  }
  const Tag = `${h_tag || 'h3'}`;

  return (
    <Tag className={`${color} ${variants[variant]}`}>
      {title}
    </Tag>
  );
}