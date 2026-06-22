import ContactForm from "@/app/components/ContactForm/ContactForm";
import ContactHero from "@/app/components/ContactHero/ContactHero";
import PageLayout from "@/app/pageLayout";

export default function Contact(){
    return(
        <PageLayout headerVariant="light-bg">
            <ContactHero />
            <ContactForm />
        </PageLayout>
    )
}