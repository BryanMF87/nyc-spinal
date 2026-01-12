import { Icon } from '@iconify/react/dist/iconify.js';

const ContactPage = ({blok}) => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <title>Contact Us - New York Center for Spinal Disorders</title>
      <meta name="description" content="Get in touch with the New York Center for Spinal Disorders. Find our office location, contact number, and directions to schedule your visit with Dr. Nathaniel Tindel." />
      <meta name="keywords" content="spinal disorders, scoliosis treatment, herniated discs, back pain, spine conditions, New York, Dr. Tindel, orthopedic surgeon, spine care, scoliosis in teens" />
      <meta name="author" content="Dr. Nathaniel Tindel" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="New York Center for Spinal Disorders - Treating Scoliosis" />
      <meta property="og:description" content="Founded by Dr. Tindel, the New York Center for Spinal Disorders treats adults and teens for scoliosis, herniated discs, back pain, and more spine conditions." />
      <meta property="og:image" content="/images/logo-header.png" />
      <meta property="og:url" content="https://www.nycspinaldisorders.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="New York Center for Spinal Disorders - Treating Scoliosis" />
      <meta name="twitter:description" content="Founded by Dr. Tindel, the New York Center for Spinal Disorders treats adults and teens for scoliosis, herniated discs, back pain, and more spine conditions." />
      <meta name="twitter:image" content="/images/logo-header.png" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#4a90e2" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      <div className="relative h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
          <img
            src={`${blok.headline_image.filename}`}
            alt={`${blok.headline_image.alt}`}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">{blok.headline}</h1>
            <p className="text-2xl text-sky-100">{blok.subheadline}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-[#003666] mb-8">{blok.office_headline}</h2>
              <div className="space-y-6">
                {blok.office_info?.content[0].attrs.body.map((item)=> (
                  <div key={item._uid} className="flex items-start space-x-4">
                    <div className="bg-sky-100 p-3 rounded-lg">
                      <Icon icon={item.icon.icon} className="w-6 h-6 text-[#0062B1]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#003666] mb-2">{item.text}</h3>
                      <p className="text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg">
                  <Icon icon={blok.parking_icon.icon} className="w-6 h-6 text-[#0062B1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003666] mb-4">{blok.parking_headline}</h3>
                  <p className="whitespace-pre-line text-gray-700 mb-4">
                    {blok.parking_information}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg h-[600px]">
              <iframe
                title="Office Location"
                src={`${blok.google_map_url}`}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-6 rounded-xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Icon icon={blok.appointment_icon.icon} className="w-6 h-6" />
                <h3 className="text-xl font-bold">{blok.appointment_headline}</h3>
              </div>
              <p className="text-sky-100 mb-6">
                {blok.appointment_subheadline}
              </p>
              <div className="flex space-x-4">
                <a
                  href={`${blok.appointment_phone_link}`}
                  className="flex-1 text-center bg-white text-[#003666] py-3 rounded-lg hover:bg-sky-50 transition duration-300 font-semibold"
                >
                  {blok.appointment_phone}
                </a>
                <a
                  href={`${blok.appointment_email_link}`}
                  className="flex-1 text-center border-2 border-white text-white py-3 rounded-lg hover:bg-white hover:text-[#003666] transition duration-300 font-semibold"
                >
                  {blok.appointment_email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;