import ContactBlock from "./components/ContactBlock/ContactBlock";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeAbout from "./components/HomeAbout/HomeAbout";
import HomeHero from "./components/HomeHero/HomeHero";
import HomeHowItWorks from "./components/HomeHowItWorks/HomeHowItWorks";
import Video from "./components/Video/Video";
import DarkLayout from "./darkLayout";

export default function Home(){
    return(
        <DarkLayout>
            <HomeHero />
            <HomeAbout />
            <HomeHowItWorks />
            <Video />
            <Feedback />
            <ContactBlock />
        </DarkLayout>
    )
}