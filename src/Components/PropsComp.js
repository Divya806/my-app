import React from 'react'

function PropsComp(props) {
    console.log(props)

    return (
    <div>
    <h1>Hello {props.name} {props.heroName}</h1> 
    {props.children}
    </div>
    )
}

// class PropsComp extends React.Component {

//     render() {
//         return <h1>Hello {this.props.name} {this.props.heroName}</h1>
//     }
// }

export default PropsComp