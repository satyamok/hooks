import React, { useState } from 'react'

const UseStateHooks = () => {

  const [count, setCount] = useState(0);

  const handleAdd =()=>{

  setCount((prev)=> prev+1);
  }
  return (
    <div>

      <button>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
     
    </div>
  )
}

export default UseStateHooks