import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

const Wrapper = styled.div`
  padding: 10px;
`

const NavLinkWrapper = styled.div`
  & + & {
    margin-top: 4px;
  }

  &.active {
    a {
      color: red;
    }
  }

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      color: red;
    }
  }
`

const links = [
  {
    label: 'Home',
    value: '/',
  },
  {
    label: 'Pokemon',
    value: '/pokemon',
  },
  {
    label: 'Counter',
    value: '/counter',
  },
]

const Navbar: React.FC = () => {
  const location = useLocation()

  return (
    <Wrapper>
      {links.map(({ label, value }) => (
        <NavLinkWrapper
          key={value}
          className={location.pathname === value ? 'active' : ''}
        >
          <Link to={value}>{label}</Link>
        </NavLinkWrapper>
      ))}
    </Wrapper>
  )
}

export default Navbar
