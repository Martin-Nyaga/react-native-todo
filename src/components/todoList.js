import React from 'react'
import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native'

export default class TodoList extends React.Component {
  render () {
    return (
      <View>
        <FlatList
          data={this.props.todos}
          renderItem={({item}) => <Text style={styles.item}>{item.text}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    paddingTop: 20,
    paddingBottom: 20
  }
})
