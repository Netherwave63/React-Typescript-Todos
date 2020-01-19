import * as MyTypes from 'MyTypes'
import { actionTypes } from '../actions'

interface ITodo {
  text: string,
  complete: boolean
}

const initialState: Array<ITodo> = [
  {
    text: 'Read a book',
    complete: false
  }
]

export default function todoReducer(state: Array<ITodo> = initialState, action: MyTypes.RootAction): Array<ITodo> {
  switch(action.type) {
    case actionTypes.ADD:
      return AddTodo(state, action)
    case actionTypes.DELETE:
      return deleteTodo(state, action)
    case actionTypes.TOGGLE:
      return toggleTodo(state, action)
    default:
      return state
  }
}

function AddTodo(state: Array<ITodo>, action: MyTypes.RootAction) {
  return [
    ...state,
    {
      text: action.payload,
      complete: false
    }
  ]
}

function deleteTodo(state: Array<ITodo>, action: MyTypes.RootAction) {
  return state.filter((_, i) => i !== action.payload)
}

function toggleTodo(state: Array<ITodo>, action: MyTypes.RootAction) {
  return state.map((todo, i) => {
    if (i === action.payload) {
      return {
        ...todo,
        complete: !todo.complete
      }
    } else {
      return todo
    }
  })
}