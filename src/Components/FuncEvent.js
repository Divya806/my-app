import React from 'react'

function FuncEvent() {

    function handleClick() {
        alert("button clicked")
    }
    return <button onClick={handleClick}>Click Function</button>
}

export default FuncEvent