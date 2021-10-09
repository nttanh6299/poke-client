import styled from 'styled-components'

const Container = styled.div<{ bgColor?: string }>`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  background-color: ${(props) => props.bgColor ?? 'transparent'};
`

export default Container
