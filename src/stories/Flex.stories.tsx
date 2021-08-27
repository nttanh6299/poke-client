import { ComponentStory, ComponentMeta } from '@storybook/react'
import Flex from 'components/Flex'

export default {
  title: 'Component/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => (
  <div style={{ width: '300px', height: '300px' }}>
    <Flex style={{ width: '100%', height: '100%' }} {...args}>
      <Flex flexItem>Item 1</Flex>
      <Flex flexItem>Item 2</Flex>
      <Flex flexItem>Item 3</Flex>
    </Flex>
  </div>
)

export const Regular = Template.bind({})
