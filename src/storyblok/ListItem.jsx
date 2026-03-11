import { Icon } from "@iconify/react/dist/iconify.js";

const ListItem = ({blok}) => {

    const {
        icon,
        icon_color,
        label,
        text_color
    } = blok;

    return (
        <div className={`flex items-center gap-3 text-left`}>
            <Icon 
                icon={icon.icon}
                className={`${icon_color} w-6 h-6`} 
            />
            <p className={text_color}>{label}</p>
        </div>
    )
};

export default ListItem;