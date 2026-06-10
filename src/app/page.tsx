import Header from "./components/Header/Header";
import HomeAbout from "./components/HomeAbout/HomeAbout";
import HomeHero from "./components/HomeHero/HomeHero";

export default function Home(){
    return(<>
        <Header variant="dark-bg" />
        <HomeHero />
        <HomeAbout />
    </>)
}