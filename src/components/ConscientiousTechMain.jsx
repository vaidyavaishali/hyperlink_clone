// import FirstCarouselSection from "./Carousels/Carousels"
// import Navbars from "./Navbar/Navbar"
import OurPartener from "./OurParteners/OurParteners"
import InfoAboutCompany from "./infoAboutCompany/InfoAboutCompany"
import OurKeyFeature from "./OurKeyFeature/OurKeyFeature"
import HeroSlider from "./HeroSlider/HeroSlider"
import ServiceWeOfferPage from "./ServiceWeOffer/ServiceWeOffer"
import IndustryWeServe from "./IndustryWeServe/IndustryWeServe"
import PartenerShipModelPage from "./PeternerShipModel/PartenerShipModel"
import ProcessWeFollowPage from "./ProcessWeFollow/ProcessWeFollow"
import Footer from "./Footer/Footer"
import { Helmet } from "react-helmet"
import { useEffect } from "react"
// import 
// import NavBar from "./NavBarr/NavBar"
// import OurParternePage from "./OurParteners/OurPartener"
// import Navbar from "./Navbar/Navbar"

const ConscientiousTechMain = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    return (
        <div id="ct-main-div">
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content='conscientious technology about page' />
                <meta name='keywords' content='aboout page' />
                <title>
                    Conscientious Technology pvt lmt</title>
            </Helmet>
            <HeroSlider />
            <OurPartener />
            <InfoAboutCompany />
             <OurKeyFeature />
            <ServiceWeOfferPage />
            <ProcessWeFollowPage />
            <PartenerShipModelPage />
            <IndustryWeServe />



        </div>
    )

}
export default ConscientiousTechMain