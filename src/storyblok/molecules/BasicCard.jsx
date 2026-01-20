import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import IconifyIcon from "../atoms/IconifyIcon";

export function BasicCard({ blok }) {

  const {
    icon,
    heading,
    body,
    layout,
    background_color,
    shadow,
    variant,
  } = blok;

  const shadowClass = shadow ? 'shadow-lg' : '';

  const headingLevel = variant === "card" ? "h3" : "h2";
  const Tag = headingLevel || "h3";

  return (
    <>
      {layout === "default" && (
        <div
          {...storyblokEditable(blok)}
          className={`${background_color} ${shadowClass} text-left p-6 rounded-2xl flex flex-col gap-4`}
        >
          <div className="flex items-center gap-2">
            {icon?.[0] && (<IconifyIcon blok={icon[0]}  size={"h-6 w-6"} />)}
            {heading !== null && (<Tag>{heading}</Tag>)}
          </div>
          {body?.map((childBlok) => (
            <StoryblokComponent
              blok={childBlok}
              key={childBlok._uid}
            />
          ))}
        </div>
      )}

      {layout === "stack icon" && (
        <div
          {...storyblokEditable(blok)}
          className={`${background_color} ${shadowClass} text-left p-6 rounded-2xl flex flex-col gap-4`}
        >
          {icon?.[0] && (<IconifyIcon blok={icon[0]}  size={"h-8 w-8"} />)}
          {heading && (<Tag>{heading}</Tag>)}
          {body?.map((childBlok) => (
            <StoryblokComponent
              blok={childBlok}
              key={childBlok._uid}
            />
          ))}
        </div>
      )}

      {layout === "indent body" && (
        <div
          {...storyblokEditable(blok)}
          className={`${background_color} ${shadowClass} text-left p-6 rounded-2xl flex flex-col gap-4`}
        >
          {icon?.[0] && (<IconifyIcon blok={icon[0]}  size={"h-6 w-6"} />)}
          {heading && (<Tag>{heading}</Tag>)}
          {body?.map((childBlok) => (
            <StoryblokComponent
              blok={childBlok}
              key={childBlok._uid}
            />
          ))}
        </div>
      )}
    </>
  );
}