import { Icon } from "@iconify/react/dist/iconify.js";

const IconifyIcon = ({ blok, size }) => {

const {
  icon,
  text_color,
  box,
  box_color,
} = blok;

  const iconClasses = [
    size,      // controlled by parent
    text_color,
    box ? "p-3 rounded-lg" : "",
    box ? box_color : "",
  ].filter(Boolean).join(" ");


   return <Icon icon={icon.icon} className={iconClasses}/>

};

export default IconifyIcon;
