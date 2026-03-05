
// export default function Heading({ blok }) {

//   const {
//     title,
//     h_tag,
//     color,
//     variant = 'default',
//   } = blok

//   const variants = {
//     default: '',
//     'section hero': 'text-3xl md:text-5xl'
//   }
//   const Tag = `${h_tag || 'h3'}`;

//   return (
//     <Tag className={`${color} ${variants[variant]}`}>
//       {title}
//     </Tag>
//   );
// }




import { storyblokEditable } from "@storyblok/react";

/* Semantic level is controlled by the parent component */

export default function Headline({
  blok,
  as = "h2",
}) {

  const { title, variant = "section", color } = blok;

  const Tag = as;

  const variants = {
    "page-hero": "text-4xl font-bold leading-[135%] md:text-6xl md:leading-[125%]",
    "section-hero": "text-3xl font-bold leading-[135%] md:text-5xl md:leading-[125%]",
    "section": "text-2xl font-semibold leading-[135%] md:text-3xl md:leading-[125%]",
    "card": "text-xl font-semibold leading-[135%] md:text-2xl md:leading-[125%]",
    "label": "text-base font-semibold leading-[135%] md:text-lg md:leading-[125%]",
  };

  return (
    <Tag
      {...storyblokEditable(blok)}
      className={`${variants[variant]} ${color}`}
    >
      {title}
    </Tag>
  );
}
