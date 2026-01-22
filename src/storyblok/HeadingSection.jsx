import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const alignmentClasses = {
  left: "text-left",
  center: "text-center max-w-4xl mx-auto",
};

const HeadingSection = ({ blok }) => {
  const {
    headings = [],
    intro,
    alignment = "left",
  } = blok;

  return (
    <div {...storyblokEditable(blok)}>
      <div className={`${alignmentClasses[alignment]} flex flex-col gap-8`}>
        {headings.map((heading) => (
          <StoryblokComponent
            blok={heading}
            key={heading._uid}
          />
        ))}

        {intro && (
          <div className="prose prose-lg max-w-none">
            {render(intro)}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeadingSection;
