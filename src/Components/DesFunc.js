import React from 'react'

function DesFunc(props) {
    const {name, heroName} = props;
    
    return (
    <div>
    <h1>Hello {name} {heroName}</h1> 
    </div>
    )
}

export default DesFunc