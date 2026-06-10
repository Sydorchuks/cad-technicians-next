import Header from "./components/Header/Header";
import HomeAbout from "./components/HomeAbout/HomeAbout";
import HomeHero from "./components/HomeHero/HomeHero";
import HomeHowItWorks from "./components/HomeHowItWorks/HomeHowItWorks";
import Video from "./components/Video/Video";

export default function Home(){
    return(<>
        <Header variant="dark-bg" />
        <HomeHero />
        <HomeAbout />
        <HomeHowItWorks />
        <Video />
    </>)
}