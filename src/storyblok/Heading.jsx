
export default function Heading({ blok }) {

  if (!blok) return null;

  const {
    title,
    h_tag,
    size,
    weight,
    color,
    margin_bottom,
    align,
  } = blok;

  const tagOption = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
  }

  const Tag = tagOption[h_tag];

  const sizeClass = {
    default: "",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    x2: "text-2xl",
    x3: "text-3xl",
    x4: "text-4xl",
    x5: "text-5xl",
    x6: "text-6xl",
    x7: "text-7xl",
  };

  const weightClass = {
    bold: "font-bold",
    semibold: "font-semibold",
    regular: "font-normal",
    default: "",
  };

  const marginClass = {
    default: "mb-4",     // fallback default spacing
    none: "mb-0",        // no space
    xs: "mb-1",          // tiny spacing for very tight layouts
    sm: "mb-2",          // small spacing for small headings or tight components
    md: "mb-4",          // default spacing (good for most text)
    lg: "mb-6",          // large spacing for big headings
    xl: "mb-8",          // extra large spacing for hero headings
}

const alignClass = {
    left: "text-left",
    center: "text-center w-full mx-auto",
    right: "text-right"
}

  const classes=[
    sizeClass[size],
    weightClass[weight],
    color,
    marginClass[margin_bottom],
    alignClass[align]
  ];

  return (
    <Tag className={classes.filter(Boolean).join(" ")}>
        {title}
    </Tag>
  )
}
