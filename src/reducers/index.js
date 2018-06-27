import { createStore } from 'redux'

import { ADD_TODO } from '../actions/index'

const initialState = {
  todos: []
}

function rootReducer (state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      let newTodo = {
        text: action.payload.text,
        complete: false
      }
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    default:
      return state
  }
}

export default store = createStore(rootReducer)

