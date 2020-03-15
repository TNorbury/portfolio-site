import React from "react"
import dev from "../../assets/images/intro/dev.svg"
import background from "../../assets/images/backgrounds/intro_background3.svg"
import styled from "styled-components"

const Wrapper = styled.div`
  // padding-bottom: 4rem;
  height: 100%;
  background-image: url(${background});
  background-size: contain;
  background-position: right bottom;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    width: 100%;
    // margin-bottom: 2rem;
  }
`

const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    margin-right: 2.5rem;
    margin-left: 2.5rem;
  }
  margin-left: 5rem;
  margin-right: 0.5rem;
`

const StyledIntroText = styled.div`
  flex: 1;
  align-self: flex-start;
  padding-top: 20%;

  h1 {
    font-size: 36pt;
  }

  h3 {
    color: grey;
    font-size: 23pt;
    width: 50%;
    @media (max-width: 960px) {
      width: 100%;
      // margin-bottom: 2rem;
    }
  }

  @media (max-width: 960px) {
    width: 100%;
    // margin-bottom: 2rem;
    padding-top: 0.5%;
  }
`

const StyledImage = styled.div`
  flex: 0.75;
  // margin-bottom: 2rem;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
    // height: 90%
  }
  padding-left: 2rem;
  margin-top: 20%;
  // padding: 1.5rem 1.0875rem 1.45rem;
`

const Intro = () => (
  <Wrapper>
    <IntroWrapper>
      <StyledIntroText>
        <h1>Hello!</h1>
        <h3>I'm Tyler, a software engineer based in Portland, OR!</h3>
      </StyledIntroText>
      <StyledImage>
        <img src={dev} alt="" />
      </StyledImage>
    </IntroWrapper>
  </Wrapper>
)

export default Intro
