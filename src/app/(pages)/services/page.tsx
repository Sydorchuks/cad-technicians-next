import ContactBlock from "@/app/components/ContactBlock/ContactBlock";
import Feedback from "@/app/components/Feedback/Feedback";
import GenericHero from "@/app/components/GenericHero/GenericHero";
import ServicesGrid from "@/app/components/ServicesGrid/ServicesGrid";
import Video from "@/app/components/Video/Video";
import { servicesHero } from "@/app/content/heroes";
import PageLayout from "@/app/pageLayout";

export default function Services(){
    return(
        <PageLayout>
            <GenericHero {...servicesHero}/>
            <ServicesGrid />
            <Video />
            <Feedback />
            <ContactBlock />
        </PageLayout>
    )
}