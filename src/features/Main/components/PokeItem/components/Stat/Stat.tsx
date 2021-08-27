import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'
import getBarColor from 'utils/getBarColor'

const MAX_PROGRESS_VALUE = 140

const Wrapper = styled.div`
  & + & {
    margin-top: 16px;
  }
`

const Label = styled.span`
  flex: 0 0 140px;
  font-weight: 600;
  font-size: 1.15rem;
  color: #bbb;
  text-align: right;
`

const Value = styled.span`
  flex: 0 0 80px;
  display: inline-block;
  font-size: 1.15rem;
  font-weight: 400;
  color: #555;
  text-align: center;
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
        <Value>{value}</Value>
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
