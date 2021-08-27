import { ComponentStory, ComponentMeta } from '@storybook/react'
import Box from 'components/Box'

export default {
  title: 'Component/Box',
  component: Box,
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>1 unit = 1rem</Box>
)

export const Regular = Template.bind({})
