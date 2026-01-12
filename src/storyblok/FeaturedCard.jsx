import { storyblokEditable } from "@storyblok/react"

export default function FeaturedCard ({blok}) {
    return (
        <div 
            {...storyblokEditable(blok)}
            className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-8 rounded-2xl text-white"
        >
            <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                    <div className="rounded-full overflow-hidden border-4 border-white/20 mx-auto max-w-xs">
                        <img 
                            src={blok.image?.filename}
                            alt={blok.image?.alt || ""} 
                            className="w-full h-auto" 
                        />
                    </div>
                </div>
                <div className="md:col-span-2 space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{blok.heading}</h2>
                    <p className="text-lg text-sky-100">{blok.description}</p>
                    <a 
                        className="inline-flex items-center bg-white text-[#003666] px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-all duration-300" 
                        href={blok.button_link.cached_url} 
                        data-discover="true"
                    >
                        {blok.button_text} 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right ml-2"><path d="m9 18 6-6-6-6"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}