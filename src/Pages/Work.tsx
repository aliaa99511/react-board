import TeamMembers from "../Component/Agents"
import ResumeBanner from "../Component/ResumeBanner"
import WorkFullScreen from "../Component/WorkFullScreen"
import Pricing from "../Component/Pricing"

const Work = () => {
    return (
        <div>
            <WorkFullScreen />
            <ResumeBanner />
            <Pricing />
            <TeamMembers />
        </div>
    )
}

export default Work
