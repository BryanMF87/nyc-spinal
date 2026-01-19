import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

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
        {heading && (<h2 className="mb-6">{heading}</h2>)}

        {/* Body block */}
        <div>
          {body?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
    </div>
  );
}
