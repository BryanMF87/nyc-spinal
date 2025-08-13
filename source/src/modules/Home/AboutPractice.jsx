import React from 'react';
import { 
  Building2, 
  ScrollText, 
  Heart
} from 'lucide-react';

const AboutPractice = () => {
  const features = [
    {
      image: "/images/spinetreatments.png",
      title: "Advanced Treatment Methods",
      description: "Utilizing cutting-edge technology and innovative techniques to provide the most effective spine care solutions."
    },
    {
      image: "/images/patientphilosophy.png",
      title: "Patient-First Philosophy",
      description: "We prioritize non-surgical approaches when possible, ensuring each treatment plan is tailored to individual needs."
    },
    {
      image: "/images/spineexcellence.png",
      title: "Excellence in Care",
      description: "Our center maintains the highest standards in spine care, backed by years of successful patient outcomes."
    }
  ];

  const highlights = [
    {
      icon: Building2,
      title: "State-of-the-Art Facilites",
      description: "With our physicians, patients have access to the incredible facilities at both Lennox Hill and NYU."
    },
    {
      icon: Heart,
      title: "Comprehensive Care",
      description: "From initial consultation through treatment and recovery, we provide complete spine care under one roof."
    },
    {
      icon: ScrollText,
      title: "Evidence-Based Approach",
      description: "Our treatments are founded on proven medical research and continuous advancement in spine care."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      
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
            Setting the Standard in Spine Care
          </h2>
          <p className="text-xl text-[#0062B1] max-w-3xl mx-auto">
            The New York Center for Spinal Disorders combines advanced technology with 
            compassionate care to deliver exceptional outcomes
          </p>
        </div>

        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
            >
              
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
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

        
        <div className="bg-gradient-to-br from-[#003666]/95 to-[#0062B1]/95 backdrop-blur-sm rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Our Center</h3>
            <p className="text-xl text-sky-100">Experience the difference of specialized spine care</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    <highlight.icon className="w-6 h-6 text-sky-200" />
                  </div>
                  <h4 className="text-lg font-semibold">{highlight.title}</h4>
                </div>
                <p className="text-sky-100 pl-14">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPractice;