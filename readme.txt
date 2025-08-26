The "build" folder contains the compiled website files.

Drag all the contents of the build folder into the root or /public directory of the site. It is usually a directory that may contain index.html.

The "source" folder contains the source code for the website.


Storyblok CMS - used to change content without code using reusable components defined on the Storyblok space and mapped to corresponding React components
Documentation - https://www.storyblok.com/technologies#react

1. index.js
    - import react components and storyblok component equivilants here via storyblokInit function
2. app.js
    - Fetch the home story of your Storyblok space. StoryblokComponent will resolve and render all of your Storyblok components.
3. Storyblok components
    - 