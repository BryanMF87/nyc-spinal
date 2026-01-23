import IconTextSmall from "./IconTextSmall";
import IconTextLarge from "./IconTextLarge";
import IconTextFeatured from "./IconTextFeatured";

export default function IconText({ blok }) {
  const { variant = "large" } = blok;

  switch (variant) {
    case "featured":
      return <IconTextFeatured blok={blok} />;
    case "large":
      return <IconTextLarge blok={blok} />;
    case "small":
    default:
      return <IconTextSmall blok={blok} />;
  }
}
