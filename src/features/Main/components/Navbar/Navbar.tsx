import React from 'react'
import styled from 'styled-components'
import { pokeTypes } from 'constants/global'
import Button from './components/Button'

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

interface INavbarProps {
  currentType: Model.InitialType
  onChangeType: (type: Model.InitialType) => void
}

const Navbar: React.FC<INavbarProps> = ({ currentType, onChangeType }) => {
  const wrapperStyle = { '--color': currentType.color } as React.CSSProperties

  const handleClick = (type: Model.InitialType) => () => {
    if (type.name === currentType.name) return
    onChangeType(type)
  }

  return (
    <Wrapper style={wrapperStyle}>
      <Content>
        {pokeTypes.map((type) => (
          <Button
            key={type.name}
            color={type.color}
            label={type.name}
            onClick={handleClick(type)}
            isActive={type.name === currentType.name}
          />
        ))}
      </Content>
    </Wrapper>
  )
}

export default Navbar
