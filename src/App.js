import React from 'react'
import './App.css'
//redux
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from './actions/counterActions'

const App = () => {
  const Counter = useSelector(({Counter}) => Counter)
  const isLogged = useSelector(({auth}) => auth)
  const {counter} = Counter
  const dispatch = useDispatch()

  return (
      <div className="container">
        <h1>Counter: {counter}</h1>
        <button
          onClick={()=> dispatch(increment())}
        >+</button>
        <button
          onClick={()=> {
            if(counter > 0) {
              dispatch(decrement())
            } else {
              alert(`counter is already ${counter}`)
            }
          }}
        >-</button>
        {
          isLogged ? <h3>information</h3> : null
        }
      </div>
  )
}

export default App
