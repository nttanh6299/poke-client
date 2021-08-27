import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card from 'features/Main/components/PokeItem/components/Card'

export default {
  title: 'PokeItem/Card',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
  <div style={{ width: '400px' }}>
    <Card {...args} />
  </div>
)

export const Regular = Template.bind({})
Regular.args = {
  id: 195,
  weight: 905,
  height: 17,
  name: 'Charizard',
  types: ['fire', 'flying'],
  abilities: ['blaze', 'solar-power'],
  avatar:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
}
