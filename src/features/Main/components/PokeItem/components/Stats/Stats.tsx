import React from 'react'
import Box from 'components/Box'
import Stat from '../Stat'
import formatName from 'utils/formatName'

interface IStatsProps {
  stats: Model.Stat[]
}

const Stats: React.FC<IStatsProps> = ({ stats }) => {
  return (
    <Box>
      {stats?.map(({ base_stat, stat }) => (
        <Stat key={stat.name} label={formatName(stat.name)} value={base_stat} />
      ))}
    </Box>
  )
}

export default Stats
