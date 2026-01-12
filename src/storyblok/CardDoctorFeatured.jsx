import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CardDoctorFeatured = ({blok}) => {

    const {
        image,
        name,
        role,
        specialty,
        link_text,
        link,
    } = blok;


    return (
        <div className="text-left shadow-md">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                <div className="relative h-[320px] md:h-[420px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003666]/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    <img
                        src={image.filename}
                        alt={image.alt || name}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        style={{
                        objectPosition: name.includes("Shah") || name.includes("Tindel") ? "center 25%" : "center"
                        }}
                    />
                </div>
                <div className="p-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-[#0062B1]/20 to-[#003666]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{name}</h3>
                        <p className="text-lg md:text-xl text-white mb-1">{role}</p>
                        <p className="text-sm md:text-base text-white mb-6 md:mb-8">{specialty}</p>
                        <Link
                            to={link}
                            className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-sky-600 hover:bg-sky-700 rounded-full text-white font-medium transition-all duration-300 group/link cursor-pointer no-underline hover:no-underline z-10"
                        >
                            <span className="text-sm md:text-base">{link_text}</span>
                            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transform transition-transform group-hover/link:translate-x-2" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-600 via-[#0062B1] to-[#003666] rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 pointer-events-none" />
        </div>
    )
}

export default CardDoctorFeatured;