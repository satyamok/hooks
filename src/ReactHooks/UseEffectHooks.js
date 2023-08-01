import React, { useEffect, useState } from 'react'

const UseEffectHooks = () => {

    const [screen, setScreen] = useState(window.innerWidth);
    const [count, setCount] = useState({
        num: 1,
        id:"hello"
    })
  const handleAdd =()=>{
    setCount((prev)=>{
        return {
            ...prev,
            num: prev.num +1,
        };
    });
  };
  useEffect(()=>{
window.addEventListener('resize', ()=>{
    setScreen(window.innerWidth);
});
console.log("hello");
 return ()=>{
  window.removeEventListener("resize")
  
 
}

},[count])
  return (
    <>
    <div>
     <button>-</button>
     <span>{count.num}</span>
     <span>{count.id}</span>
    
     <button onClick={handleAdd}>+</button>

     <hr/>
     <span>{screen}</span>
    </div>
    </>
  )
}
export default UseEffectHooks