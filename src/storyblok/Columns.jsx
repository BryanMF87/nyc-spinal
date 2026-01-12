import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

export default function Columns({ blok }) {

  return (
    <div {...storyblokEditable(blok)} className={`grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-${blok.columns.length}`}>
      {blok.columns.map((column) => {
        return (
          <div key={column._uid} className={`w-full`}>
            {column.content?.map((nestedBlock) => (
              <StoryblokComponent blok={nestedBlock} key={nestedBlock._uid} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
