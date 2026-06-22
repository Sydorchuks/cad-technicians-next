import ContactBlock from "@/app/components/ContactBlock/ContactBlock";
import Feedback from "@/app/components/Feedback/Feedback";
import HomeAbout from "@/app/components/HomeAbout/HomeAbout";
import HomeHero from "@/app/components/HomeHero/HomeHero";
import HomeHowItWorks from "@/app/components/HomeHowItWorks/HomeHowItWorks";
import Video from "@/app/components/Video/Video";
import PageLayout from "@/app/pageLayout";

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