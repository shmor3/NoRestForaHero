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
  margin: 0.2rem 0.2rem 0.2rem 0.2rem;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  position: relative;

  @media ${media.lg} {
    grid-template-columns: 2fr 2fr 2fr;
  }
  .cR {
    display: flex;
    position: relative;
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
  background: rgba(221, 221, 221, 0.253);
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
position: relative;
flex-direction: row;
justify-content: center;
vertical-align: center;
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

const Navigation = styled.ul`
  display: flex;
  flex-direction: row;
  vertical-align: top;
  justify-content: center;
  list-style: none;
  margin: 0.2rem 0.2rem 0.2rem 0.2rem;
  li {
    color: black;
    margin: 0.2rem 0.2rem 0.2rem 0.2rem;
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
                <Link href="/">News</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Company</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Legal</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </Navigation>
            <div className="cR">
              <a href="/">Copyright{' '}©{' '}{new Date().getFullYear()}{' '}norestforahero</a>
            </div>
          </div>
          <div className="container taCenter">
          <LogoContainer>
              <Link href="/">
                <Logo />
              </Link>
            </LogoContainer>
          </div>
          <div className="container taRight">
            <Social>
                <a href="/">Facebook</a>
                <a href="/">Instagram</a>
            </Social>
            <Contact>
                <a href="mailto:info@google.com">support@gatsbystarter.com</a>
              </Contact>
          </div>
        </FooterContainer>
      </footer>
    </Info>
  </BG>
)
