import { Phone, BookOpen, Activity } from 'lucide-react';
import { render } from 'storyblok-rich-text-react-renderer';

const ConditionTemplate = ({blok}) => {

  

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="flex items-center relative min-h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1] py-8">
        <div className="absolute inset-0">
          <img
            src="../images/circles.jpg"
            alt={''}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">{blok.headline}</h1>
            <p className="text-2xl text-blue-100">{blok.subheadline}</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto py-6 px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+12122493840" className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition">
              <Phone className="mr-2 w-4 h-4" /> 
              Call Now
            </a>
            <a href="mailto:schedule@spine-nyc.com?subject=Appointment%20Request" className="inline-flex items-center px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-50 transition">
              Email Us
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">

        {blok.overview_paragraph &&
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div className="richtext">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Condition Overview</h2>
                  {render(blok.overview_paragraph)}
                </div>
              </div>
            </div>
          </div>
        }

        {blok.patient_info_paragraph &&
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <Activity className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div className="richtext">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">What Patients Need to Know</h2>
                    {render(blok.patient_info_paragraph)}
                </div>
              </div>
            </div>
          </div>
        }


        <div className="bg-gradient-to-r from-[#003666] to-[#0062B1] rounded-xl shadow-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Patient-Centered Approach</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our dedicated team of board-certified orthopedic spine physicians at New York Center for Spinal Disorders works together to guide you every step of the way, always prioritizing your comfort and well-being.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+12122493840" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-100 transition duration-300">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <a href="mailto:schedule@spine-nyc.com?subject=Appointment%20Request" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition duration-300">
              Email Us
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ConditionTemplate;