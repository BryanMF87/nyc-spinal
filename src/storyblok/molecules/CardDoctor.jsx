import { StoryblokComponent } from "@storyblok/react";

export default function DoctorCardSimple({ blok }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      
      {/* Doctor Image */}
      {blok.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.image.alt || blok.title || "Doctor image"}
          className="w-full h-92 object-cover object-top"
        />
      )}

      {/* Doctor Info */}
      <div className="p-6 text-left">
        <h3 className="text-xl font-bold text-[#003666] mb-2">{blok.name}</h3>
        <p className="text-gray-600">{blok.title}</p>
      </div>

      {/* Social Icons */}
      {blok.socials?.length > 0 && (
        <div className="flex gap-3 px-6 pb-6">
          {blok.socials.map((socialBlok) => (
            <StoryblokComponent
              blok={socialBlok}
              key={socialBlok._uid}
            />
          ))}
        </div>
      )}
    </div>
  );
}
