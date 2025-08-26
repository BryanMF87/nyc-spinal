import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navigate } from 'react-router-dom';
import { useStoryblok, StoryblokComponent } from '@storyblok/react';


import Home from './pages/Home';
import MeetDrTindel from './pages/MeetDrTindel';
import AboutOurPractice from './pages/About';

import BookPage from './pages/GotYourBack';
import CommonBackDiagnoses from './pages/CommonDiagnoses';
import Spine101 from './pages/Spine101';
import BeforeYourVisit from './pages/PrepareForVisit';
import InsuranceAndForms from './pages/InsuranceForms';
import ContactPage from './pages/Contact';
import AppointmentPage from './pages/Appointment';
import PrivacyPractice from './pages/PrivacyPractice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AccessibilityStatement from './pages/AccessibilityStatement';
import Section1557Statement from './pages/Section1557';
import NoSurprisesAct from './pages/NoSurprisesAct';
import LegalDisclaimer from './pages/LegalDisclaimer';
import MeetDrShah from './pages/MeetDrShah';
import OurPhysicians from './pages/OurPhysicians';
import AllConditions from './pages/AllConditions';
import AllProcedures from './pages/AllProcedures';
import MISS from './pages/MISS';
import DiscReplacementShah from './pages/DiscReplacementShah';

/* conditions */
import SpinalInfectionsCondition from './conditions/SpinalInfections';
import SpinalDeformCondition from './conditions/SpinalDeformities';
import FBSSCondition from './conditions/FBSS';
import SpineInstabilityCondition from './conditions/SpineInstability';
import CaudaEquinaCondition from './conditions/CaudaEquina';
import DegenerativeDiscDiseaseCondition from './conditions/DegenerativeDisc';
import SpondylitisCondition from './conditions/Spondylitis';
import SpinalArthritisCondition from './conditions/SpinalArthritis';
import SpinalStrainSprainCondition from './conditions/SpinalStrainSprain';
import VertebralSubluxationCondition from './conditions/VertebralSubluxation';
import SacroiliacJointDysfunctionCondition from './conditions/SacroiliacJointDysfunction';
import SacralTumorsCondition from './conditions/SacralTumors';
import TarlovCystsCondition from './conditions/TarlovCysts';
import CoccydyniaCondition from './conditions/Coccydynia';
import PostLaminectomySyndromeCondition from './conditions/Post-Laminectomy';
import LumbarRadiculopathySciaticaCondition from './conditions/LumbarRadiculopathy-Sciatica';
import LumbarSpondylolisthesisCondition from './conditions/LumbarSpondylolisthesis';
import LumbarFacetJointSyndromeCondition from './conditions/LumbarFacetJointSyndrome';
import LumbarKyphosisCondition from './conditions/LumbarKyphosis';
import LumbosacralRadiculopathyCondition from './conditions/LumboscralRadiculopathy';
import ScheuermannDiseaseCondition from './conditions/ScheuermannDisease';
import ThoracicMyelopathyCondition from './conditions/ThoracicMyelopathy';
import ThoracicFacetSyndromeCondition from './conditions/ThoracicFacetSyndrome';
import CervicalRadiculopathyCondition from './conditions/CervicalRadiculopathy';
import CervicalMyelopathyCondition from './conditions/CervicalMyelopathy';
import CervicalFractureCondition from './conditions/CervicalFracture';
import CervicalDeformityCondition from './conditions/CervicalDeformity';
import CervicalgiaNeckpainCondition from './conditions/CervicalgiaNeckPain';
import CervicalFacetSyndromeCondition from './conditions/CervicalFacetSyndrome';
import CervicalDiscitisCondition from './conditions/CervicalDiscitis';
import WhiplashInjuryCondition from './conditions/WhiplashInjury';
import SpinalCordCompressionCondition from './conditions/SpinalCordCompression';
import BackAndNeckCondition from './conditions/BackNeckPain';
import HerniatedDiscCondition from './conditions/HerniatedDisc';
import SpinalStenosisCondition from './conditions/SpinalStenosis';
import SpondylolysisCondition from './conditions/Spondylolysis';

/* surgical procedures */
import VertebroplastyProcedure from './procedures/Vertebroplasty';
import MicrodiscectomyProcedure from './procedures/Microdiscectomy';
import RevisionSpinalSurgeryProcedure from './procedures/RevisionSpinalSurgery';
import DiscReplacementProcedure from './procedures/DiscReplacement';
import LaminectomyProcedure from './procedures/Laminectomy';
import LaminotomyProcedure from './procedures/Laminotomy';
import ForaminotomyProcedure from './procedures/Foraminotomy';
import ACDFProcedure from './procedures/ACDF';
import PosteriorLumbarFusionProcedure from './procedures/PosteriorLumbarFusion';
import ALIFProcedure from './procedures/ALIF';
import XLIFProcedure from './procedures/XLIF';
import OLIFProcedure from './procedures/OLIF';
import SacroiliacJointInfusionProcedure from './procedures/SacroiliacJointInfusion';
import SpinalCordStimulatorProcedure from './procedures/SpinalCordStimulator';
import CorpectomyProcedure from './procedures/Corpectomy';
import SpinalDecompressionStenosisProcedure from './procedures/SpinalDecompressionStenosis';
import MISSProcedure from './procedures/MISS';

/* non-surgical procedures */
import RadiofrequencyAblationProcedure from './procedures/RadiofrequencyAblation';
import CorticosteroidInjectionProcedure from './procedures/CorticosteroidInjections';
import FacetJointInjectionProcedure from './procedures/FacetJointInjection';
import EpiduralInjectionProcedure from './procedures/EpiduralInjection';
import TriggerPointInjectionProcedure from './procedures/TriggerPointInjection';
import NerveBlockProcedure from './procedures/NerveBlock';
import PRPProcedure from './procedures/PRP';
import StemCellTherapyProcedure from './procedures/StemCell';
import WeightLossBackPainProcedure from './procedures/WeightLossBackPain';
import ChiropracticCareProcedure from './procedures/ChiropracticCare';
import AcupunctureProcedure from './procedures/Acupuncture';

/* test pages AND PAGES that are commented out*/

/* surgical-specialties */


const RedirectToZocDoc = () => {
  React.useEffect(() => {
    window.open('https://www.zocdoc.com/practice/new-york-center-for-spinal-disorders-130135?lock=true&isNewPatient=false&referrerType=widget', '_blank', 'noopener,noreferrer');
    
    window.history.back();
  }, []);
  
  return <div>Opening online scheduling in a new tab...</div>;
};


// This is a wrapper for Storyblok-powered pages
function StoryblokPage() {
  const { slug } = useParams();
  const storySlug = slug ? slug : "home";

  const story = useStoryblok(storySlug, { version: "draft" })
  if (!story || !story.content) {
    return <div>Loading...</div>
  }

  return <StoryblokComponent blok={story.content} />
}

function App() {
    return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Routes>

          
          <Route path="/meet-dr-shah" element={<Navigate to="/neel-shah-md" replace />} />

          <Route path="/" element={<Home />} />
          <Route path="/our-doctors" element={<OurPhysicians />} />
          <Route path="/meet-dr-tindel" element={<MeetDrTindel />} />
          <Route path="/neel-shah-md" element={<MeetDrShah />} />
          <Route path="/about-our-practice" element={<AboutOurPractice />} />
          <Route path="/ive-got-your-back" element={<BookPage />} />
          <Route path="/spine-101" element={<Spine101 />} />
          <Route path="/conditions-library" element={<AllConditions />} />
          <Route path="/procedures-library" element={<AllProcedures />} />
          <Route path="/common-diagnoses" element={<CommonBackDiagnoses />} />
          <Route path="/before-your-visit" element={<BeforeYourVisit />} />
          <Route path="/insurance-and-forms" element={<InsuranceAndForms />} />
          <Route path="/contact" element={<ContactPage />} />
          
          <Route path="/appointment" element={<RedirectToZocDoc />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy-practice" element={<PrivacyPractice />} />
          <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
          <Route path="/section1557-statement" element={<Section1557Statement />} />
          <Route path="/no-surprises-act" element={<NoSurprisesAct />} />
          <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
          <Route path="/minimally-invasive-spine-surgery" element={<MISS />} />
          <Route path="/disc-replacement-shah" element={<DiscReplacementShah />} />


          
          <Route path="/spinal-cord-compression" element={<SpinalCordCompressionCondition />} />
          <Route path="/spinal-infections" element={<SpinalInfectionsCondition />} />
          <Route path="/spinal-deformities" element={<SpinalDeformCondition />} />
          <Route path="/failed-back-surgery-syndrome" element={<FBSSCondition />} />
          <Route path="/spinal-instability" element={<SpineInstabilityCondition />} />
          <Route path="/cauda-equina-syndrome" element={<CaudaEquinaCondition />} />
          <Route path="/degenerative-disc-disease" element={<DegenerativeDiscDiseaseCondition />} />
          <Route path="/ankylosing-spondylitis" element={<SpondylitisCondition />} />
          <Route path="/spinal-arthritis" element={<SpinalArthritisCondition />} />
          <Route path="/spinal-strains-sprains" element={<SpinalStrainSprainCondition />} />
          <Route path="/vertebral-subluxation" element={<VertebralSubluxationCondition />} />
          <Route path="/sacroiliac-joint-dysfunction" element={<SacroiliacJointDysfunctionCondition />} />
          <Route path="/sacral-tumors" element={<SacralTumorsCondition />} />
          <Route path="/tarlov-cysts" element={<TarlovCystsCondition />} />
          <Route path="/coccydynia" element={<CoccydyniaCondition />} />
          <Route path="/post-laminectomy-syndrome" element={<PostLaminectomySyndromeCondition />} />
          <Route path="/lumbar-radiculopathy-sciatica" element={<LumbarRadiculopathySciaticaCondition />} />
          <Route path="/lumbar-spondylolisthesis" element={<LumbarSpondylolisthesisCondition />} />
          <Route path="/lumbar-facet-joint-syndrome" element={<LumbarFacetJointSyndromeCondition />} />
          <Route path="/lumbar-kyphosis" element={<LumbarKyphosisCondition />} />
          <Route path="/lumbosacral-radiculopathy" element={<LumbosacralRadiculopathyCondition />} />
          <Route path="/scheuermann-disease" element={<ScheuermannDiseaseCondition />} />
          <Route path="/thoracic-myelopathy" element={<ThoracicMyelopathyCondition />} />
          <Route path="/thoracic-facet-syndrome" element={<ThoracicFacetSyndromeCondition />} />
          <Route path="/cervical-radiculopathy" element={<CervicalRadiculopathyCondition />} />
          <Route path="/cervical-myelopathy" element={<CervicalMyelopathyCondition />} />
          <Route path="/cervical-fracture" element={<CervicalFractureCondition />} />
          <Route path="/cervical-deformity" element={<CervicalDeformityCondition />} />
          <Route path="/cervicalgia-neck-pain" element={<CervicalgiaNeckpainCondition />} />
          <Route path="/cervical-facet-syndrome" element={<CervicalFacetSyndromeCondition />} />
          <Route path="/cervical-discitis" element={<CervicalDiscitisCondition />} />
          <Route path="/whiplash-injury" element={<WhiplashInjuryCondition />} />
          <Route path="/herniated-discs" element={<HerniatedDiscCondition />} />
          <Route path="/spinal-stenosis" element={<SpinalStenosisCondition />} />
          <Route path="/back-and-neck-pain" element={<BackAndNeckCondition />} />
          <Route path="/spondylolysis" element={<SpondylolysisCondition />} />

          
          <Route path="/vertebroplasty" element={<VertebroplastyProcedure />} />
          <Route path="/microdiscectomy" element={<MicrodiscectomyProcedure />} />
          <Route path="/disc-replacement" element={<DiscReplacementProcedure />} />
          <Route path="/revision-spinal-surgery" element={<RevisionSpinalSurgeryProcedure />} />
          <Route path="/laminectomy" element={<LaminectomyProcedure />} />
          <Route path="/laminotomy" element={<LaminotomyProcedure />} />
          <Route path="/foraminotomy" element={<ForaminotomyProcedure />} />
          <Route path="/anterior-cervical-discectomy-and-fusion-acdf" element={<ACDFProcedure />} />
          <Route path="/posterior-lumbar-fusion-plif-tlif" element={<PosteriorLumbarFusionProcedure />} />
          <Route path="/anterior-lumbar-interbody-fusion-alif" element={<ALIFProcedure />} />
          <Route path="/extreme-lateral-interbody-fusion-xlif" element={<XLIFProcedure />} />
          <Route path="/oblique-lumbar-interbody-fusion-olif" element={<OLIFProcedure />} />
          <Route path="/sacroiliac-si-joint-fusion" element={<SacroiliacJointInfusionProcedure />} />
          <Route path="/spinal-cord-stimulator-permanent-implantation" element={<SpinalCordStimulatorProcedure />} />
          <Route path="/corpectomy" element={<CorpectomyProcedure />} />
          <Route path="/spinal-decompression-for-stenosis" element={<SpinalDecompressionStenosisProcedure />} />
          <Route path="/minimally-invasive-spine-fusion-mis-fusion" element={<MISSProcedure />} />

          
          <Route path="/radiofrequency-ablation" element={<RadiofrequencyAblationProcedure />} />
          <Route path="/corticosteroid-injections" element={<CorticosteroidInjectionProcedure />} />
          <Route path="/facet-joint-injections" element={<FacetJointInjectionProcedure />} />
          <Route path="/epidural-injections" element={<EpiduralInjectionProcedure />} />
          <Route path="/trigger-point-injections" element={<TriggerPointInjectionProcedure />} />
          <Route path="/nerve-blocks" element={<NerveBlockProcedure />} />
          <Route path="/prp-therapy" element={<PRPProcedure />} />
          <Route path="/stem-cell-therapy" element={<StemCellTherapyProcedure />} />
          <Route path="/weight-loss-back-pain" element={<WeightLossBackPainProcedure />} />
          <Route path="/chiropractic-care" element={<ChiropracticCareProcedure />} />
          <Route path="/acupuncture" element={<AcupunctureProcedure />} />

          {/* Fallback for CMS-driven pages */}
          <Route path="/*" element={<StoryblokPage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
  
}

export default App;