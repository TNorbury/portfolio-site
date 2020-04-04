import React from "react"
import styled from "styled-components"

import githubIcon from "../../../assets/icons/github/GitHub-Mark-120px-plus.png"
import linkedinIcon from "../../../assets/images/contact/linkedin.png"
import ContactForm from "./contact_form"

const ContactWrapper = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-top: 1.5rem;

  @media (max-width: 960px) {
    margin-right: 2.5rem;
    margin-left: 2.5rem;
    margin-bottom: 2.5rem;

    background-color: white;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  }
`

const ContactHeader = styled.h2`
  font-size: 23pt;
  color: black;
  @media (max-width: 960px) {
    margin-bottom: 0.5rem;
    font-size: 20pt;
  }
`

const ContactBody = styled.div`
  margin-right: 2.5rem;
  margin-left: 2.5rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    margin-right: 0rem;
    margin-left: 0rem;
  }
`

const ContactInfo = styled.div`
  width: 40%;

  margin-bottom: 1.5rem;

  @media (max-width: 960px) {
    width: 100%;
  }

  p {
    font-size: 15pt;

    @media (max-width: 960px) {
      font-size: 13pt;
    }
  }
`
const ContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

const ContactItem = styled.li`
  margin-right: 10px;

  img {
    width: 32px;
    height: 32px;
  }
`

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <ContactHeader>Contact me!</ContactHeader>
      <ContactBody>
        <ContactInfo>
          <p>
            I'm not currently looking for work, but if you want to reach out and
            chat, here are some of the places that you can find me:
          </p>
          <ContactList>
            <ContactItem>
              <a href="https://www.linkedin.com/in/tylernorbury/">
                <img src={linkedinIcon} alt="Linkedin icon, black" />
              </a>
            </ContactItem>
            <ContactItem>
              <a href="https://github.com/TNorbury">
                <img src={githubIcon} alt="Github icon" />
              </a>
            </ContactItem>
            {/* <ContactItem>
              <a href="mailto:develop@tylernorbury.com">
                <img src={emailIcon} alt="email icon" />
              </a>
            </ContactItem> */}
          </ContactList>
        </ContactInfo>

        {/* All the stuff related to the contact me form in here: */}
        <ContactForm />
      </ContactBody>
    </ContactWrapper>
  )
}

export default Contact
