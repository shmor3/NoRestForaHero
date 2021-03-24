import React from 'react'

import './PageHeader.css'
import BackgroundVideo from '../components/BackgroundVideo'

const PageHeader = ({
  className = ''
}) => {
  return (
    <div className={`PageHeader relative ${className}`}>
      <section className="BackgroundVideo-section section">
        <BackgroundVideo poster="https://ucarecdn.com/69ba14a8-6481-4671-abb6-0e6f0d9c3e46/" videoTitle="NRFH">
          {"https://ucarecdn.com/e6979298-66d6-4245-b496-6e5a5d507135/" && <source src="https://ucarecdn.com/e6979298-66d6-4245-b496-6e5a5d507135/" type="video/mp4" />}
        </BackgroundVideo>
      </section>
    </div>
  )
}

export default PageHeader
