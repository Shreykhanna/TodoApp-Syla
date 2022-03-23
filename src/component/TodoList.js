import React, { useState, Fragment } from 'react'
import { Flex } from '@chakra-ui/react'
import { Tr, Td } from '@chakra-ui/react'
import CustomText from '../elements/CustomText'
import CustomTable from '../elements/CustomTable'
import CustomModel from '../elements/CustomModel'
import CustomButton from '../elements/CustomButton'
import TodoForm from './TodoForm'

export default function TodoList() {
  const [todos, setTodos] = useState([])

  const [selectedIndex, setSelectedIndex] = useState(-1)

  const [addTodoModelStatus, setAddTodoModelStatus] = useState(false)

  const completeTodo = (event, index) => {
    event.preventDefault()
    let dupArray = [...todos]
    dupArray[index]['isCompleted'] = true
    setTodos(dupArray)
  }
  const deleteTodo = (index) => {
    let dupArray = [...todos]
    const newTodo = dupArray.splice(index, 1)
    setTodos(dupArray)
  }

  const openAddTodoModel = () => {
    setAddTodoModelStatus(true)
  }

  const closeAddTodoModel = () => {
    setAddTodoModelStatus(false)
    setSelectedIndex(-1)
  }

  const handleTodo = (formVal) => {
    const duplicateTODO = [...todos, ...[formVal]]
    setTodos(duplicateTODO)
    closeAddTodoModel()
  }

  const openEditTodo = (index) => {
    setSelectedIndex(index)
    openAddTodoModel()
  }

  const handleUpdateTodo = (formData) => {
    let duplicateTODO = [...todos]
    duplicateTODO[selectedIndex] = formData
    setTodos(duplicateTODO)
    closeAddTodoModel()
    setSelectedIndex(-1)
  }

  return (
    <Fragment>
      <div className="m-b-2 text-center">
        <CustomText className="m-b-2 w-100 text-bold" fontSize="lg">
          Your TODO list for today
        </CustomText>
        <CustomButton onClick={openAddTodoModel} title="Add Todo" />
      </div>
      <CustomTable columns={['Index', 'Title', 'Description', 'Actions']}>
        {todos &&
          todos.map((todo, index) => {
            return (
              <Tr>
                <Td>
                  <CustomText>{index + 1}</CustomText>
                </Td>
                <Td>
                  <CustomText as={todo.isCompleted ? 's' : ''}>
                    {todo.title}
                  </CustomText>
                </Td>
                <Td>
                  <CustomText as={todo.isCompleted ? 's' : ''}>
                    {todo.description}
                  </CustomText>
                </Td>
                <Td>
                  <Flex>
                    <CustomButton
                      colorScheme="teal"
                      onClick={() => openEditTodo(index)}
                      title="Edit"
                      mr={2}
                    />
                    <CustomButton
                      colorScheme="red"
                      onClick={() => deleteTodo(index)}
                      title="Delete"
                      mr={2}
                    />

                    <CustomButton
                      colorScheme="purple"
                      onClick={(e) => completeTodo(e, index)}
                      title="Complete"
                      mr={2}
                    />
                  </Flex>
                </Td>
              </Tr>
            )
          })}

        {!todos.length && (
          <Tr>
            <Td colspan={4}>
              <CustomText>No Data Found</CustomText>
            </Td>
          </Tr>
        )}
      </CustomTable>
      <CustomModel
        isOpen={addTodoModelStatus}
        title={selectedIndex !== -1 ? 'Edit TODO' : 'Add TODO'}
        cancelEvent={closeAddTodoModel}
        noFooterBtn={true}
        modelBody={
          <TodoForm
            closeAddTodoModel={closeAddTodoModel}
            addTodo={handleTodo}
            editTodo={handleUpdateTodo}
            todo={selectedIndex >= 0 ? todos[selectedIndex] : null}
          />
        }
      />
    </Fragment>
  )
}
