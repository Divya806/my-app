import React from 'react'
import Person from './Person'

function ListRendering() {
    const persons = [
    {
        id: 1,
        skill: "React",
        age: "28"
    },
    {
        id: 2,
        skill: "Angular",
        age: "29"
    },
    {
        id: 3,
        skill: "Chase",
        age: "30"
    }
]

    const personList = persons.map(person => <Person key={person.id} person={person} />)
    
    return <div>{personList}</div>
}

export default ListRendering