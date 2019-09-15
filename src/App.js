import React from 'react'
import './App.css'
import Alert from './components/Alert'
import Counter from './components/Counter'
import { AlerTContainer } from './components/alertContainer'

const App = () => {
  return (
    <div className="container">
      <div className="counter">
        <Counter />
      </div>
      <AlerTContainer>
        <Alert />
      </AlerTContainer>
    </div>
  )
}

export default App
