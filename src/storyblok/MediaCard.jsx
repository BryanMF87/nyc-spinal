import Heading from "./Heading";
import LinkBlok from "./LinkBlok";

const MediaCard = ({ blok }) => {
  const { asset, heading, text, link } = blok;

  const isVideo = (filename = "") => /\.(mp4|webm|ogg)$/i.test(filename);

  const roundTop = asset?.filename ? "rounded-t-none" : "rounded-t-xl";

  return (
    <div className="flex flex-col h-fit overflow-hidden shadow-lg bg-white rounded-xl theme-light">
      {/* Media */}
      {asset?.filename?.trim() && (
        <div className="relative bg-gray-100 w-full h-48 rounded-t-xl">
          {isVideo(asset.filename) ? (
            <video
              controls
              className="w-full h-48 object-cover rounded-t-xl"
              poster={asset.poster?.filename || undefined}
            >
              <source src={asset.filename} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          ) : (
            <img
              src={asset.filename}
              alt={asset.alt || ""}
              className="w-full h-48 object-cover rounded-t-xl"
            />
          )}
        </div>
      )}

      {/* Content */}
      <div className={`flex flex-col gap-6 p-6 text-left ${roundTop}`}>
         {heading && (
          <Heading
            title={heading}
            as="h3"
            variant="card"
          />
        )}

        {text && <p>{text}</p>}

        {link?.[0] && <LinkBlok blok={link[0]} />}
      </div>
    </div>
  );
};

export default MediaCard;