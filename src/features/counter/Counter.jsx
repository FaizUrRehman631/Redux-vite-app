import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , multiply,reset, divide} from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button> 
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(multiply())}
        >
          Multiply
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(divide())}
        >
          Divide
        </button>
         <h1>{count}</h1>
         <h4>Functional counter using Redux toolkit store in vite app.</h4>
         <button
          aria-label="reset value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  )
}