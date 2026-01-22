export default function SubHeading({ blok }) {

  const {
    title,
    size,
    color = 'default',
  } = blok

  const sizeClass = {
    sm: 'text-base',
    md: 'text-base md:text-lg',
    lg: 'text-lg md:text-2xl',
  }

  return <p className={`${sizeClass[size]} ${color}`}>{title}</p>
}