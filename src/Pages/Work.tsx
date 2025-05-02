import TeamMembers from "../Component/Agents"
import ResumeBanner from "../Component/ResumeBanner"
import WorkFullScreen from "../Component/WorkFullScreen"
import Gallary from "../Component/Gallary"
import Pricing from "../Component/Pricing"

const Work = () => {
    return (
        <div>
            <WorkFullScreen />
            <ResumeBanner />
            <Pricing />
            <Gallary />
            <TeamMembers />
        </div>
    )
}

export default Work
