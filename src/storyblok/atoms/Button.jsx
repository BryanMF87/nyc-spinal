import { storyblokEditable } from "@storyblok/react";
import { ChevronRight } from "lucide-react";

const Button = ({ blok }) => {
    
    const radiusOptions = {
        none: 'rounded-none',
        small: 'rounded-sm',
        medium: 'rounded-md',
        large: 'rounded-lg',
        xlarge: 'rounded-xl',
        full: 'rounded-full'
    }
    const borderRadius = radiusOptions[blok.borderRadius];

    const sizeOptions = {
        small: 'px-4 py-2',
        large: 'px-6 py-3'
    }
    const sizeClass = sizeOptions[blok.size] || 'px-6 py-3';


    const widthClass = blok.fullWidth ? "w-full" : "w-fit";

    const baseClasses = `bg-secondary text-white hover:bg-primary hover:text-white font-normal flex items-center justify-center gap-2 font-semibold transition duration-300 ease-in-out text-sm md:text-base`;

    const centerClass = blok.center ? "mx-auto" : "";

    // Normalize href depending on link type
    const getHref = () => {
        const link = blok.link;

        if (!link) return "#";

        switch (link.linktype) {
            case "url":
                return link.url || link.cached_url || "#";
            case "story":
                return "/" + link.cached_url;
            case "email":
                return `mailto:${link.email}`;
            case "asset":
                return link.cached_url || "#";
            default:
                return "#";
        }
    };

    const href = getHref();

    // Determine if it’s a link or a button
    const isClickableLink =
        blok.link?.linktype &&
        ["url", "story", "email", "asset"].includes(blok.link.linktype);

    return (
        <>
        {isClickableLink ? (
            <a
            {...storyblokEditable(blok)}
            href={href}
            target={blok.link?.target || "_self"}
            rel="noopener noreferrer"
            className={`${sizeClass} ${baseClasses} ${widthClass} ${centerClass} ${borderRadius}`}
            >
                {blok.text}
                {blok.arrow_icon ? (
                    <ChevronRight className="w-6 h-6" />
                ) : (
                    null
                )}
            </a>
        ) : (
            <button
            {...storyblokEditable(blok)}
            type="button"
            className={`${sizeClass} ${baseClasses} ${widthClass} ${centerClass} ${borderRadius}`}
            onClick={() => console.log("Button clicked")}
            >
                {blok.text}
            </button>
        )}
        </>
    );
};

export default Button;
