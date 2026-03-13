import Heading from "./Heading";


const LogoList = ({ blok }) => (
  <div className="mx-auto w-full">
    <Heading title={blok.heading} as="h3" variant="label" />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-6 mt-4">
      {(blok.logos || []).map((logo) => (
        <div
          key={logo.id}
          className="flex justify-center items-center w-40 h-16"
        >
          <img
            src={logo.filename}
            alt={logo.alt || "logo"}
            className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-500"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(27%) sepia(15%) saturate(1642%) hue-rotate(182deg) brightness(97%) contrast(89%)",
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

export default LogoList;
