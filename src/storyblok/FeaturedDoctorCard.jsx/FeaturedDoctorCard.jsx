import { storyblokEditable } from "@storyblok/react";

import FeaturedDoctorCardFull from "./Full";
import FeaturedDoctorCardOverlay from "./Overlay";

const FeaturedDoctorCard = ({ blok }) => {
  if (!blok) return null; // safety check

  return (
    <div {...storyblokEditable(blok)}>
      {blok.variant === "overlay" ? (
        <FeaturedDoctorCardOverlay blok={blok} />
      ) : (
        <FeaturedDoctorCardFull blok={blok} />
      )}
    </div>
  );
};

export default FeaturedDoctorCard;
