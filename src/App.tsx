import { Button, Pane, Text, majorScale } from 'evergreen-ui'

function App() {
  return (
    <Pane display="flex" alignItems="center" marginX={majorScale(2)}>
      <Button>Learn React</Button>
      <Text>This is a clickable Button</Text>
    </Pane>
  )
}

export default App
