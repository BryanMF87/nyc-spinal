import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

export default function Grid({ blok }) {

  const {
    columns_mobile,
    columns_tablet,
    columns_desktop,
    gap,
    items
  } = blok;

  const getGridClasses = () => {
    const classes = [
      `grid-cols-${columns_mobile}`,
      `md:grid-cols-${columns_tablet}`,
      `lg:grid-cols-${columns_desktop}`,
    ];
    return classes.join(" ");
  };


  const gapClass = gap || "gap-6";

  return (
    <div
      {...storyblokEditable(blok)}
      className={`w-full grid items-stretch ${getGridClasses()} ${gapClass}`}
    >
        {items?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
  );
}
