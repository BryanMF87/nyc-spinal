import { Icon } from "@iconify/react/dist/iconify.js";

const ListItem = ({blok}) => {

    const {
        icon_color
    } = blok;

    return (
        <div className={`flex items-center gap-3 text-left`}>
            <Icon 
                icon={blok.icon.icon}
                className={`${icon_color} w-4 h-4 mb-4 md:w-5 md:h-5`} 
            />
            <p>{blok.label}</p>
        </div>
    )
};

export default ListItem;