import React, { ChangeEvent, FormEvent } from 'react'
import './App.css'

interface ITodo {
  text: string,
  complete: boolean,
}

const App: React.FC = () => {
  const [todo, setTodo] = React.useState<string>("")
  const [todos, setTodos] = React.useState<ITodo[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    addTodo(todo)
    setTodo("")
  }

  const addTodo = (text: string): void => {
    setTodos([
      ...todos,
      {
        text,
        complete: false
      }
    ])
  }

  const toggleTodo = (index: number): void => {
    setTodos(todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          complete: !todo.complete
        }
      } else {
        return todo
      }
    }))
  }

  const deleteTodo = (index: number): void => {
    setTodos(todos.filter((todo, i) => i !== index))
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={todo} required />
        <button type="submit">Submit</button>
      </form>
      {todos.map((todo, index) =>
        <section>
          <label key={index} className={todo.complete ? "complete" : undefined}>
            <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(index)} />
            {todo.text}
          </label>
          <button type="button" onClick={() => deleteTodo(index)}>Delete</button>
        </section>
      )}
    </div>
  );
}

export default App;

