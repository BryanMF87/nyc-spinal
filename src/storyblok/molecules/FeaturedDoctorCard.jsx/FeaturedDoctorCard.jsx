import { storyblokEditable } from "@storyblok/react";

import FeaturedDoctorCardFull from "./Full";
import FeaturedDoctorCardOverlay from "./Overlay";

const FeaturedDoctorCard = ({ blok }) => {
  const {
    variant = "full",
    image,
    name,
    title,
    specialty,
    description,
    buttons = [],
  } = blok;

  const sharedProps = {
    image,
    name,
    title,
    specialty,
    description,
    buttons,
  };

  return (
    <div {...storyblokEditable(blok)}>
      {variant === "overlay" ? (
        <FeaturedDoctorCardOverlay {...sharedProps} />
      ) : (
        <FeaturedDoctorCardFull {...sharedProps} />
      )}
    </div>
  );
};

export default FeaturedDoctorCard;
