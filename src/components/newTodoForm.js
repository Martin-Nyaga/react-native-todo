import React from 'react'
import {
  Form,
  Input,
  Item,
  Button,
  Text
} from 'native-base'


export default class NewTodoForm extends React.Component {
  constructor (props) {
    super(props)

    this.__ = {}

    this.state = {
      text: ''
    }
  }

  addTodo () {
    this.props.addTodo(this.state.text)
    this.__.input.setNativeProps({ text: '' })
  }

  render () {
    return (
      <Form style={{ flexDirection: 'row' }}>
        <Item rounded style={{ flex: 1, marginRight: 10 }}>
          <Input
            onChangeText={(text) => this.setState({ text })}
            ref={el => this.__.input = el }
          />
        </Item>
        <Button
          onPress={this.addTodo.bind(this)}>
          <Text>Add Todo</Text>
        </Button>
      </Form>
    )
  }
}

