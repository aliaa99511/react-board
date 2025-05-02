import AppLanding from "../Component/AppLanding"
import AboutFullScreen from "../Component/AboutFullScreen"
import DigitalProductSection from "../Component/DigitalProductSection"
import PropertyListing from "../Component/PropertyListing"
import RestaurantSection from "../Component/RestaurantSection"

const About = () => {
    return (
        <div>
            <AboutFullScreen />
            <AppLanding />
            <PropertyListing />
            <DigitalProductSection />
            <RestaurantSection />
        </div>
    )
}
export default About
