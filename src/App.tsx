import React from 'react'
import './App.css'
import TodoListItem from './todoListItem'
import { v4 } from 'uuid'
import TodoInterface from './interfaces/TodoInterface'
import AddTodoForm from './AddTodoForm'

const initialTodos: Array<TodoInterface> = [
  {
    id: v4(),
    text: "feed the fish",
    complete: false,
  },
  {
    id: v4(),
    text: "build app",
    complete: true,
  }
]

const App: React.FC = () => {
  const [todos, setTodo] = React.useState(initialTodos)

  const toggleTodo = (id: string) => {
    setTodo(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete
        } 
      } else {
        return todo
      }
    }))  
  }

  const addTodo = (newTodo: string) => {
    setTodo([
      ...todos,
      {
        id: v4(),
        text: newTodo,
        complete: false,
      }
    ])
  }

  return (
    <div className="App">
      {todos.map((todo, index) => 
        <TodoListItem todo={todo} toggleTodo={toggleTodo} key={index} />
      )}
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
