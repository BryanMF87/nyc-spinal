import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

export default function HeroBanner({ blok }) {

  const opacityClass = `opacity-${blok.opacity}`;

  return (
    <div {...storyblokEditable(blok)} className="relative">
        <div className="relative bg-gradient">
          <img
            src={blok.image.filename}
            alt={blok.image.alt || ''}
            className={`absolute w-full h-full object-cover ${opacityClass}`}
          />

          {/* Content */}
          <div className="relative max-w-6xl mx-auto py-24 px-6 flex items-center">
            <div className="max-w-3xl flex flex-col gap-4">
                {blok.body?.map((nestedBlok) => (
                  <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
            </div>
          </div>
        </div>
    </div>
  );
}
