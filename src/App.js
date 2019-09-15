import React from 'react'
import './App.css'
import Alert from './components/Alert'
import Counter from './components/Counter'
import { AlerContainer } from './components/alertContainer'

const App = () => {
  return (
    <div className="container">
      <div className="counter">
        <Counter />
      </div>
      <AlerContainer>
        <Alert />
      </AlerContainer>
    </div>
  )
}

export default App
