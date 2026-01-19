
import { render } from "storyblok-rich-text-react-renderer";

export default function CardPresentation ({blok}) {
    return (
        <div key={blok._uid} className="bg-white rounded-xl shadow-lg p-6 text-left">
            <h3 className="text-xl font-bold text-[#003666] mb-2">
                {blok.title}
            </h3>
            <div className="text-gray-600">
                {render(blok.text)}
            </div>
        </div>
    )
}