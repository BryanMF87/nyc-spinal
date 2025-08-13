import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AlertTriangle, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const StatusAlert = ({ type, message }) => {
  if (!message) return null;

  const isSuccess = type === 'success';

  return (
    <div className={`mb-6 p-4 rounded-lg border ${isSuccess
        ? 'bg-green-50 border-green-200 text-green-800'
        : 'bg-red-50 border-red-200 text-red-800'
      }`}>
      <div className="flex items-center gap-3">
        {isSuccess ? (
          <CheckCircle2 className="h-5 w-5 text-green-600" />
        ) : (
          <XCircle className="h-5 w-5 text-red-600" />
        )}
        <div className="flex-1">
          <h3 className="font-semibold">
            {isSuccess ? 'Success!' : 'Error'}
          </h3>
          <p className="mt-1">{message}</p>
        </div>
      </div>
    </div>
  );
};

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    condition: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/backend/appointment.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! We will contact you shortly to schedule your appointment.'
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          condition: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'There was an error submitting your request. Please try again or call our office.'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your request. Please try again or call our office.'
      });
    } finally {
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      <Helmet>
        <title>Request an Appointment - New York Center for Spinal Disorders</title>
        <meta name="description" content="Schedule an appointment with the expert spine specialists at the New York Center for Spinal Disorders. Contact us today to receive personalized spine care in Manhattan." />
        <meta name="keywords" content="appointment, spinal disorders, spine specialist, back pain consultation, scoliosis treatment, New York, Dr. Tindel, Dr. Shah, orthopedic surgeon, spine care" />
        <meta name="author" content="Dr. Nathaniel Tindel, Dr. Neel P. Shah" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Request an Appointment - New York Center for Spinal Disorders" />
        <meta property="og:description" content="Book an appointment with our leading spine specialists at the New York Center for Spinal Disorders. Get expert, compassionate care for your spine health." />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/appointment" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Request an Appointment - New York Center for Spinal Disorders" />
        <meta name="twitter:description" content="Schedule your appointment with our expert spine specialists at the New York Center for Spinal Disorders. Receive advanced, patient-centered spine care today." />
        <meta name="twitter:image" content="/images/logo-header.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#4a90e2" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>

      <Header />

      
      <div className="relative h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#003666] to-[#0062B1]" />
          <img
            src="/images/building.png"
            alt="Appointment background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Request Your Appointment</h1>
            <p className="text-2xl text-blue-100">We'll call you back promptly to schedule your visit</p>
          </div>
        </div>
      </div>

      
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        <StatusAlert type={submitStatus.type} message={submitStatus.message} />

        
        <div className="mb-12">
          <p className="text-lg text-gray-700">
            To request an appointment with Dr. Tindel, please fill out the form below and our office will call you back promptly to book the appointment.
          </p>
        </div>

        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="space-y-2">
              <label htmlFor="name" className="block text-lg font-semibold text-blue-900">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 disabled:opacity-50"
                placeholder="Your full name"
              />
            </div>

            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-lg font-semibold text-blue-900">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 disabled:opacity-50"
                placeholder="Your phone number"
              />
            </div>
          </div>

          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-lg font-semibold text-blue-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 disabled:opacity-50"
              placeholder="Your email address"
            />
          </div>

          
          <div className="space-y-2">
            <label htmlFor="condition" className="block text-lg font-semibold text-blue-900">
              About Your Condition or Reason (Optional)
            </label>
            <textarea
              id="condition"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              rows={5}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 disabled:opacity-50"
              placeholder="Please describe your condition or reason for visit"
            />
          </div>

          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Request
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </form>

        
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-blue-900 mb-4">What Happens Next?</h3>
          <p className="text-gray-700">
            After submitting your request, our office staff will review your information and contact you promptly to schedule your appointment. If you need immediate assistance, please call our office directly at (212) 249-3840.
          </p>
        </div>

        
        <div className="mb-12 bg-red-50 border-2 border-red-200 rounded-xl p-6 mt-4">
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 p-2 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-900 mb-2">ATTENTION</h3>
              <p className="text-red-700">
                <strong>Do not</strong> request an appointment online for emergency medical needs.
                If you are experiencing an emergency, please <strong>call 911</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AppointmentPage;