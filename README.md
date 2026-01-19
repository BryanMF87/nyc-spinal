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

#### GoDaddy / cPanel (Prod)

GoDaddy will be the production space that the end user will see
- Used by real users
- NOT used for Visual Editor by content editors
- Uses Public API token
- Fetches published content only
- Stable, branded domain

#### Vercel (Preview) 

https://weitzman-storyblok.vercel.app/ will be the preview space that content editors will use to make Storyblok changes without breaking the production website
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

### Deploying React to GoDaddy / cPanel

https://www.google.com/search?q=react+to+cpanel&oq=react+to+cpanel&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMg0IAxAAGIYDGIAEGIoFMgcIBBAAGO8F0gEIMjUxNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:b8825258,vid:OVWIua3lbdo,st:0


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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
