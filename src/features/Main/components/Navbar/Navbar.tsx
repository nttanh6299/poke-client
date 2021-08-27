import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import { pokeTypes } from 'constants/global'

const Wrapper = styled.div`
  height: 100vh;
  width: 120px;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #fff;
    border-radius: 10px;
    background-color: #fff;
  }

  &::-webkit-scrollbar {
    width: 3px;
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color, #333);
  }
`

const Content = styled.div`
  padding: 10px;
`

const Navbar: React.FC = () => {
  const [active, setActive] = useState(pokeTypes[0])

  const wrapperStyle = { '--color': active.color } as React.CSSProperties

  return (
    <Wrapper style={wrapperStyle}>
      <Content>
        {pokeTypes.map((type) => (
          <Button
            key={type.name}
            color={type.color}
            label={type.name}
            onClick={() => setActive(type)}
            isActive={type.name === active.name}
          />
        ))}
      </Content>
    </Wrapper>
  )
}

export default Navbar
