import Agents from "../Component/Agents"
import RestaurantCards from "../Component/RestaurantCards"
import FeaturesSection from "../Component/FeaturesSection"
import HomeFullScreen from "../Component/HomeFullScreen"
import Gallary from "../Component/Gallary"
import PropertyListing from "../Component/PropertyListing"
import AppPromo from "../Component/AppPromo"
import ChooseUsSection from "../Component/ChooseUsSection"
import PaginationComponent from "../Component/Pagination"
import Pricing from "../Component/Pricing"
import TeamMembers from "../Component/TeamMembers"
import FeatureCards from "../Component/FeatureCards"

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
            <PropertyListing />
            <Pricing />
            <Gallary />
        </div>
    )
}

export default Home