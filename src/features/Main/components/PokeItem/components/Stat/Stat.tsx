import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'
import Box from 'components/Box'
import getBarColor from 'utils/getBarColor'

const MAX_PROGRESS_VALUE = 140

const Wrapper = styled.div`
  & + & {
    margin-top: 12px;
  }
`

const Label = styled.span`
  font-weight: 600;
  font-size: 1.15rem;
  color: #bbb;
`

const Value = styled.span`
  font-size: 1.15rem;
  font-weight: 400;
  margin-left: 10px;
  margin-right: 10px;
  color: #555;
`

const Progress = styled.div`
  position: relative;
  border-radius: 6px;
  background-color: #eee;
  overflow: hidden;
  height: 15px;
`

const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--value, 0);
  height: 100%;
  background-color: var(--bg, #ccc);
  transition: width 0.25s, background-color 0.25s;
`

interface IStatProps {
  label: string
  value: number
}

const Stat: React.FC<IStatProps> = ({ label, value }) => {
  const progress = (value / MAX_PROGRESS_VALUE) * 100
  const style = {
    '--value': progress + '%',
    '--bg': getBarColor(progress),
  } as React.CSSProperties

  return (
    <Wrapper>
      <Flex alignItems="center">
        <Label>{label}</Label>
        <Box marginLeft={1} marginRight={1}>
          <Value>{value}</Value>
        </Box>
        <Flex flexItem>
          <Progress>
            <Bar style={style} />
          </Progress>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default Stat
