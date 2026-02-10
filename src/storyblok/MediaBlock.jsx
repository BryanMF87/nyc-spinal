const MediaBlock = ({ blok }) => {
  const { image, video, height } = blok;

  // Default height if none selected
  const heightClassMap = {
    default: "",
    sm: "h-48",
    md: "h-64",
    lg: "h-80",
  };

  const heightClass = heightClassMap[height] || "h-64"; // default to md
  const roundedClass = "rounded-2xl"; // optional fixed rounding
  

  // Decide which media to show
  const mediaSrc = image?.filename || video?.filename;
  const isVideo = !!video?.filename && !image?.filename;

  if (!mediaSrc) return null; // nothing to render

  return (
    <div className={`relative ${heightClass} ${roundedClass} overflow-hidden`}>
      {isVideo ? (
        <video
          src={mediaSrc}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          src={mediaSrc}
          alt={image.alt || ""}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default MediaBlock;
