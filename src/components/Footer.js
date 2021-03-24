import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/norestforahero/">@norestforahero</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          Copyright © {new Date().getFullYear()}
          <a href="/"> norestforahero</a>.
        </span>
      </div>
    </footer>
  </div>
)
