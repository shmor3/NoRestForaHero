import React from "react"
import styled from "styled-components"

class LinkTop extends React.Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  render() {
    return (
      <LinkTo onClick={() => this.scrollToTop()}>
        <h5>Top</h5>
      </LinkTo>
    )
  }
}

export default LinkTop

const LinkTo = styled.div`
  align-items: center;
  background-color: #fffa39;
  border-radius: 50rem;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  height: 10rem;
  position: sticky;
  text-align: center;
  transition: 0.50s;
  width: 10rem;
  margin-left: 78vw;

  &:hover {
    background-color: #fff;
    cursor: pointer;
  }

  h5 {
    margin: 0;
  }
`
