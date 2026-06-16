import ContactBlock from "@/app/components/ContactBlock/ContactBlock";
import Feedback from "@/app/components/Feedback/Feedback";
import GenericHero from "@/app/components/GenericHero/GenericHero";
import Video from "@/app/components/Video/Video";
import { servicesHero } from "@/app/content/heroes";
import PageLayout from "@/app/pageLayout";

export default function Services(){
    return(
        <PageLayout>
            <GenericHero {...servicesHero}/>
            <Video />
            <Feedback />
            <ContactBlock />
        </PageLayout>
    )
}