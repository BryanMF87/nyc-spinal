import { Link } from "react-router-dom";


const SubMenuItem = ({blok}) => {
    
    return (
        <Link
            to={"/" + blok.link?.cached_url}
            onClick={(e) => {
                e.currentTarget.blur(); // removes mouse hover focus context
            }}
            className="flex items-center justify-between px-4 py-2 text-sm text-default hover:bg-blue-50 hover:text-default transition-colors duration-300"
        >
            {blok.title}
        </Link>
    )
}

export default SubMenuItem;