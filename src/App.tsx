import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// components
import Navbar from './components/Navbar'
import TodoPage from './pages/TodoPage'
import AboutPage from './pages/AboutPage'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='container'>
        <Switch>
          <Route component={TodoPage} path='/' exact />
          <Route component={AboutPage} path='/about' exact />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
