import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
  todos: ITodo[]
  onToggle(id: number): void
  onRemove(id: number): void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  const onRemoveHandler = (id: number) => (event: React.MouseEvent) => {
    event.stopPropagation()
    onRemove(id)
  }

  const onToggleHandler = (id: number) => () => {
    onToggle(id)
  }
  if(todos.length === 0){
    return <p className='center'>Пока дел нет</p>
  }
  return (
      <ul>
        {todos.map(todo => {
          const classes = ['todo']
          if(todo.completed === true){
            classes.push('completed')
          }
          return(
            <li className={classes.join(' ')} key={todo.id}>
              <label>
                <input type='checkbox' checked={todo.completed} onChange={onToggleHandler(todo.id)}/>
                <span>{todo.title}</span>
                <i className='material-icons red-text' onClick={onRemoveHandler(todo.id)}>delete</i>
              </label>
            </li>
          )})
        }
      </ul>
  )
}

export default TodoList