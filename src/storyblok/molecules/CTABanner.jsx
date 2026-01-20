import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function CtaBanner({ blok }) {
  const {
    heading,
    text,
    buttons,
    background = "white",
    layout,
  } = blok;

  const layouts = {
    default: {
      alignment: "text-left",
      textWidth: "",
    },
    centered: {
      alignment: "text-center",
      textWidth: "max-w-3xl mx-auto",
    },
  }

  const layoutStyle = layouts[layout]

  return (
    <div
      {...storyblokEditable(blok)}
      className={`${background} ${layoutStyle.alignment} p-8 rounded-2xl`}
    >
      {heading && (
        <h2 className="mb-4">{heading}</h2>
      )}

      {text && (
        <p className={`${layoutStyle.textWidth} text-lg mb-8`}>
          {text}
        </p>
      )}

      {buttons?.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
}
