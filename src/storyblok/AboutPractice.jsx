import { Icon } from '@iconify/react';
import { storyblokEditable } from '@storyblok/react';


const AboutPractice = ({blok}) => {

  return (
    <section className="relative py-24 overflow-hidden" {...storyblokEditable(blok)}>
      
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("images/whiteabstract.jpg")',
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/20 via-gray-50/20 to-white/20" />
        <div className="absolute inset-0 bg-[#003666]/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003666] mb-6">
            {blok.headline}
          </h2>
          <p className="text-xl text-[#0062B1] max-w-3xl mx-auto">
            {blok.paragraph}
          </p>
        </div>

        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {blok.features?.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
            >
              
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image.filename} 
                  alt={feature.image.alt || 'Alt text not provided'}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#003666] mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="bg-gradient-to-br from-[#003666]/95 to-[#0062B1]/95 backdrop-blur-sm rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-white text-3xl font-bold mb-4">{blok.subheadline}</h3>
            <p className="text-white text-xl">{blok.subparagraph}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blok.highlights?.map((highlight, index) => (
              <div key={index} className="group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    <Icon icon={`${highlight.icon.icon}`} className="w-6 h-6 text-sky-200" />
                  </div>
                  <h4 className="text-white text-lg font-semibold">{highlight.title}</h4>
                </div>
                <p className="text-white pl-14">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPractice;