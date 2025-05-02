import Agents from "../Component/Agents"
import Cardes from "../Component/Cardes"
import Cartoon1 from "../Component/Cartoon1"
import HomeFullScreen from "../Component/HomeFullScreen"
import Gallary from "../Component/Gallary"
import Hotel from "../Component/Hotel"
import Mobiles from "../Component/Mobiles"
import Night from "../Component/Night"
import Paginate from "../Component/Paginate"
import Prices from "../Component/Prices"
import Teams from "../Component/Teams"
import Underscreen from "../Component/Underscreen"

const Home = () => {
    return (
        <div>
            <HomeFullScreen />
            <Underscreen />
            <Cartoon1 />
            <Night />
            <Teams />
            <Mobiles />
            <Cardes />
            <Paginate />
            <Agents />
            <Hotel />
            <Prices />
            <Gallary />
        </div>
    )
}

export default Home