import { Link } from "react-router-dom";

const CardTreatment = ({blok}) => {

    const {
        image,
        title,
        text,
        link,
    } = blok;

    return (
            <Link
                to={link}
                className="block group relative bg-white rounded-xl shadow-lg overflow-hidden w-full h-64 flex-shrink-0 transition-all duration-500 hover:shadow-2xl hover:scale-105"
            >
                <div className="absolute inset-0">
                  {image && 
                    <img
                      src={image.filename}
                      alt={image.alt || ""}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  }
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br from-sky-600 to-[#003666] opacity-75 group-hover:opacity-85 transition-opacity duration-500`}
                />

                <div className="relative h-full z-20 p-6 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300 drop-shadow-lg">
                      {title}
                    </h3>
                    <p className="text-sm text-white/90 drop-shadow">
                      {text}
                    </p>
                  </div>
                  
                  <div className="flex items-center mt-4">
                    <span className="inline-flex items-center text-white text-sm font-medium">
                      Learn More
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="absolute -inset-1 bg-white opacity-0 group-hover:opacity-20 transform group-hover:scale-105 transition-all duration-500 blur-lg" />
              </Link>
    )

}

export default CardTreatment;