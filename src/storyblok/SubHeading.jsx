import { storyblokEditable } from "@storyblok/react";

export default function SubHeading({ blok }) {

  const {
    title,
    size,
    color,
  } = blok

  const sizeClass = {
    sm: 'text-base',
    md: 'text-base md:text-lg',
    lg: 'text-lg md:text-2xl',
    xl: 'text-xl md:text-3xl'
  }

  return <span {...storyblokEditable(blok)} className={`${sizeClass[size]} ${color}`}>{title}</span>
}