import React, { useRef } from 'react'
// useState,

interface TodoFormProps {
  onAdd(title: string): void
}

// export const TodoForm: React.FC<{onAdd(title: string): void}> = (props) => {
export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  // const [title, setTitle] = useState<string>('')

  const refTest = useRef<HTMLInputElement>(null)


  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  // const keyPressHandler = (event: React.KeyboardEvent) => {
  //   if(event.key === 'Enter') {
  //     console.log(title)
  //     setTitle('')
  //   }
  // }

  const keyPressHandler2 = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      onAdd(refTest.current!.value)
      refTest.current!.value = ''
    }
  }

  return (
    <div className='input-field mt2'>
      <input
        // onChange={changeHandler}
        onKeyPress={keyPressHandler2}
        // value={title}
        ref={refTest}
        type='text'
        id='title'
        placeholder='Введите названия дела'
      />
      <label className='active' htmlFor='title'>
        Введите названия дела
      </label>
    </div>
  )
}