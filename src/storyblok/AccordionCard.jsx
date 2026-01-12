import { useState } from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function AccordionCard({ blok }) {

  const [isOpen, setIsOpen] = useState(false);

  const {
    title,
    body,
  } = blok;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      {...storyblokEditable(blok)}
      className={`w-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300`}
    >
      {/* Header Button */}
      <button
        onClick={toggle}
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-sky-50 transition-colors duration-200"
      >
        <h3 className="text-xl font-semibold text-[#003666] mb-0">{title}</h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-[#0062B1]" />
        ) : (
          <ChevronDown className="w-6 h-6 text-[#0062B1]" />
        )}
      </button>

      {/* Expanded Content */}
      {isOpen && (
        <div className={`px-6 py-4 bg-sky-100`}>
            {body?.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
      )}
    </div>
)}

{/* <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
    <button class="w-full px-6 py-4 flex justify-between items-center hover:bg-sky-50 transition-colors duration-200">
        <h3 class="text-xl font-semibold text-[#003666]">Disc Replacement</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up w-6 h-6 text-[#0062B1]"><path d="m18 15-6-6-6 6"></path></svg>
    </button>
    <div class="px-6 py-4 bg-gradient-to-br from-sky-50 to-[#0062B1]/10" bis_skin_checked="1">
        <p class="text-gray-700 mb-6">At New York Center for Spinal Disorders, our Disc Replacement procedure offers an innovative alternative to traditional fusion surgery. Instead of removing the disc and fusing the adjacent vertebrae, our expert surgeons replace the degenerated disc with an artificial implant, preserving motion and providing a more natural range of movement. Our team at NYCSD is committed to restoring function and reducing pain through this advanced procedure. By maintaining spinal mobility while stabilizing the affected segment, disc replacement can offer significant improvements in quality of life.</p>
        <div class="flex justify-center" bis_skin_checked="1">
            <a class="px-6 py-3 bg-[#0062B1] text-white rounded-lg hover:bg-[#003666] transition duration-300 inline-flex items-center" href="/disc-replacement" data-discover="true">
                Learn more about Disc Replacement<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right ml-2 w-5 h-5"><path d="m9 18 6-6-6-6"></path></svg>
            </a>
        </div>
    </div>
</div> */}



          {/* Optional video
          {video?.filename && (
            <div className="rounded-xl overflow-hidden mb-6">
              <div className="flex justify-center bg-transparent">
                <video
                  src={video.filename}
                  controls
                  className="w-full h-96 object-cover bg-transparent"
                />
              </div>
              {video_caption && (
                <p className="text-center text-gray-600 py-2 text-sm">
                  {video_caption}
                </p>
              )}
            </div>
          )} */}