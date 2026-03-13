import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { getThemeClass } from "./themeClass.js";
import IconifyIcon from "./IconifyIcon";
import Heading from "./Heading";


export default function SectionCard({ blok }) {
  const {
    icon,
    heading,
    body,
    layout,
    background_color,
    shadow,
  } = blok;

  const themeClass = getThemeClass(background_color);

  const shadowClass = shadow ? "shadow-lg" : "";

  const CardHeading = heading && (
    <Heading title={heading} as="h2" variant="section" />
  );

  const Icon = icon.icon && (
    <IconifyIcon
      blok={icon}
      size={layout === "stack icon" ? "h-10 w-auto" : "h-6 w-6"}
    />
  );

  const Body = body?.map((nestedBlok) => (
    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
  ));

  return (
    <>
      {/* Default layout */}
      {layout === "default" && (
        <div
          {...storyblokEditable(blok)}
          className={`${background_color} ${themeClass} ${shadowClass} p-6 rounded-2xl items-start flex flex-col gap-4`}
        >
          <div className="flex items-center gap-2">
            {Icon}
            {CardHeading}
          </div>
          {Body}
        </div>
      )}

      {/* Stacked icon layout */}
      {layout === "stack icon" && (
        <div
          {...storyblokEditable(blok)}
          className={`${background_color} ${themeClass} ${shadowClass} p-6 rounded-2xl flex flex-col items-start gap-2`}
        >
          {Icon}
          {CardHeading}
          {Body}
        </div>
      )}

      {/* Indent body layout */}
      {layout === "indent body" && (
        <div
          {...storyblokEditable(blok)}
          className={`${background_color} ${themeClass} ${shadowClass} p-6 rounded-2xl`}
        >
          <div className="flex items-center space-x-4">
            <div className="py-2 px-3 rounded-lg box">{Icon}</div>
            {CardHeading}
          </div>

          <div className="mt-2 pl-16">
            {Body}
          </div>
        </div>
      )}
    </>
  );
}