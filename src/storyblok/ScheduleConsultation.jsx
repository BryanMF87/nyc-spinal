import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ScheduleConsultation = ({ blok }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#003666] via-[#0062B1] to-sky-800 opacity-90" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("/api/placeholder/1920/1080")',
          transform: `translateY(${(scrollY - 2000) * 0.2}px)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          {blok.headline}
        </h2>
        <p className="text-xl text-sky-100 mb-12">{blok.paragraph}</p>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/appointment">
            <button className="px-8 py-4 bg-white text-[#003666] rounded-full font-bold hover:bg-sky-50 transition duration-300">
              {blok.button_text}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ScheduleConsultation;
