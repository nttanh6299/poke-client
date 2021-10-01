import { ComponentStory, ComponentMeta } from '@storybook/react'
import Container from 'components/Container'

export default {
  title: 'Component/Container',
  component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>Container</Container>
)

export const Regular = Template.bind({})
Regular.args = {}
