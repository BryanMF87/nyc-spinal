import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

export default function Section({ blok }) {

  return (
    <section className={``}>
      <div
        {...storyblokEditable(blok)}
        className={`w-full `}
      >
        {blok.columns.map((col, idx) => (
          <StoryblokComponent
            blok={{ ...col, idx }}
            key={col._uid}
          />
        ))}
      </div>
    </section>
  );
}
