import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './globals.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { storyblokInit,  apiPlugin } from '@storyblok/react';
import ScrollToTop from './components/ScrollToTop';
import { HelmetProvider } from "react-helmet-async";


// Import React components here
import Hero from './storyblok/organisms/Hero';
import Attention from './storyblok/Attention';
import PhysicianShowcase from './storyblok/Physicians';
import ServicesGrid from './storyblok/ServicesGrid';
import AboutPractice from './storyblok/AboutPractice';
import LifeImpact from './storyblok/LifeImpact';
import ScheduleConsultation from './storyblok/ScheduleConsultation';
import AboutOurPractice from './pages/About';
import AllConditions from './pages/AllConditions';
import AllProcedures from './pages/AllProcedures';
import AppointmentPage from './pages/Appointment';
import AccessibilityStatement from './pages/AccessibilityStatement';
import ContactPage from './pages/Contact';
import ConditionTemplate from './storyblok/ConditionTemplate';
import ProcedureTemplate from './storyblok/ProcedureTemplate';
import Spine101 from './pages/Spine101';
import Section1557Statement from './pages/Section1557'
import PrivacyPractice from './pages/PrivacyPractice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BeforeYourVisit from './pages/PrepareForVisit';
import NoSurprisesAct from './pages/NoSurprisesAct';
import MISS from './pages/MISS';
import Page from './storyblok/Page';
import Banner from './storyblok/Banner';
import Column from './storyblok/Column';
import Columns from './storyblok/Columns';
import InfoCard from './storyblok/InfoCard';
import InsuranceAndForms from './pages/InsuranceForms';
import BookPage from './pages/GotYourBack';
import OurPhysicians from './pages/OurPhysicians';
import MeetDrShah from './pages/MeetDrShah';
import Section from './storyblok/Section';
import Header from './storyblok/organisms/Header';
import HeaderItem from './storyblok/atoms/HeaderItem';
import Card from './storyblok/Card';
import RichText from './storyblok/atoms/RichText';
import Button from './storyblok/atoms/Button';
import IconifyIcon from './storyblok/atoms/IconifyIcon';
import Section2ColAsym from './storyblok/Section2ColAsym';
import HeroBanner from './storyblok/organisms/HeroBanner';
import AccordionGroup from './storyblok/organisms/AccordianGroup';
import ThumbnailCard from './storyblok/ThumbnailCard';
import Grid from './storyblok/atoms/Grid';
import LinkBlok from './storyblok/atoms/LinkBlok';
import AudioCard from './storyblok/molecules/AudioCard';
import TableSection from './storyblok/TableSection';
import Section1Col from './storyblok/Section1Col';
import AccordionCard from './storyblok/molecules/AccordionCard';
import FeaturedCard from './storyblok/organisms/FeaturedCard';
import SectionWrapper from './storyblok/SectionWrapper';
import SubMenuItem from './storyblok/atoms/SubMenuItem';
import Footer from './storyblok/organisms/Footer';
import FooterLocation from './storyblok/molecules/FooterLocation';
import FooterLink from './storyblok/atoms/FooterLink';
import LogoList from './storyblok/LogoList';
import CardDoctorFeatured from './storyblok/molecules/CardDoctorFeatured';
import CardTreatment from './storyblok/molecules/CardTreatment';
import Layout2Columns from './storyblok/Layout2Columns';
import CardFeaturedImage from './storyblok/CardFeaturedImage';
import StatItem from './storyblok/StatItem';
import CardPresentation from './storyblok/molecules/CardPresentation';
import CardPublication from './storyblok/molecules/CardPublication';
import SEO from './storyblok/SEO';
import RufflePlayer from './storyblok/molecules/RufflePlayer';
import Map from './storyblok/molecules/Map';
import Heading from './storyblok/atoms/Heading';
import CardDoctorSimple from './storyblok/molecules/CardDoctor';
import SocialIcon from './storyblok/atoms/SocialIcon';
import { BasicCard } from './storyblok/molecules/BasicCard';
import HeaderItemMobile from './storyblok/molecules/HeaderItemMobile';
import SubSection from './storyblok/organisms/SubSection';
import MediaCard from './storyblok/molecules/MediaCard';
import { ResourceSubCard } from './storyblok/molecules/ResourceSubCard';
import SubHeading from './storyblok/atoms/SubHeading';
import IconText from './storyblok/molecules/IconText';
import CtaBanner from './storyblok/molecules/CTABanner';

// import Storyblok components here
storyblokInit({
  accessToken : process.env.REACT_APP_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {

    // global components
      footer: Footer,
      footer_link: FooterLink,
      footer_location: FooterLocation,
      header: Header,
      header_item: HeaderItem,
      sub_menu_item: SubMenuItem,
      page: Page,

    // home page components
      hero: Hero,
      attention: Attention,
      physician_showcase: PhysicianShowcase,
      services_grid: ServicesGrid,
      about_practice: AboutPractice,
      life_impact: LifeImpact,
      schedule_consultation: ScheduleConsultation,

    // page template components
      about_page: AboutOurPractice,
      accessibility_page: AccessibilityStatement,
      appointment_page: AppointmentPage,
      before_your_visit: BeforeYourVisit,
      condition: ConditionTemplate,
      conditions_page: AllConditions,
      contact_page: ContactPage,
      dr_shah: MeetDrShah,
      got_your_back_page: BookPage,
      insurance_page: InsuranceAndForms,
      miss_page: MISS,
      no_surprises_act: NoSurprisesAct,
      our_doctors: OurPhysicians,
      privacy_policy_page: PrivacyPolicy,
      privacy_practice_page: PrivacyPractice,
      procedure: ProcedureTemplate,
      procedures_page: AllProcedures,
      spine_101_page: Spine101,
      section_1557_page: Section1557Statement,


    // Page building components

      // Sections
        section: Section,
        section_1_col: Section1Col,
        section_wrapper: SectionWrapper,
        section_2_col_uneven: Section2ColAsym,
        sub_section: SubSection,

      // Layouts
        column: Column,
        columns: Columns,
        grid: Grid,
        layout_2_columns: Layout2Columns,

      // Molecules
        accordion_card: AccordionCard,
        audio_card: AudioCard,
        basic_card: BasicCard,
        card: Card,
        card_doctor_featured: CardDoctorFeatured,
        card_doctor_simple: CardDoctorSimple,
        card_featured_image: CardFeaturedImage,
        card_presentation: CardPresentation,
        card_publication: CardPublication,
        card_treatment: CardTreatment,
        cta_banner: CtaBanner,
        featured_card: FeaturedCard,
        info_card: InfoCard,
        media_card: MediaCard,
        resource_sub_card: ResourceSubCard,
        thumbnail_card: ThumbnailCard,

      // Atoms
        accordion_group: AccordionGroup,
        banner: Banner,
        button: Button,
        heading: Heading,
        hero_banner: HeroBanner,
        icon: IconifyIcon,
        icon_text: IconText,
        link: LinkBlok,
        logo_list: LogoList,
        map: Map,
        richtext: RichText,
        ruffle_player: RufflePlayer,
        seo: SEO,
        social_icon: SocialIcon,
        stat: StatItem,
        subheading: SubHeading,
        table_section: TableSection,
        header_item_mobile: HeaderItemMobile,
  }
})

const root = document.getElementById('root');

createRoot(root).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App/>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();