import { storyblokEditable, StoryblokComponent } from "@storyblok/react";


export default function Layout2Columns ({ blok }) {

    const {
        left_column,
        left_column_spacing,
        right_column,
        right_column_spacing,
        ratio,
        gap,
        reverse_column,
    } = blok;

    const spacingClasses = {
        none: "",
        sm: "space-y-4",
        md: "space-y-6",
        lg: "space-y-10",
    };

    const gapClasses = {
        none: "gap-0",
        sm: "gap-6",
        md: "gap-10",
        lg: "gap-12",
    };

    const ratioClasses = {
    "50/50": "lg:grid-cols-2",
    "60/40": "lg:grid-cols-[6fr_4fr]",
    "70/30": "lg:grid-cols-[7fr_3fr]",
    };

  return (
    <div
      className={`
        grid
        grid-cols-1
        md:grid-cols-2
        ${ratioClasses[ratio]}
        ${gapClasses[gap]}
      `}
      {...storyblokEditable(blok)}
    >
      <div className={`
          relative
          ${spacingClasses[left_column_spacing]}
          ${reverse_column ? "order-2 md:order-1" : ""}
        `}
      >
        {left_column?.map(child => (
          <StoryblokComponent blok={child} key={child._uid} />
        ))}
      </div>

      <div className={`
          relative
          ${spacingClasses[right_column_spacing]}
          ${reverse_column ? "order-1 md:order-2" : ""}
        `}
      >
        {right_column?.map(child => (
          <StoryblokComponent blok={child} key={child._uid} />
        ))}
      </div>
    </div>
  );
};
