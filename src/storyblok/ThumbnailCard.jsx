const ThumbnailCard = ({ blok }) => {
  if (blok.card_background) {
    return (
      <div
        key={blok._uid}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <img
          src={blok.image.filename}
          alt={blok.image.alt || ""}
          className="w-full h-auto object-contain p-2 md:p-4 max-h-48 md:max-h-none rounded-[40px]"
        />

        {blok.title && (
          <div className="p-4 text-center bg-gray-50">
            <p className="text-sm font-semibold text-gray-700">
              {blok.title}
            </p>
          </div>
        )}
      </div>
    );
  }

  // default / simple thumbnail
  return (
    <div
      key={blok._uid}
      className="flex flex-col items-center"
    >
      <div className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
        <img
          src={blok.image.filename}
          alt={blok.image.alt || ""}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {blok.title && (
        <p className="mt-2 text-sm text-gray-600 text-center">
          {blok.title}
        </p>
      )}
    </div>
  );
};

export default ThumbnailCard;
