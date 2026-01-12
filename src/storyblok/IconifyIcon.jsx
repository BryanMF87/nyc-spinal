import { Icon } from "@iconify/react/dist/iconify.js";
import { storyblokEditable } from "@storyblok/react";

const IconifyIcon = ({ blok }) => {
  if (!blok) return null;

  const {
    color = "",
    size = "",
    icon,
  } = blok;

  if (!icon?.icon) return null;

  return (
    <div
      {...storyblokEditable(blok)}
      className={`${color} ${size}`}
    >
      <Icon icon={blok.icon.icon}/>
    </div>
  );
};

export default IconifyIcon;
