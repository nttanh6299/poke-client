import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.palette.common.gray};
    font-size: 0.8rem;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: ${theme.borderRadius}px;
    color: var(--color, ${theme.palette.common.black});
    box-shadow: ${theme.boxShadow} 0px 1px 2px 0px;
    transition: ${theme.transitionTiming}s;

    &:hover {
      color: ${theme.palette.common.white};
      background-color: var(--color, ${theme.palette.common.black});
    }

    &.active {
      color: ${theme.palette.common.white};
      background-color: var(--color, ${theme.palette.common.black})};
    }

    & + & {
      margin-top: 10px;
    }
  `}
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
