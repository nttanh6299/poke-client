import styled, { css } from 'styled-components'

interface IFlexProps {
  flexDirection?: 'row' | 'column'
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between'
  alignItems?: 'flex-start' | 'center' | 'flex-end'
  flexItem?: boolean
}

const Flex = styled.div<IFlexProps>`
  ${(props) =>
    props.flexItem
      ? css`
          flex: 1;
        `
      : css`
          display: flex;
          flex-direction: ${props.flexDirection};
          justify-content: ${props.justifyContent};
          align-items: ${props.alignItems};
        `}
`

export default Flex
