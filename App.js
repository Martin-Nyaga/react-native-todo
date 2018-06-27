import React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
  Spinner
} from 'native-base'
import { StyleSheet } from 'react-native'
import Expo from 'expo'
import { Provider } from 'react-redux'

import store from './src/reducers/index'
import NewTodoFormContainer from './src/containers/newTodoForm'
import VisibleTodoList from './src/containers/visibleTodoList'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  // Load fonts asynchronously
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false })
  }

  render() {
    if (this.state.loading) {
      return <Spinner />
    }

    return (
      <Provider store={store}>
        <Container style={styles.container}>
          <Header>
            <Body>
              <Title>Todo list app</Title>
            </Body>
          </Header>
          <Content padder>
            <NewTodoFormContainer />
            <VisibleTodoList />
          </Content>
        </Container>
      </Provider>
    );
  }
}

const styles = {
  container: {
    marginTop: 24
  }
}
