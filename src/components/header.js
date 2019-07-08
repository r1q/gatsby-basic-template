import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { MdFingerprint, MdClear } from "react-icons/md"
import Headroom from "react-headroom"
import { useSpring, animated } from "react-spring"

const nav = css`
  margin-bottom: 1.45rem;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
  @media (max-width: 450px) {
    height: 4rem;
    width: 4rem;
    position: fixed;
    right: 1.3rem;
    bottom: 1.3rem;
    border-radius: 100%;
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    -moz-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow: 3px 3px 5px 6px #ccc;
  }
`
const Menu = styled.div`
  @media (max-width: 450px) {
    display: none;
  }
`
const MobileMenu = styled(animated.div)`
  @media (min-width: 450px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
`
const mobileItems = css`
  list-style: none;
  z-index: 55;
  font-size: 2rem;
  height: 10rem;
  margin-top: 10rem;
  margin-right: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const link = css`
  color: #ff9100;
  margin-bottom: 2rem;
`

const Header = ({ siteTitle }) => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  console.log(MobileMenu)
  const slider = useSpring({
    background: !toggle ? "white" : "rebeccapurple",
    width: !toggle ? "4rem" : "50rem",
    height: !toggle ? "4rem" : "50rem",
    bottom: !toggle ? "1.3rem" : "-18rem",
    right: !toggle ? "1.3rem" : "-18rem",
    zIndex: "50",
  })
  const menuicon = css`
    position: fixed;
    bottom: 40px;
    right: 25px;
  `
  const iconchange = useSpring({
    opacity: !toggle ? 1 : 0,
  })
  const fade = useSpring({
    display: !toggle ? "none" : "flex",
    opacity: !toggle ? 0 : 1,
  })
  return (
    <animated.header css={nav} style={slider}>
      <Menu>
        <Headroom>
          <Link
            to="/"
            style={{
              color: `rebeccapurple`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Headroom>
      </Menu>
      <MobileMenu onClick={() => setToggle(!toggle)}>
        <animated.div css={mobileItems} style={fade}>
          <Link to="/" css={link}>
            Home
          </Link>
          <Link to="/about" css={link}>
            About
          </Link>
          <Link to="/contact" css={link}>
            Contact
          </Link>
        </animated.div>
        <div css={menuicon}>
          <MdFingerprint size="3.5rem" color="#FF9100" />
        </div>
      </MobileMenu>
    </animated.header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
