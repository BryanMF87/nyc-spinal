import React, { useEffect, useRef } from 'react';

const RufflePlayer = ({ swfUrl, width = '100%', height = '400px' }) => {
  const containerRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@ruffle-rs/ruffle';
    script.async = true;

    script.onload = () => {
      if (containerRef.current && !playerRef.current) {
        const ruffle = window.RufflePlayer.newest();
        playerRef.current = ruffle.createPlayer();
        containerRef.current.appendChild(playerRef.current);
        
        playerRef.current.load({
          url: swfUrl,
          backgroundColor: 'transparent',
          wmode: 'transparent'
        });
        
        playerRef.current.style.width = width;
        playerRef.current.style.height = height;
        
        playerRef.current.style.backgroundColor = 'transparent';
        
        setTimeout(() => {
          const canvas = playerRef.current.querySelector('canvas');
          if (canvas) {
            canvas.style.backgroundColor = 'transparent';
          }
        }, 100);
      }
    };

    document.body.appendChild(script);

    const style = document.createElement('style');
    style.textContent = `
      .ruffle-player-container canvas {
        background-color: transparent !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (playerRef.current) {
        playerRef.current.remove();
        playerRef.current = null;
      }
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, [swfUrl, width, height]);

  return (
    <div 
      ref={containerRef} 
      className="ruffle-player-container"
      style={{
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    />
  );
};

export default RufflePlayer;