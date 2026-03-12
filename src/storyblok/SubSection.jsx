import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import Heading from "./Heading";

export default function SubSection({ blok }) {

  const {
    heading,
    body,
  } = blok;


  return (
    <div
        {...storyblokEditable(blok)}
        className={`w-full text-left`}
    >
        {heading && (<Heading title={heading} variant="section" as="h2" />)}

        {/* Body block */}
        <div className="mt-6 flex flex-col gap-6"v>
          {body?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
    </div>
  );
}
