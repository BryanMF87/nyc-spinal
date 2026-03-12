import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import HeadingSection from "./HeadingSection";

export default function FeatureBanner({ blok }) {
  const { headings = [], features } = blok;

  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-gradient rounded-3xl p-12 text-white theme-dark"
    >
      {headings.length > 0 && (
        <HeadingSection
          blok={{
            headings: headings,
            alignment: "center",
            gap: "lg",
          }}
        />
      )}

      {features?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature) => (
            <StoryblokComponent blok={feature} key={feature._uid} />
          ))}
        </div>
      )}
    </section>
  );
}