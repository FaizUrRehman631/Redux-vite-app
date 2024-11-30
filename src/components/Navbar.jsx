import React from 'react'
import { useSelector, useDispatch } from 'react-redux'



const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
    
    
  return (
    <>
    <h3 className='border rounded mb-3'>
     Welcome to the counter
    </h3>
    <h4>The initial count is: {count}</h4>
    </>
  )
}

export default Navbar;
