import styled, { css } from 'styled-components'

interface IDotProps {
  size: number
  color?: string
  circle?: boolean
  gutter?: number
}

const Dot = styled.span<IDotProps>`
  ${(props) => css`
    display: inline-block;
    width: ${props.size}px;
    height: ${props.size}px;
    background-color: ${props.color || props.theme.palette.common.gray};
    border-radius: ${props.circle ? '50%' : '0'};
    margin-left: ${props.gutter ? props.gutter : '0'}px;
    margin-right: ${props.gutter ? props.gutter : '0'}px;
  `}
`

export default Dot
