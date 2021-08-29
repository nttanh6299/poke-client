import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  padding: 10px;
`

const NavLink = styled.div`
  & + & {
    margin-top: 4px;
  }

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      color: red;
    }
  }
`

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <NavLink>
        <Link to="/">Pokemon</Link>
      </NavLink>
      <NavLink>
        <Link to="/counter">Counter</Link>
      </NavLink>
    </Wrapper>
  )
}

export default Navbar
