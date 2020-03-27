import React, { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color="white" light expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <AnchorLink href="#about">
              <NavLink>About</NavLink>
            </AnchorLink>
          </NavItem>
          <NavItem>
            <AnchorLink href="#projects">
              <NavLink>Projects</NavLink>
            </AnchorLink>
          </NavItem>
          <NavItem>
            <AnchorLink href="#contact">
              <NavLink>Contact</NavLink>
            </AnchorLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header
