import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, } from 'reactstrap';
import '../Style/Navigation.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
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

export default Navigation;
