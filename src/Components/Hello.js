import React from 'react'

// const Hello = () => {
//     return(
//         <div>
//             <h1>Hello Vishwas</h1>
//         </div>
//     )
// }

function Hello() {
    return(
        React.createElement('div', {id: "testing-id"}, React.createElement('h1', {className: "testing-class"} , 'Hello Vishwas'))
    )
}

export default Hello