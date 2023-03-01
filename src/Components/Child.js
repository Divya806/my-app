import React from 'react'

function Child(props) {
    return(
        <div>
            <button onClick={() => props.greethandler('Child')}>Child</button>
        </div>
    )
}

export default Child