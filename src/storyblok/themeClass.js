
// Design tokens through tailwind.config.js
// System color system lives in globals.css

export function getThemeClass(background) {
  const darkBackgrounds = [
    "bg-primary",
    "bg-gradient",
    "bg-accent",
  ];

  const theme = darkBackgrounds.includes(background)
    ? "theme-dark"
    : "theme-light";

  const surface = background?.replace("bg-", "surface-");

  return `${theme} ${surface}`;
}


/* Example 1 - section

<section
  className={`${background_color} ${getThemeClass(background_color)}`}
>
  {renderBloks(blok.body)}
</section>

*/


/* Example 2 - card

<div
  {...storyblokEditable(blok)}
  className={`${background_color} ${getThemeClass(background_color)} p-6 rounded-2xl`}
>

*/