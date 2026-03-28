import { storyblokEditable } from "@storyblok/react";
import Heading from "../Heading";
import IconifyIcon from "../IconifyIcon";


export default function IconTextFeatured({ blok }) {
  const { icon, heading, text } = blok;

  return (
    <div {...storyblokEditable(blok)} className="text-left">
      <div className="flex items-center space-x-4">
        <div className="pt-3 pb-2 px-3 rounded-lg box">
          {icon.icon && (<IconifyIcon blok={icon} size="w-6 h-6" />)}
        </div>

        {heading && (<Heading title={heading} variant="card" as="h3" />)}
      </div>

      {text && (
        <p className="pl-16">{text}</p>
      )}
    </div>
  );
}
