import { connect } from 'react-redux'

import { addTodo } from '../actions/index'
import newTodoForm from '../components/newTodoForm'

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(addTodo(text))
    }
  }
}

const newTodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(newTodoForm)

export default newTodoFormContainer
