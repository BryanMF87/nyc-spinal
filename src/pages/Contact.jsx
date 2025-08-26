import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { 
  MapPin,
  Phone,
  Clock,
  Calendar,
  Car,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
const ContactPage = () => {
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

      <Header />
      
      <div className="relative h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
          <img
            src="/images/building.png"
            alt="Office location"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-2xl text-sky-100">Get in touch with our office</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="bg-gradient-to-r from-sky-50 to-[#0062B1]/10 border border-sky-200 rounded-xl p-6 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="bg-sky-100 p-2 rounded-lg">
                <AlertCircle className="h-6 w-6 text-[#0062B1]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#003666] mb-2">
                  Looking to Schedule an Appointment?
                </h3>
                <p className="text-gray-700 mb-4">
                  Click below to start your appointment request process. We'll get back to you promptly to confirm your visit.
                </p>
                <Link
                  to="/appointment"
                  className="inline-flex items-center px-6 py-3 bg-[#0062B1] text-white rounded-lg hover:bg-[#003666] transition duration-300"
                >
                  Request Appointment
                  <ChevronRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-[#003666] mb-8">Office Location & Phone Number</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-sky-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#0062B1]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#003666] mb-2">Address</h3>
                    <p className="text-gray-700">
                      425 East 79th Street, Suite 1H
                      <br />
                      (between 1st Ave. and York Ave, north side of the street)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-sky-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-[#0062B1]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#003666] mb-2">Phone</h3>
                    <a href="tel:2122493840" className="text-gray-700 text-lg">
                      (212) 249-3840
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-sky-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-[#0062B1]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#003666] mb-2">Office Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg">
                  <Car className="w-6 h-6 text-[#0062B1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003666] mb-4">Parking Information</h3>
                  <p className="text-gray-700 mb-4">
                    If you are driving to your appointment, there are two convenient parking lots:
                  </p>
                  <ul className="space-y-4">
                    <li className="text-gray-700">
                      1. Located in our office building
                    </li>
                    <li className="text-gray-700">
                      2. <strong>Central Parking Garage</strong>
                      <br />
                      340 East 80th Street
                      <br />
                      Entrance: 80th Street between 1st Ave and 2nd Ave on the south side of the street
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg h-[600px]">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9726049959455!2d-73.95147788459468!3d40.77340997932584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258b61a5e04d9%3A0x385c7c0dbb891652!2s425%20E%2079th%20St%2C%20New%20York%2C%20NY%2010075!5e0!3m2!1sen!2sus!4v1634930464565!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-6 rounded-xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6" />
                <h3 className="text-xl font-bold">Need to Schedule a Visit?</h3>
              </div>
              <p className="text-sky-100 mb-6">
                Our staff is ready to assist you in scheduling your appointment and answering any questions you may have.
              </p>
              <div className="flex space-x-4">
                <a
                  href="tel:2122493840"
                  className="flex-1 text-center bg-white text-[#003666] py-3 rounded-lg hover:bg-sky-50 transition duration-300 font-semibold"
                >
                  Call Now
                </a>
                <Link
                  to="/appointment"
                  className="flex-1 text-center border-2 border-white text-white py-3 rounded-lg hover:bg-white hover:text-[#003666] transition duration-300 font-semibold"
                >
                  Request Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;