import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import '../Style/Navbarr.css'
import {Link} from "react-router-dom";

const Navbarr = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
        return(
            <div>
                <Navbar light expand="md">

                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>

                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/About">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Work">Work</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Contact">Contact</NavLink>
                        </NavItem>
                    </Nav>

                    </Collapse>
                </Navbar>
            </div>
        )
}

export default Navbarr;


/*                        <li className="list-item"><Link to='/Portfolio'>Portfolio</Link></li>
*/

/*
            <div className="navbar">
                
                <div className="container">
                    
                    <ul className="ul-list">
                        <li className="list-item"><Link to='/'>Home</Link></li>
                        <li className="list-item"><Link to='/About'>About</Link></li>
                        <li className="list-item"><Link to='/Work'>Work</Link></li>
                        <li className="list-item"><Link to='/Blog'>Blog</Link></li>
                        <li className="list-item"><Link to='/Contact'>Contact</Link></li>

                    </ul>
                    
                </div>
                
            </div>
            */