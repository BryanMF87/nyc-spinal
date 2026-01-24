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
        <div className={`px-6 py-4 bg-sky-100 flex flex-col gap-4`}>
            {body?.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
      )}
    </div>
)}