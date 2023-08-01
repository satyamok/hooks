import React, { useCallback, useState } from 'react'

const Child = React.memo(({ handleChange, setShow }) => {
    console.log('child ran');

    return (
        <>
            <p>{handleChange()}</p>
            <button onClick={() => setShow(prev => !prev)}>Change</button>
        </>)

})

const USeCallBackHooks = () => {

    const [count, setCount] = useState(0);

    const handleAdd = () => {

        setCount((prev) => prev + 1);
    };

    const [show, setShow] = useState(false);

    const handleChange = useCallback(() => {

        return count * 2

    }, [count]);
    return (
        <div>

            <button>-</button>
            {show && <span>{count}</span>}
            <button onClick={handleAdd}>+</button>
            <Child handleChange={handleChange} setShow={setShow} />
        </div>
    )
}

export default USeCallBackHooks