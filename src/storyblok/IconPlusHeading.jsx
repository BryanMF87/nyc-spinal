import { StoryblokComponent } from "@storyblok/react";

export default function IconPlusHeading ({blok}) {

    const alignment = blok.align === "top"
        ? "items-start"
        : "items-center";

    return (
        <>
            {blok.indent ? (
                <div className={`flex space-x-4 ${alignment}`}>
                    {blok.icon?.map((iconBlok) => (
                        <StoryblokComponent
                            blok={iconBlok}
                            key={iconBlok._uid}
                        />
                    ))}
                    {blok.heading?.map((headingBlok) => (
                        <StoryblokComponent
                            blok={headingBlok}
                            key={headingBlok._uid}
                        />
                    ))}
                    {blok.body?.map((childBlok) => (
                        <StoryblokComponent
                        blok={childBlok}
                        key={childBlok._uid}
                        />
                    ))}
                </div>
            ) : (
                <div className={`flex space-x-4 ${alignment}`}>
                    {blok.icon?.map((iconBlok) => (
                        <StoryblokComponent
                            blok={iconBlok}
                            key={iconBlok._uid}
                        />
                    ))}
                    {blok.heading?.map((headingBlok) => (
                        <StoryblokComponent
                            blok={headingBlok}
                            key={headingBlok._uid}
                        />
                    ))}
                    {blok.body?.map((childBlok) => (
                        <StoryblokComponent
                            blok={childBlok}
                            key={childBlok._uid}
                        />
                    ))}
                </div>
            )}
        </>
    )
};