import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";


const HeadingSection = ({ blok }) => {
  const {
    headings = [],
    intro,
    alignment = "left",
    gap = "lg",
  } = blok;


  const alignmentClasses = {
    left: "text-left",
    center: "text-center max-w-4xl mx-auto",
  };

  const gapClass = {
    lg: "gap-8",
    md: "gap-6",
    sm: "gap-4"
  }


  return (
    <div {...storyblokEditable(blok)}>
      <div className={`${alignmentClasses[alignment]} flex flex-col ${gapClass[gap]}`}>
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
