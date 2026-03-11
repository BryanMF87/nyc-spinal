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

  const renderBloks = (bloks) =>
    bloks?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ));

  const Heading = renderBloks(heading);
  const Body = renderBloks(body);

  const Icon = icon?.[0] && (
    <IconifyIcon blok={icon[0]} size={layout === "stack icon" ? "h-8 w-auto" : "h-6 w-6"} />
  );

  return (
    <div
      {...storyblokEditable(blok)}
      className={`${background_color} ${shadowClass} p-6 rounded-2xl space-y-4`}
    >
      {layout === "stack icon" ? (
        <>
          {Icon && <div className="w-fit">{Icon}</div>}
          {Heading}
          <div className="space-y-4">{Body}</div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2">
            {Icon}
            {Heading}
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