import Agents from "../Component/Agents"
import RestaurantCards from "../Component/RestaurantCards"
import FeaturesSection from "../Component/FeaturesSection"
import HomeFullScreen from "../Component/HomeFullScreen"
import PropertyListing from "../Component/PropertyListing"
import AppPromo from "../Component/AppPromo"
import ChooseUsSection from "../Component/ChooseUsSection"
import PaginationComponent from "../Component/Pagination"
import Pricing from "../Component/Pricing"
import TeamMembers from "../Component/TeamMembers"
import FeatureCards from "../Component/FeatureCards"
import RestaurantSection from "../Component/RestaurantSection"
import DigitalProductSection from "../Component/DigitalProductSection"
import AppLanding from "../Component/AppLanding"
// import Gallary from "../Component/Gallary"

const Home = () => {
    return (
        <div>
            <HomeFullScreen />
            <FeatureCards />
            <FeaturesSection />
            <ChooseUsSection />
            <TeamMembers />
            <AppPromo />
            <RestaurantCards />
            <PaginationComponent />
            <Agents />
            <AppLanding />
            <PropertyListing />
            <Pricing />
            <DigitalProductSection />
            <RestaurantSection />

            {/* <Gallary /> */}
        </div>
    )
}

export default Home