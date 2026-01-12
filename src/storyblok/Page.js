import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import SEO from "./SEO";

const Page = ({ blok, story }) => {
  const seoBlok = blok.seo?.[0];

  return (
    <div {...storyblokEditable(blok)}>
      {seoBlok && <SEO blok={seoBlok} story={story} />}

      {blok.body?.map((childBlok) => (
        <StoryblokComponent
          blok={childBlok}
          key={childBlok._uid}
        />
      ))}
    </div>
  );
};

export default Page;
