import React, { useState } from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

const HeaderItem = styled.h6`
  font-size: 16pt;
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color="white" light expand="md">
      <NavbarBrand>
        {/* <HeaderItem>Home</HeaderItem> */}
      </NavbarBrand>
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
