import ContactBlock from "./components/ContactBlock/ContactBlock";
import Feedback from "./components/Feedback/Feedback";
import HomeAbout from "./components/HomeAbout/HomeAbout";
import HomeHero from "./components/HomeHero/HomeHero";
import HomeHowItWorks from "./components/HomeHowItWorks/HomeHowItWorks";
import Video from "./components/Video/Video";
import PageLayout from "./pageLayout";

export default function Home(){
    return(
        <PageLayout>
            <HomeHero />
            <HomeAbout />
            <HomeHowItWorks />
            <Video />
            <Feedback />
            <ContactBlock />
        </PageLayout>
    )
}