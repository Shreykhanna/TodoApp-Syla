import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { Button, IconButton } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
export default function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    title: '',
    description: '',
  })

  const submitUpdate = (value) => {
    updateTodo(edit.id, value)
    setEdit({
      id: '',
      title: '',
      description: '',
    })
  }
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div key={todo.id}>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
      <IconButton
        onClick={() =>
          setEdit({
            id: todo.id,
            title: todo.title,
            description: todo.description,
          })
        }
        size="md"
        icon={<EditIcon />}
      >
        Edit
      </IconButton>
      <IconButton onClick={() => completeTodo(todo.id)} size="md">
        Complete
      </IconButton>
      <IconButton
        onClick={() => removeTodo(todo.id)}
        size="md"
        icon={<DeleteIcon />}
      >
        Delete
      </IconButton>
    </div>
  ))
}
