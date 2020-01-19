import React, { ChangeEvent, FormEvent } from 'react'
import './App.css'
import { connect } from 'react-redux'
import * as MyTypes from 'MyTypes'
import { Dispatch } from 'redux'
import { actionTypes } from './actions'

interface ITodo {
  text: string,
  complete: boolean
}

interface IProps {
  todos: Array<ITodo>,
  addTodo: (text: string) => object,
  deleteTodo: (index: number) => object,
  toggleTodo: (index: number) => object
}

const App: React.FC<IProps> = ({
  todos,
  addTodo,
  deleteTodo,
  toggleTodo
}) => {

  const [todo, setTodo] = React.useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(todo)
    setTodo('')
  }

  const handleDelete = (index: number) => {
    deleteTodo(index)
  }

  const handleToggle = (index: number) => {
    toggleTodo(index)
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      <p>Pick your favorite todo</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={handleChange} required />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo, index) => 
        <section key={index}>
          <label className={todo.complete ? "complete" : undefined}>
            <input type="checkbox" checked={todo.complete} onChange={() => handleToggle(index)} />
            {todo.text}
          </label>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </section>
      )}
    </div>
  );
}

const mapStateToProps = (state: MyTypes.ReducerState) => ({
  todos: state
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: (text: string) => dispatch({ type: actionTypes.ADD, payload: text }),
  deleteTodo: (index: number) => dispatch({ type: actionTypes.DELETE, payload: index }),
  toggleTodo: (index: number) => dispatch({ type: actionTypes.TOGGLE, payload: index })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

