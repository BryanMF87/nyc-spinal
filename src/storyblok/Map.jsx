export default function Map({ blok }) {
    
  const heightMap = {
    sm: "h-[200px]",
    md: "h-[450px]",
    lg: "h-[600px]",
    xl: "h-[750px]",
  };

  const heightClass = heightMap[blok.height || "lg"];

  const paddingClass = blok.padding ? "p-6" : ""

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg ${paddingClass[blok.padding]} ${heightClass}`}
    >
      <iframe
        title={blok.title || "Map"}
        src={blok.embed_url}
        width="100%"
        height="100%"
        loading="lazy"
        style={{
          border: 0,
          borderRadius: "0.75rem",
        }}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
