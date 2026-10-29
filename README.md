# Storyblok

used to change content without code using reusable components defined on the Storyblok space and mapped to corresponding React components
Documentation - https://www.storyblok.com/technologies#react

## index.js

import react components and storyblok component equivilants here via storyblokInit function

## app.js

Fetch the home story of your Storyblok space. StoryblokComponent will resolve and render all of your Storyblok components.

## Important blocks
- Page : A content block that makes up the foundation of 90% of our site. Automatically added as you create each new story.
- Condition / Procedure Template : A content block that makes up the foundation for reusable condition / procedure pages. These do not use Page content blocks.
- Section : Used directly on content blocks to create a new section of content. Houses all other building blocks
- Layout : Layout blocks like layout_2_col, grid, etc help our content editors define the organization of smaller building blocks and are used directly inside Section blocks.

## Richtext
https://www.npmjs.com/package/storyblok-rich-text-react-renderer
    To parse the stylized data we need three elements -
        1. A parent div with a className of "richtext"
        2. The render function, imported from 'storyblok-rich-text-react-renderer'
        3. The target field used as the arguement for the render function
        i.e. - <div className="richtext">{render(content.info)}</div>
    - Styling of richtext elements can be done via styling the richtext class in globals.css

## Rendering referenced stories
src/storyblok/StoryblokPage.js holds the RELATIONS array used to resolve relations upon page upload
- Just write the page component and that component's field with refernences to resolve, separated by comma
- i.e - 'conditions_page.conditions'

## Icons
How to edit icons in Storyblok - https://github.com/jpkha/iconify-storyblok-fieldtype
Iconify icons in React https://github.com/iconify/iconify/tree/main/components/react
- To add an icon,
        1. Navigate to the story or component inside Storyblok
        2. Add an "iconBlok" to any storyblok "blocks" field type
        3. The iconBlok has a single input field that will provide a list of available icons you can choose from
        4. Picking your desired icon from the list will automatically add an icon to that component
        5. Add "import { Icon } from '@iconify/react/dist/iconify.js';" to the top of the react component

## Deployment

### Preview vs Production

https://www.storyblok.com/tp/create-preview-production-environments-and-deploy?utm_source=chatgpt.com

Storyblok encourages using separate, dedicated environments for preview and production, as this provides the flexibility to test code changes in a safe environment to preview them and only deploy the approved changes into production.

#### Vercel (Production) 

https://northstar-medical.vercel.app/ will be the preview space that content editors will use to make Storyblok changes without breaking the production website
- Open Storyblok
- Click Visual Editor
- Land on Vercel
- Edit freely without risk

#### Localhost

Developers can work using localhost to -
- Build locally (localhost)
- Push to the Git repo
- Vercel auto-deploys
- Validate in Visual Editor
- Publish content when ready

# Design

## Color design tokens
- Storyblok holds color databases for text and background options which will reflect custom css colors
- Globals.css holds custom CSS colors: @layer utilities (brand-specific, not Tailwind-native)
- Tailwind-native colors that are used as design tokens must be safelisted in tailwind.config


=======================================

# Notes from the original developer

The "build" folder contains the compiled website files.

Drag all the contents of the build folder into the root or /public directory of the site. It is usually a directory that may contain index.html.

The "source" folder contains the source code for the website.

=======================================