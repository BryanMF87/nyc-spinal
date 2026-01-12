import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const colSpanClasses = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
  9: "md:col-span-9",
  10: "md:col-span-10",
  11: "md:col-span-11",
  12: "md:col-span-12",
};

export default function Column({ blok, colCount }) {
  const width = parseInt(blok.width, 10);
  const span = width || Math.floor(12 / colCount);
  const colClass = colSpanClasses[span] || "md:col-span-12";

  return (
    <div
      {...storyblokEditable(blok)}
      className={`col-span-12 grid gap-8 ${colClass}`}
    >
      {blok.content?.map((nested) => (
        <StoryblokComponent blok={nested} key={nested._uid} />
      ))}
    </div>
  );
}
