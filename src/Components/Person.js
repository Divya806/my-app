import React from 'react'

function Person({person}){
    return(
        <div>I am {person.id} with {person.skill} and of age {person.age}</div>
    )
}

export default Person