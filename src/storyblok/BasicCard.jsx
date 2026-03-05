import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import IconifyIcon from "./IconifyIcon";

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

  const CardHeading = heading && (
    <StoryblokComponent
      blok={{
        component: "heading",
        level: "h3",
        text: heading,
      }}
    />
  );

  return (
    <>
      {layout === "default" && (
        <div
          {...storyblokEditable(blok)}
          className={`${background_color} ${shadowClass} p-6 rounded-2xl flex flex-col gap-4`}
        >
          <div className="flex items-center gap-2">
            {icon?.[0] && <IconifyIcon blok={icon[0]} size="h-6 w-6" />}
            {CardHeading}
          </div>

          {body?.map((childBlok) => (
            <StoryblokComponent blok={childBlok} key={childBlok._uid} />
          ))}
        </div>
      )}

      {layout === "stack icon" && (
        <div
          {...storyblokEditable(blok)}
          className={`${background_color} ${shadowClass} p-6 rounded-2xl flex flex-col gap-2`}
        >
          {icon?.[0] && (
            <div className="w-fit">
              <IconifyIcon blok={icon[0]} size="h-8 w-auto" />
            </div>
          )}
          {CardHeading}
          {body?.map((childBlok) => (
            <StoryblokComponent blok={childBlok} key={childBlok._uid} />
          ))}
        </div>
      )}

      {layout === "indent body" && (
        <div
          {...storyblokEditable(blok)}
          className={`${background_color} ${shadowClass} p-6 rounded-2xl`}
        >
          <div className="flex items-center space-x-4">
            {icon?.[0] && <IconifyIcon blok={icon[0]} size="h-6 w-6" />}
            {CardHeading}
          </div>

          <div className="pl-16">
            {body?.map((childBlok) => (
              <StoryblokComponent blok={childBlok} key={childBlok._uid} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}