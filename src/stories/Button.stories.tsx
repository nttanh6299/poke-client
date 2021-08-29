import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from 'features/Pokemon/components/Navbar/components/Button'

export default {
  title: 'Navbar/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ width: '120px' }}>
    <Button {...args} />
  </div>
)

export const Regular = Template.bind({})
Regular.args = {
  color: 'red',
  label: 'Button',
}

export const Active = Template.bind({})
Active.args = {
  color: 'red',
  isActive: true,
  label: 'Button',
}
