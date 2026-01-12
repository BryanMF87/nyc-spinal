import { storyblokEditable } from '@storyblok/react';

export default function Banner({ blok }) {

  return (
    <div {...storyblokEditable(blok)}>

      {blok.image?.filename ? (

        <div className="relative bg-gradient-to-r from-[#003666] to-[#0062B1]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
            <img
              src={`${blok.image.filename}`}
              alt={`${blok.image.alt}` || ''}
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative h-full max-w-6xl mx-auto py-12 px-4 flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                {blok.headline}
              </h1>
              <p className="text-2xl text-sky-100">{blok.subheadline}</p>
            </div>
          </div>
        </div>

      ) : (

        <div className="relative bg-gradient-to-r from-[#003666] to-[#0062B1]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#003666] to-[#0062B1]" />
          </div>
          <div className="relative h-full max-w-6xl mx-auto py-12 px-4 flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {blok.headline}
              </h1>
              <p className="text-xl text-blue-100">{blok.subheadline}</p>
            </div>
          </div>
        </div>

      )}

    </div>
  );
}
