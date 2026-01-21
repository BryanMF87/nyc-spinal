import { storyblokEditable, StoryblokComponent } from "@storyblok/react"

export default function FeaturedCard ({blok}) {
    return (
        <div 
            {...storyblokEditable(blok)}
            className="bg-gradient p-8 rounded-2xl"
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
                    <h2 className="text-2xl md:text-3xl font-bold">{blok.heading}</h2>
                    <p className="text-lg">{blok.description}</p>
                    {blok.button?.map((blok) => (
                        <StoryblokComponent blok={blok} key={blok._uid} />
                    ))}
                </div>
            </div>
        </div>
    )
}