import React from 'react';

const Attention = () => {
  const reviewLogos = [
    { name: 'WebMD', src: 'images/WebMD.png', width: 'w-40' },
    { name: 'Healthgrades', src: 'images/healthgrades.png', width: 'w-40' },
    { name: 'Google Reviews', src: 'images/GoogleReviews.png', width: 'w-40' },
    { name: 'Yelp', src: 'images/yelp.png', width: 'w-44' }
  ];

  const mediaLogos = [
    { name: 'CBS', src: 'images/CBS.png', width: 'w-36' },
    { name: 'NBC', src: 'images/NBCNews.png', width: 'w-44' },
    { name: 'ABC', src: 'images/abcnews.png', width: 'w-36' },
    { name: 'AP', src: 'images/apnews.png', width: 'w-36' }
  ];

  const logoStyle = {
    filter: 'brightness(0) saturate(100%) invert(27%) sepia(15%) saturate(1642%) hue-rotate(182deg) brightness(97%) contrast(89%)'
  };

  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-100% - 2rem)); }
      }
      @keyframes scrollReverse {
        0% { transform: translateX(calc(-50%)); }
        100% { transform: translateX(calc(0% - 2rem)); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/marble1.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/60" />
      </div>

      
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#0062B1]/10 to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0062B1]/10 to-transparent" />
      </div>

      
      <div className="relative max-w-4xl mx-auto px-4 text-center mb-16">
        <h2 
          className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#003666] to-[#0062B1]"
          style={{ lineHeight: '1.5' }}
        >
          Precision & Expertise
        </h2>
        <h3 className="text-3xl text-[#0062B1] mb-8">
          Elite Surgical & Non-Surgical Spine Care
        </h3>
        <p className="text-xl text-gray-700 leading-relaxed mb-12">
          The New York Center for Spinal Disorders is committed to delivering unparalleled, 
          state-of-the-art spine care treatments to our patients in the Tri-State area. Our philosophy 
          centers on providing each patient with innovative and advanced treatments when 
          medically appropriate. These pioneering approaches help us{' '}
          <span className="font-semibold text-[#0062B1]">redefine the standards of spine care</span>.
        </p>
      </div>

      
      <div className="relative mx-auto px-8" style={{ maxWidth: '1800px' }}>
        
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-[#0062B1] mb-4 text-center">Reviews & Features</h4>
          <div className="hidden md:flex justify-between items-center">
            {reviewLogos.map((logo, index) => (
              <div 
                key={`review-${index}`}
                className={`${logo.width} h-16`}
              >
                <img 
                  src={logo.src} 
                  alt={`${logo.name} logo`} 
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-500"
                  style={logoStyle}
                />
              </div>
            ))}
          </div>
          
          <div className="md:hidden overflow-hidden">
            <div 
              className="flex space-x-8 animate-scroll" 
              style={{ 
                animation: 'scroll 30s linear infinite',
                width: 'fit-content'
              }}
            >
              {[...reviewLogos, ...reviewLogos].map((logo, index) => (
                <div 
                  key={`mobile-review-${index}`}
                  className="flex-shrink-0 h-12 w-32"
                >
                  <img 
                    src={logo.src} 
                    alt={`${logo.name} logo`} 
                    className="h-full w-full object-contain opacity-80"
                    style={logoStyle}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 
          Media Section (Commented Out)

          <div>
            <div className="hidden md:flex justify-between items-center">
              {mediaLogos.map((logo, index) => (
                <div 
                  key={`media-${index}`}
                  className={`${logo.width} h-16`}
                >
                  <img 
                    src={logo.src} 
                    alt={`${logo.name} logo`} 
                    className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-500"
                    style={logoStyle}
                  />
                </div>
              ))}
            </div>
            
            {/* Mobile Media Scrolling
            <div className="md:hidden overflow-hidden">
              <div 
                className="flex space-x-8" 
                style={{ 
                  animation: 'scrollReverse 15s linear infinite',
                  width: 'fit-content',
                  transform: 'translateX(calc(-50%))'
                }}
              >
                {[...mediaLogos, ...mediaLogos].map((logo, index) => (
                  <div 
                    key={`mobile-media-${index}`}
                    className="flex-shrink-0 h-12 w-32"
                  >
                    <img 
                      src={logo.src} 
                      alt={`${logo.name} logo`} 
                      className="h-full w-full object-contain opacity-80"
                      style={logoStyle}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        */}

      </div>
    </section>
  );
};

export default Attention;
