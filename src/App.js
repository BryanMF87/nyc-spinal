
import { Routes, Route } from 'react-router-dom';
import StoryblokContent from './storyblok/StoryblokContent';
import { useStoryblok, StoryblokComponent } from "@storyblok/react";
import { useLocation } from 'react-router-dom';


function App() {

  const location = useLocation();

  const globalSettings = useStoryblok("global-settings");

  const headerBlok = globalSettings?.content?.body?.find(
    (blok) => blok.component === "header"
  );

  const footerBlok = globalSettings?.content?.body?.find(
    (blok) => blok.component === "footer"
  );

  const isGlobalSettingsPage = location.pathname === "/global-settings";

  return (
    <>
      {!isGlobalSettingsPage && headerBlok && (
        <StoryblokComponent blok={headerBlok} />
      )}

        <main>
          <Routes>
            <Route path="/*" element={<StoryblokContent />} />
          </Routes>
        </main>

      {!isGlobalSettingsPage && footerBlok && (
        <StoryblokComponent blok={footerBlok} />
      )}
    </>
  );
}

export default App;