import { render } from "storyblok-rich-text-react-renderer";

const RichText = ({ blok }) => {

  const {
    max_width,
    text_align
  } = blok;

  const widthOptions = {
    none: "max-w-none",
    sm: "max-w-xl",
    md: "max-w-2xl",
    lg: "max-w-4xl",
  };

  const widthClass = widthOptions[max_width] || "max-w-none";

   const alignClass =
    text_align === "text-center"
      ? "text-center mx-auto"
      : text_align || "text-left";

  return (
    <div className={`richtext space-y-4 ${alignClass} ${widthClass}`}>
      {render(blok.text)}
    </div>
  );
};

export default RichText;
