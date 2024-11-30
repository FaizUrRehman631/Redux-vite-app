import React from 'react'
import { useSelector, useDispatch } from 'react-redux'



const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
    
    
  return (
    <h3 className='border rounded mb-3'>
      I'm a Navabar and Count is: {count}
    </h3>
  )
}

export default Navbar;
