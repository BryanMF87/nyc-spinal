import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { getThemeClass } from "./themeClass.js";
import IconifyIcon from "./IconifyIcon";
import Heading from "./Heading";

export function BasicCard({ blok }) {
  const {
    icon,
    heading,
    body,
    layout,
    background_color,
    shadow,
  } = blok;

  const shadowClass = shadow ? "shadow-lg" : "";
  
  const themeClass = getThemeClass(background_color);

  const Icon = icon?.[0] && (
    <IconifyIcon
      blok={icon[0]}
      size={layout === "stack icon" ? "h-8 w-auto" : "h-6 w-6"}
    />
  );

  const Body = body?.map((nestedBlok) => (
    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
  ));


  return (
    <div
      {...storyblokEditable(blok)}
      className={`${background_color} ${themeClass} ${shadowClass} p-6 rounded-2xl space-y-4`}
    >
      {layout === "stack icon" ? (
        <>
          {Icon && <div className="w-fit">{Icon}</div>}
          {heading && <Heading blok={heading} />}
          <div className="space-y-4">{Body}</div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2">
            {Icon}
            {heading && <Heading blok={heading} />}
          </div>

          {layout === "indent body" ? (
            <div className="pl-16 space-y-4">{Body}</div>
          ) : (
            <div className="space-y-4">{Body}</div>
          )}
        </>
      )}
    </div>
  );
}