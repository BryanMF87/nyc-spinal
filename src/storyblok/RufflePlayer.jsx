import { useEffect, useRef } from "react";
import { storyblokEditable } from "@storyblok/react";

const RufflePlayer = ({ blok }) => {
  const { video, caption, height = 400 } = blok;
  const swfUrl = video?.filename;

  const containerRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
  if (!swfUrl) return;

  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/@ruffle-rs/ruffle";
  script.async = true;

  script.onload = () => {
    if (!containerRef.current || playerRef.current) return;

    const ruffle = window.RufflePlayer?.newest?.();
    if (!ruffle) return;

    playerRef.current = ruffle.createPlayer();
    containerRef.current.appendChild(playerRef.current);

    playerRef.current.load({
      url: swfUrl,
      backgroundColor: "transparent",
      wmode: "transparent",
    });

    playerRef.current.style.width = "100%";
    playerRef.current.style.height = `${height}px`;
    playerRef.current.style.backgroundColor = "transparent";
  };

  document.body.appendChild(script);

  return () => {
    if (playerRef.current) {
      playerRef.current.remove();
      playerRef.current = null;
    }
    if (script.parentNode) document.body.removeChild(script);
  };
}, [swfUrl, height]);


  return (
    <div {...storyblokEditable(blok)} className="rounded-xl overflow-hidden mb-6">
      <div className="bg-transparent">
        <div
          ref={containerRef}
          className="ruffle-player-container"
          style={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>

      {caption && (
        <p className="text-center text-gray-600 py-2 text-sm">
          {caption}
        </p>
      )}
    </div>
  );
};

export default RufflePlayer;
