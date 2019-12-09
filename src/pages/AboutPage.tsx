import React from 'react'
import { useHistory } from 'react-router-dom'
// components


const AboutPage: React.FC = () => {
  const history = useHistory()

  const handlerPush = () => {
    history.push('/')
  }

  return (
    <>
      <div className='container'>
        <h1>Страница информации</h1>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <button className='bt' type='button' onClick={handlerPush}>Обратно к списку дел</button>
      </div>
    </>
  )
}

export default AboutPage