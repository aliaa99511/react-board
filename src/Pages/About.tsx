import AppLanding from "../Component/AppLanding"
import AboutFullScreen from "../Component/AboutFullScreen"
import DigitalProductSection from "../Component/DigitalProductSection"
import CallbackForm from "../Component/CallbackForm"
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
            <CallbackForm />
        </div>
    )
}
export default About
