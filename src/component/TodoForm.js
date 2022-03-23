import React, { useState, useEffect, useRef } from 'react'
import { FormControl, Input, Button } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import CustomButton from '../elements/CustomButton'

export default function TodoForm(props) {
  const [title, setTitle] = useState(props.todo ? props.todo.title : '')
  const [description, setDescription] = useState(
    props.todo ? props.todo.description : '',
  )
  const [isCompleted, setIsCompleted] = useState(
    props.todo && props.todo.isCompleted ? true : false,
  )

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (props.todo) {
      props.editTodo({
        id: Math.floor(Math.random() * 1000),
        title: title,
        description: description,
        isCompleted: isCompleted,
      })
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        title: title,
        description: description,
        isCompleted: false,
      })
    }

    setTitle('')
    setDescription('')
  }
  return (
    <>
      <FormControl>
        <Input
          id="title"
          type="text"
          placeholder="Title"
          value={title}
          ref={inputRef}
          size="md"
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          id="description"
          type="text"
          size="md"
          mt="3"
          value={description}
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <Flex mt="4">
          <CustomButton mr="4" onClick={handleSubmit} title="Add Todo" />
          <CustomButton
            colorScheme="red"
            onClick={props.closeAddTodoModel}
            title="Cancel"
          />
        </Flex>
      </FormControl>
    </>
  )
}
