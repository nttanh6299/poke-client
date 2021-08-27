import React, { Fragment } from 'react'
import styled from 'styled-components'
import Box from 'components/Box'
import Flex from 'components/Flex'
import Show from 'components/Show'
import Typography from 'components/Typography/Typography'
import formatName from 'utils/formatName'
import { pokeTypes } from 'constants/global'
import convertHgToPound from 'utils/convertHgToPound'

const Wrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
  position: relative;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  border-radius: 16px;
`

const BackFace = styled.div`
  position: absolute;
  left: 50%;
  top: 5%;
  transform: translateX(-50%);
  font-size: 9.5rem;
  font-weight: 700;
  color: #eae8e7;
`

const Content = styled.div`
  z-index: 1;
  padding-bottom: 16px;
`

const PokeImageWrapper = styled.div`
  background-color: transparent;
  width: 180px;
  height: 180px;
`

const PokeImage = styled.img`
  display: inline-block;
  width: 100%;
  height: auto;
  -webkit-filter: drop-shadow(0px 2px 4px #888);
  filter: drop-shadow(0px 2px 4px #888);
`

interface ICardProps {
  id: number
  weight: number
  height: number
  name: string
  avatar: string
  types: string[]
  abilities: string[]
}

const Card: React.FC<ICardProps> = ({
  id,
  weight,
  height,
  name,
  avatar,
  types,
  abilities,
}) => {
  return (
    <Box>
      <Wrapper>
        <BackFace>
          <Typography variant="h2">#{id}</Typography>
        </BackFace>
        <Content>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <PokeImageWrapper>
                <PokeImage alt={name} src={avatar} />
              </PokeImageWrapper>
            </Box>
            <Box>
              <Typography variant="h3" fontWeight={700} fontSize={1.6}>
                {formatName(name)}
              </Typography>
            </Box>
            <Box marginTop={0.25} marginBottom={0.8}>
              <Typography>
                <span>W: {convertHgToPound(weight)}lbs</span>
                <span>&nbsp;&bull;&nbsp;</span>
                <span>H: {height / 10}m</span>
              </Typography>
            </Box>
            <Box marginBottom={0.8}>
              <Flex>
                {types.map((type, index) => {
                  const variant = pokeTypes.find(({ name }) => name === type)
                  if (!variant) return null
                  return (
                    <Fragment key={index}>
                      <Typography
                        uppercase
                        fontWeight={600}
                        color={variant?.color}
                        fontSize={1.2}
                      >
                        {formatName(type)}
                      </Typography>
                      <Show when={index !== types.length - 1}>
                        <Typography variant="span">
                          &nbsp;&bull;&nbsp;
                        </Typography>
                      </Show>
                    </Fragment>
                  )
                })}
              </Flex>
            </Box>
            <Box marginBottom={0.5}>
              <Flex>
                {abilities.map((abi, index) => (
                  <Fragment key={index}>
                    <Typography fontSize={1.1} fontWeight={500}>
                      {formatName(abi)}
                    </Typography>
                    <Show when={index !== abilities.length - 1}>
                      <Typography variant="span">&nbsp;&bull;&nbsp;</Typography>
                    </Show>
                  </Fragment>
                ))}
              </Flex>
            </Box>
          </Flex>
        </Content>
      </Wrapper>
    </Box>
  )
}

export default Card
