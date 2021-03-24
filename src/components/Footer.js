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
  grid-template-columns: 1fr 2fr 1fr;
  margin: 0.2rem 0.5rem 0.3rem 0.5rem;
  padding-bottom: 0rem;
  position: relative;
  p {
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    color: black;
    text-decoration: none;
  }
  @media ${media.lg} {
    grid-template-columns: 1fr 2fr 1fr;
  }
`

const LogoContainer = styled.div`
  margin: 0.2rem 0.5rem 0.2rem 0.5rem;
  position: relative;
`

const Info = styled.div`
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0.5rem 0.2rem 0.2rem 0.5rem;
  a {
    color: black;
    margin-bottom: 0.5rem;
    text-decoration: none;
  }
`

const Social = styled.ul`
  display: flex;
  flex-direction: row;
  vertical-align: top;
  justify-content: center;
  list-style: none;
  margin: 0.2rem 0.5rem 0.2rem 0.5rem;
  a {
    color: black;
    margin-right: 0rem;
    margin-bottom: 0rem;
    text-decoration: none;
  }
`

const Navigation = styled.ul`
  display: flex;
  flex-direction: row;
  vertical-align: top;
  justify-content: center;
  list-style: none;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  li {
    color: black;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
  }
`

export default () => (
  <div>
    <footer className="footer">
      <FooterContainer>
      <div className="container taCenter">
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </div>
        <div className="container taCenter">
          <Navigation>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">News</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Company</Link>
            </li>
            <li>
              <Link href="/">Legal</Link>
            </li>
          </Navigation>
          <p>Copyright © {new Date().getFullYear()}{' '}<Link href="/">norestforahero</Link></p>
        </div>
        <div className="container taCenter">
        <Info>
          <Social>
              <li>
                <Link href="/">Facebook</Link>
              </li>
              <li>
                <Link href="/">Instagram</Link>
              </li>
           </Social>
           <Contact>
            <Link href="mailto:info@google.com">support@gatsbystarter.com</Link>
          </Contact>
        </Info>
        </div>
      </FooterContainer>
    </footer>
  </div>
)
