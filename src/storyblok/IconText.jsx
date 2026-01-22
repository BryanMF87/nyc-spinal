import { storyblokEditable } from "@storyblok/react"
import { Icon } from "@iconify/react"

export default function IconText({ blok }) {
  const { variant = "compact", icon, heading, text } = blok

  const variants = {
    compact: {
      iconSize: "w-6 h-6",
      h_tag: "h4",
    },
    featured: {
      iconSize: "w-8 h-8",
      h_tag: "h3",
    },
  }

  const styles = variants[variant];
  const Tag = styles.h_tag;

  return (
    <div
      {...storyblokEditable(blok)}
      className={`flex items-start space-x-4`}
    >
        {icon?.icon && (
            <Icon
                icon={icon.icon}
                className={`flex-shrink-0 text-accent ${styles.iconSize}`}
            />
        )}
      <div>
        {heading && (
            <Tag className="regular font-semibold">{heading}</Tag>
        )}

        {text && (
          <p className={styles.textSize}>
            {text}
          </p>
        )}
      </div>
    </div>
  )
}
