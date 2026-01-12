import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ChevronUp, ChevronDown } from "lucide-react";
import { StoryblokComponent } from "@storyblok/react";

const AccordionGroup = ({ blok }) => {
  const [activeId, setActiveId] = useState(blok.body[0]?._uid);

  const handleToggle = (id) => {
    // If clicking the already active item, close it. Otherwise, set as active.
    setActiveId((prev) => (prev === id ? null : id));
  };

  const gapOptions = {
    none: "gap-0",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-10",
    xl: "gap-12",
    default: "gap-8",
  };

  const gapClass = gapOptions[blok.spacing] || gapOptions.default;


  return (
    <div>
      <div className="flex flex-col gap-2.5 flex-wrap">
        {blok.body.map((item) => {
          const isActive = activeId === item._uid;
          return (
            <button
              key={item._uid}
              onClick={() => handleToggle(item._uid)}
              className={`flex justify-between items-center bg-white shadow-lg text-left p-4 rounded-lg font-semibold transition-colors duration-200 ${
                isActive ? "bg-sky-50" : ""
              }`}
            >
              <div className="flex gap-2 items-center">
                {item.icon?.icon && (
                  <Icon icon={item.icon.icon} className="text-[#0062B1] h-6 w-6" />
                )}
                <span className="text-lg font-semibold text-[#003666]">{item.title}</span>
              </div>

              {isActive ? (
                <ChevronUp className="w-6 h-6 text-[#0062B1]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-[#0062B1]" />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        {blok.body.map(
            (item) =>
            item._uid === activeId && (
                <div key={item._uid} className={`max-w-none flex flex-col ${gapClass}`}>
                {item.content?.map((nestedBlok) => (
                    <StoryblokComponent
                    blok={nestedBlok}
                    key={nestedBlok._uid}
                    />
                ))}
                </div>
            )
        )}
      </div>
    </div>
  );
};

export default AccordionGroup;
