import React from 'react'
import './App.css'
import Alert from './components/Alert'
import Counter from './components/Counter'

const App = () => {
  return (
    <div className="container">
        <div className="counter">
            <Counter />
        </div>
        <div className="alert-side">
          <Alert />
        </div>
    </div>
  )
}

export default App
