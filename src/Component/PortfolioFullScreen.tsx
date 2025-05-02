import '../Style/PortfolioFullScreen.css'
import { Link } from "react-router-dom";

const PortfolioFullScreen = () => {
    return (
        <div className="fullscreen5">
            <div className="os">
                <h1>Portfolio</h1>
                <ul className="list-unstyled list">
                    <li className="list-item"><Link to='/'>Home / </Link></li>
                    <li className="list-item">  Portfolio</li>
                </ul>
            </div>
        </div>
    )
}

export default PortfolioFullScreen
