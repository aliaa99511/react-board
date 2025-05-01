import React, { Component } from 'react'
import '../Style/Video.css'

export class Video extends Component {
render() {
return (
    <div>
        <div className="video-bg wow fadeInLeft" data-wow-delay=".2s" >
            <img src="images/write.jpg" />
            <div className="video-icon">
                <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=clJGP8tl_FY&list=PLS2M5UBZ2pwOYQMFi7DgcXy8dywI7YE1k" tabIndex="0">
                    ::before
                    <i className="fas fa-play">
                        ::before
                    </i>
                </a>
                
            </div>
        </div>
    </div>
)
}
}

export default Video
