import React, { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from "reactstrap"

import styled from "styled-components"

const HeaderWrapper = styled.div`
  @media (max-width: 960px) {
    position: fixed;
    top: 0;
    width: 100%;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.35);
    z-index: 999;
  }
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <HeaderWrapper>
      <Navbar color="white" light expand="md">
        {/* Empty brand so the toggle gets aligned to the right */}
        <NavbarBrand></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <AnchorLink href="#about" onClick={toggle}>
                <NavLink>About</NavLink>
              </AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#projects" onClick={toggle}>
                <NavLink>Projects</NavLink>
              </AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#contact" onClick={toggle}>
                <NavLink>Contact</NavLink>
              </AnchorLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </HeaderWrapper>
  )
}

export default Header
