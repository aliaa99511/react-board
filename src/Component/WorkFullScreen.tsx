import '../Style/WorkFullScreen.css'
import { Link } from "react-router-dom";

const WorkFullScreen = () => {
    return (
        <div className="fullscreen3">
            <div className="os">
                <h1>Work</h1>
                <ul className="list-unstyled list">
                    <li className="list-item"><Link to='/'>Home / </Link></li>
                    <li className="list-item">  Work</li>
                </ul>
            </div>
        </div>
    )
}

export default WorkFullScreen
