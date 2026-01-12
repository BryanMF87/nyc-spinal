import { storyblokEditable } from '@storyblok/react';
import { render } from 'storyblok-rich-text-react-renderer';

export default function HeroBanner({ blok }) {
  const opacityClass = `opacity-${blok.opacity}`;

  return (
    <div {...storyblokEditable(blok)} className="relative">
        <div className="relative bg-gradient-to-r from-[#003666] to-[#0062B1]">
          <img
            src={blok.image.filename}
            alt={blok.image.alt || ''}
            className={`absolute w-full h-full object-cover ${opacityClass}`}
          />

          {/* Content */}
          <div className="darkmode relative max-w-6xl mx-auto py-24 px-6 flex items-center">
            <div className="max-w-3xl text-white">
              <div className="prose prose-invert">
                {blok.text ? render(blok.text) : null}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
