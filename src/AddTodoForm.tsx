import React, { ChangeEvent, FormEvent } from 'react'

interface AddTodoFormInterface {
  addTodo: (newTodo: string) => void,
}

const AddTodoForm: React.FC<AddTodoFormInterface> = ({
  addTodo
}) => {
  const [newTodo, setNewTodo] = React.useState("")
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newTodo === "") return
    addTodo(newTodo)
    setNewTodo("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={newTodo} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddTodoForm