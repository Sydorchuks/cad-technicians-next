import AboutContent from "@/app/components/AboutContent/AboutContent";
import ContactBlock from "@/app/components/ContactBlock/ContactBlock";
import Feedback from "@/app/components/Feedback/Feedback";
import GenericHero from "@/app/components/GenericHero/GenericHero";
import { aboutHero } from "@/app/content/heroes";
import PageLayout from "@/app/pageLayout";

export default function About(){
    return(
        <PageLayout>
            <GenericHero {...aboutHero} />
            <AboutContent />
            <Feedback />
            <ContactBlock />
        </PageLayout>
    )
}