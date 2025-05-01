import React, { Component } from 'react'
import Fullscreen2 from '../Aboutfiles/Fullscreen2'
import Appco from '../Aboutfiles/Appco'
import Hotel from '../Aboutfiles/Hotel'
import Digital from '../Aboutfiles/Digital'
import Resturent from '../Aboutfiles/Resturent'
import Forrm from '../Aboutfiles/Forrm'


export class About extends Component {
    render() {
        return (
            <div>
               <Fullscreen2/>
               <Appco/>
               <Hotel/>
               <Digital/>
                <Resturent/>
               <Forrm/>
            </div>
        )
    }
}
export default About
