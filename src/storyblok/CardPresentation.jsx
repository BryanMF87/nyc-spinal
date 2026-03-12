
import { Icon } from "@iconify/react/dist/iconify.js";
import { render } from "storyblok-rich-text-react-renderer";

export default function CardPresentation ({blok}) {
    return (
        <div key={blok._uid} className="bg-white rounded-xl shadow-lg p-6 theme-light">
            <div className="flex items-start gap-4">
                <Icon icon={blok.icon.icon} className="w-6 h-6 text-[#0062B1] flex-shrink-0 mt-1" />

                <div className="text-left">
                    <h3 className="text-xl font-bold text-[#003666] mb-2">{blok.title}</h3>
                    <div className="text-gray-600">{render(blok.text)}</div>
                    {blok.link.cached_url && (
                        <a
                            href={blok.link.cached_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0062B1] hover:text-[#003666] mt-2 inline-block"
                        >
                            Watch Video
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}