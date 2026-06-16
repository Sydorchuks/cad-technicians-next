import ContactBlock from "@/app/components/ContactBlock/ContactBlock";
import Feedback from "@/app/components/Feedback/Feedback";
import GenericHero from "@/app/components/GenericHero/GenericHero";
import PageLayout from "@/app/pageLayout";

export default function About(){
    return(
        <PageLayout>
            <GenericHero
                bgText="ABOUT US"
                title="ABOUT US"
                description={
                    <>
                        Survey Drafters has decades of experience in the land surveying industry,
                        and our ability to work virtually with professionals across the country is what sets us apart from the rest.
                        We minimize your expenses and maximize your productivity by using your field data to create high-quality AutoCAD drawings.
                        You can take on more clients and promise a faster turnaround time to your clients by partnering{" "}
                        <br className="hidden xl:block" />
                        with Survey Drafters.
                    </>
                }
            />
            <Feedback />
            <ContactBlock />
        </PageLayout>
    )
}