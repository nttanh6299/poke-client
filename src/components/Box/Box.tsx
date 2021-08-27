import styled from 'styled-components'

interface IBoxProps {
  width?: string
  height?: string
  backgroundColor?: string
  color?: string
  marginTop?: number
  marginLeft?: number
  marginRight?: number
  marginBottom?: number
  paddingTop?: number
  paddingLeft?: number
  paddingRight?: number
  paddingBottom?: number
}

const Box = styled.div<IBoxProps>`
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.height && `height: ${props.height}`};

  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
  ${(props) => props.color && `color: ${props.color}`};

  ${(props) => props.marginTop && `margin-top: ${props.marginTop}rem`};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft}rem`};
  ${(props) => props.marginRight && `margin-right: ${props.marginRight}rem`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}rem`};
  ${(props) => props.paddingTop && `padding-top: ${props.paddingTop}rem`};
  ${(props) => props.paddingLeft && `padding-left: ${props.paddingLeft}rem`};
  ${(props) => props.paddingRight && `padding-right: ${props.paddingRight}rem`};
  ${(props) =>
    props.paddingBottom && `padding-bottom: ${props.paddingBottom}rem`};
`

export default Box
