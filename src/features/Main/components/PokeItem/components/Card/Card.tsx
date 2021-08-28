import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import darken from 'polished/lib/color/darken'
import Box from 'components/Box'
import Flex from 'components/Flex'
import Show from 'components/Show'
import Typography from 'components/Typography'
import formatName from 'utils/formatName'
import { pokeTypes } from 'constants/global'
import convertHgToPound from 'utils/convertHgToPound'
import Dot from 'components/Dot'

const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 450px;
    margin: 0 auto;
    position: relative;
    background-color: ${theme.palette.common.white};
    box-shadow: ${theme.boxShadow} 0px 10px 30px;
    border-radius: ${theme.borderRadius * 4}px;
  `}
`

const BackFace = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 50%;
    top: 5%;
    transform: translateX(-50%);
    font-size: 9.5rem;
    font-weight: 600;
    color: ${darken(0.05, theme.palette.common.gray)};
  `}
`

const Content = styled.div`
  ${({ theme }) => css`
    z-index: 1;
    padding-bottom: ${theme.gutter}px;
  `}
`

const PokeImageWrapper = styled.div`
  background-color: transparent;
  width: 180px;
  height: 180px;
  margin-top: 6px;
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
              <Typography
                variant="h3"
                fontWeight={600}
                fontSize={1.6}
                color="#615E58"
              >
                {formatName(name)}
              </Typography>
            </Box>
            <Box marginTop={0.25} marginBottom={0.8}>
              <Flex alignItems="center">
                <Typography color="#87847E" fontSize={0.9}>
                  W: {convertHgToPound(weight)}lbs
                </Typography>
                <Dot size={6} color="#ccc" gutter={6} circle />
                <Typography color="#87847E" fontSize={0.9}>
                  H: {height / 10}m
                </Typography>
              </Flex>
            </Box>
            <Box marginBottom={0.8}>
              <Flex alignItems="center">
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
                        <Dot size={6} color="#ccc" gutter={6} circle />
                      </Show>
                    </Fragment>
                  )
                })}
              </Flex>
            </Box>
            <Box marginBottom={0.5}>
              <Flex alignItems="center">
                {abilities.map((abi, index) => (
                  <Fragment key={index}>
                    <Typography fontSize={1.1} fontWeight={500} color="#615E58">
                      {formatName(abi)}
                    </Typography>
                    <Show when={index !== abilities.length - 1}>
                      <Dot size={6} color="#ccc" gutter={6} circle />
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
