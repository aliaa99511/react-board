import React, { Component } from 'react'
import Fullscreen1 from '../Homefiles/Fullscreen1'
import Underscreen from '../Homefiles/Underscreen'
import Cartoon1 from '../Homefiles/Cartoon1'
import Night from '../Homefiles/Night'
import Teams from '../Homefiles/Teams'
import Mobiles from '../Homefiles/Mobiles'
import Cardes from '../Homefiles/Cardes'
import Paginate from '../Homefiles/Paginate'
import Agents from '../Homefiles/Agents'
import River from '../Homefiles/River'
import Hotel from '../Homefiles/Hotel'
import Prices from '../Homefiles/Prices'
import Gallary from '../Homefiles/Gallary'


export class Home extends Component {
    render() {
        return (
            <div>
               <Fullscreen1/>
               <Underscreen/>
               <Cartoon1/>
               <Night/>
               <Teams/>
               <Mobiles/>
               <Cardes/>
                <Paginate/>
                <Agents />
                <River/>
                <Hotel/>
                <Prices/>
                <Gallary/>

            </div>
        )
    }
}

export default Home
/*    background-image: -webkit-linear-gradient(90deg, #e78ae9 0%, #926ef8 100%);
*/