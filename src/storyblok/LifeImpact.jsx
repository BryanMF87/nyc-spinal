
import { storyblokEditable } from '@storyblok/react';


const LifeImpact = ({blok}) => {
    return(
        <section className="relative py-32 overflow-hidden" {...storyblokEditable(blok)}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0062B1] to-[#003666]">
            <div className="absolute inset-0 opacity-10"
                style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%234FD1C5'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E")`,
                backgroundSize: 'cover',
                animation: 'wave 20s linear infinite',
                }}
            />
            </div>
            <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                <div className="aspect-square">
                    <div className="relative h-full w-full overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-white/20 backdrop-blur-sm" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/30 via-white/20 to-sky-400/30 blur-2xl" />
                    <div className="relative h-full w-full transform transition-transform duration-700 hover:scale-105">
                        <img
                        src={blok.image.filename}
                        alt={blok.image.alt || "Alt text not provided"}
                        className="h-full w-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003666]/50 to-transparent rounded-2xl" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{blok.subheadline}</h3>
                         <p className="text-sky-100 text-balance">{blok.subheadline_paragraph}</p>
                        </div>
                    </div>
                    <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-sky-300/50 rounded-tl-xl" />
                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-sky-300/50 rounded-tr-xl" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-sky-300/50 rounded-bl-xl" />
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-sky-300/50 rounded-br-xl" />
                    </div>
                </div>
                </div>
                <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    {blok.headline}
                </h2>
                <p className="text-xl text-sky-100">
                    {blok.headline_paragraph}
                </p>
                
                <div className="grid gap-6">
                    {blok.stats.content[0].attrs.body.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-white/10 rounded-xl p-4">
                        <span className="text-2xl font-bold text-sky-300">{stat.statistic}</span>
                        <span className="text-sky-100">{stat.text}</span>
                    </div>
                    ))}
                </div>

                {/* from previous developer
                <Link 
                    to="#"
                    className="inline-block group px-8 py-4 bg-white text-[#003666] rounded-full font-bold hover:bg-sky-50 transition-all duration-300 transform hover:-translate-y-1"
                >
                    <div className="flex items-center">
                    Explore Success Stories
                    <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                </Link>
                */}
                </div>
            </div>
        </div>

        <style>{`
            @keyframes wave {
                0% { background-position: 0% 0%; }
                100% { background-position: 100% 100%; }
            }
            @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            .animate-spin-slow {
                animation: spin-slow 20s linear infinite;
            }
        `}</style>
      </section>
    );
};

export default LifeImpact;