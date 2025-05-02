import Agents from "../Component/Agents"
import Cvinformat from "../Component/Cvinformat"
import WorkFullScreen from "../Component/WorkFullScreen"
import Gallary from "../Component/Gallary"
import Prices from "../Component/Prices"

const Work = () => {
    return (
        <div>
            <WorkFullScreen />
            <Cvinformat />
            <Prices />
            <Gallary />
            <Agents />
        </div>
    )
}

export default Work
