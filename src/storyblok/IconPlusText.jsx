import { Icon } from "@iconify/react/dist/iconify.js";
import { render } from "storyblok-rich-text-react-renderer";

const IconPlusText = ({blok}) => {

    const {
        size,
        icon_box,
        gap,
        icon_color
    } = blok;

    const sizeOptions = {
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        xxl: "text-2xl",
        xxxl: "text-3xl",
    };

    const boxClass = icon_box 
        ? `p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-300` 
        : ""

    const sizeClass = sizeOptions[size];

    return (
        <div className={`flex items-center ${gap}`}>
            <div className={`${boxClass} shrink-0 flex items-center justify-center`}>
                <Icon 
                    icon={blok.icon.icon}
                    className={`${icon_color} ${sizeClass} mb-4`} 
                />
            </div>
            <div className={`${sizeClass} text-left`}>
                {render(blok.text)}
            </div>
        </div>
    )
};

export default IconPlusText;