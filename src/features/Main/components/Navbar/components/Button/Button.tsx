import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
  background-color: #f8f8f8;
  font-size: 0.8rem;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 4px;
  color: var(--color, #333);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  transition: 0.25s;

  &:hover {
    color: #fff;
    background-color: var(--color, #333);
  }

  &.active {
    color: #fff;
    background-color: var(--color, #333);
  }

  & + & {
    margin-top: 10px;
  }
`

interface IButtonProps {
  color: string
  label: string
  isActive?: boolean
  onClick: () => void
}

const Button: React.FC<IButtonProps> = ({
  label,
  color,
  isActive,
  ...props
}) => {
  const style = { '--color': color } as React.CSSProperties
  const className = isActive ? 'active' : ''

  return (
    <StyledButton
      data-testid="nav-button"
      className={className}
      style={style}
      {...props}
    >
      {label}
    </StyledButton>
  )
}

export default React.memo(Button)
