import React from 'react'
import TodoInterface from './interfaces/TodoInterface'

interface TodoListItemInterface {
  todo: TodoInterface,
  toggleTodo: (id: string) => void,
}

const TodoListItem: React.FC<TodoListItemInterface> = props => {
  return (
    <label 
      className={props.todo.complete ? "complete" : undefined}
    >
      <input type="checkbox" checked={props.todo.complete} onChange={() => props.toggleTodo(props.todo.id)} />
      {props.todo.text}
    </label>
  )
}

export default TodoListItem

