import React, { useMemo, useState } from 'react'

const UseMemoHooks = () => {
  const [count, setCount] = useState(0);
const [show, setShow] = useState(false);
  const handleAdd =()=>{

  setCount((prev)=> prev+1);
  }

  const handleChange=useMemo( ()=>{

    for(let i =0; i <1000000000; i++){
    }
    return count*2
  },[count])

  return (
    <div>
      <button>-</button>
     {console.log('hello first')}
     { show && <span>{count}</span>}
      <button onClick={handleAdd}>+</button>
      {console.log('hello second')}
     <p>{handleChange}</p>
     {console.log('third')}
     <button onClick={()=>setShow((prev)=> !prev)}>Change</button>
    </div>
  )
}
export default UseMemoHooks