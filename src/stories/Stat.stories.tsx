import { ComponentStory, ComponentMeta } from '@storybook/react'
import Stat from 'features/Main/components/PokeItem/components/Stat'

export default {
  title: 'PokeItem/Stat',
  component: Stat,
} as ComponentMeta<typeof Stat>

const Template: ComponentStory<typeof Stat> = (args) => (
  <div style={{ width: '400px' }}>
    <Stat {...args} />
  </div>
)

export const Regular = Template.bind({})
Regular.args = {
  label: 'Speed',
  value: 120,
}
