import SEO from "./SEO";
import { useLocation } from "react-router-dom";
import { useStoryblok, StoryblokComponent } from '@storyblok/react';

// used for resolving Storyblok relations
// 'storyblok_component.componet_target_field'
const RELATIONS = [
    'services_grid.services',
    'conditions_page.conditions',
    'procedures_page.procedures',
];

// storyblok page loader
function StoryblokContent() {
  const location = useLocation(); // <-- track route changes
  const slug = location.pathname === "/" ? "home" : location.pathname.slice(1); // remove leading "/"
  
  const story = useStoryblok(slug, { 
    version: "draft", 
    resolve_relations: RELATIONS.join(','),
  });

  if (!story || !story.content) {
    return <div className="text-center text-2xl font-medium text-gray-700 py-20">Loading...</div>;
  }

  // Grab SEO blok if it exists, regardless of story type
  const seoBlok = story.content.seo?.[0];

  return (
    <>
      {seoBlok && <SEO blok={seoBlok} story={story} />}
      <StoryblokComponent blok={story.content} />
    </>
  )
}

export default StoryblokContent;