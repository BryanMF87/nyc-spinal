import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Heading from "./Heading";

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
        <Heading title={heading} variant="section" as="h2" />
      )}

      {text && (
        <p className={`${layoutStyle.textWidth} text-lg mt-4 mb-8`}>
          {text}
        </p>
      )}

      {buttons?.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
}
