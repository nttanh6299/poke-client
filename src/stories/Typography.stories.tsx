import { ComponentStory, ComponentMeta } from '@storybook/react'
import Typography from 'components/Typography'

export default {
  title: 'Component/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>1 unit = 1rem</Typography>
)

export const Regular = Template.bind({})
