import { Icon } from "@iconify/react/dist/iconify.js";

const IconifyIcon = ({ blok, size = "w-6 h-6" }) => {

  const {
    icon,
    text_color,
    box,
    box_color,
  } = blok;

  const boxClasses = box 
    ? `p-3 rounded-lg w-fit ${box_color}` 
    : ""

  return (
    <div className={`${boxClasses} shrink-0 inline-flex items-center justify-center`}>
      <Icon icon={icon} 
        className={`icon ${size} ${text_color} block`}
      />
    </div>
  )
};

export default IconifyIcon;
