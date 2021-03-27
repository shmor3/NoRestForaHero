import React from 'react'
import './Footer.css'
import styled from 'styled-components'
import Logo from '../components/atoms/logo'
import Link from '../components/atoms/link'
import { media } from '../utils/media'

const FooterContainer = styled.footer`
  align-items: start;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1f 2fr 2fr;
  margin: 0rem 0.2rem 0rem 0.2rem;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  position: relative;

  @media ${media.lg} {
    grid-template-columns: 2fr 2fr 2fr;
  }
  .cR {
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: baseline;
    vertical-align: center;
    color: black;
    margin: 0.2rem 0.2rem 0.2rem 0.2rem;
    text-decoration: none;
    padding-top: 0.2rem;
  }
`
const BG = styled.div`
  background: transparent;
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: top;
  justify-content: center;
  text-align: center;
  margin: 0.2rem 0.2rem 0.2rem 0.2rem;
  position: relative;
  a {
    color: black;
    margin: 0.2rem 0.2rem 0.2rem 0.2rem;
    text-decoration: none;
  }
`

const Info = styled.div`
  max-width: 1111px;
  width: 90vw;
  margin: 0 auto;
`

const Contact = styled.div`
display: flex;
flex-wrap: nowrap;
position: relative;
flex-direction: column;
justify-content: center;
vertical-align: center;
text-align: center;
color: black;
margin: 0.2rem 0.2rem 0.2rem 0.2rem;
text-decoration: none;
padding-top: 0.2rem;
  a {
    color: black;
    margin: 0.2rem 0.2rem 0.2rem 0.2rem;
    text-decoration: none;
  }
`

const Social = styled.div`
display: flex;
flex-wrap: nowrap;
position: relative;
flex-direction: row;
justify-content: center;
vertical-align: center;
color: black;
margin: 0rem 0.2rem 0.2rem 0rem;
text-decoration: none;
  a {
    color: black;
    margin: 0.2rem 0.2rem 0.2rem 0.2rem;
    text-decoration: none;
  }
  .socialMedia {
    display: flex;
    align-items: baseline;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    align-items: center;
    justify-content: center;
    #fb {
      background-image: url("/facebook.png");
      width: 2rem;
    margin-right: 1rem;
    }
    #ig {
      background-image: url("/instagram.png");
      width: 2rem;
      margin-right: 1rem;
    }
    #tw {
      background-image: url("/twitter.png");
      width: 2rem;
      margin-right: 1rem;
    }
  }
`

const Navigation = styled.ul`
  display: flex;
  flex-direction: row;
  vertical-align: top;
  text-align: center;
  justify-content: center;
  list-style: none;
  margin: 0.2rem 0.2rem 0.2rem 0.2rem;
  li {
    padding: 0.75rem;
    color: black;
    text-decoration: none;
  }
`

export default () => (
  <BG>
    <Info>
      <footer className="footer">
        <FooterContainer>
          <div className="container taLeft">
          <Navigation>
              <li>
                <a href="/features">Features</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/terms-of-service">Terms</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy</a>
              </li>
            </Navigation>
          </div>
          <div className="container taCenter">
          <LogoContainer>
              <Link href="/">
                <Logo />
              </Link>
            </LogoContainer>
            <div className="cR">
              <a href="/">Copyright{' '}©{' '}{new Date().getFullYear()}{' '}norestforahero</a>
            </div>
          </div>
          <div className="container taRight">
          <Contact>
                <a href="mailto:info@google.com">support@gatsbystarter.com</a>
              </Contact>
            <Social>
            <div className="socialMedia">
            <a className="Logo" id="fb" href="https://www.facebook.com/"></a>
            <a className="Logo" id="ig" href="https://www.instagram.com/"></a>
            <a className="Logo"id="tw" href="https://www.twitter.com/"></a>
            </div>
            </Social>

          </div>
        </FooterContainer>
      </footer>
    </Info>
  </BG>
)
