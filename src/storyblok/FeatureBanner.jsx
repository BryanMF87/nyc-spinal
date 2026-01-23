import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function FeatureBanner({ blok }) {
  const {
    heading,
    subheading,
    features,
  } = blok;

  return (
    <section
      {...storyblokEditable(blok)}
      className={`bg-gradient rounded-3xl p-12 text-white`}
    >
      {/* Heading / Subheading */}
      <div className="text-center mb-12">
        {heading && (
          <h3 className="text-3xl font-bold mb-4">
            {heading}
          </h3>
        )}
        {subheading && (
          <p className="text-xl text-sky-100">
            {subheading}
          </p>
        )}
      </div>

      {features?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <StoryblokComponent blok={feature} key={feature._uid} />
          ))}
        </div>
      )}
    </section>
  );
}
