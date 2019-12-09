import React, { useState, useEffect } from 'react'
// components
import { TodoForm } from '../components/TodoForm'
import TodoList from '../components/TodoList'
// interfaces
import { ITodo } from '../interfaces'

declare var confirm: (question: string) => boolean

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos')|| '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() =>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  const addHandler = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    console.log('Add new Todo', title)
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Вы уверены что вы хотите удалить компоннет?')
    // const shouldRemove = window.confirm('Вы уверены что вы хотите удалить компоннет?')
    if(shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }
  return (
    <>
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
    </>
  )
}

export default TodoPage