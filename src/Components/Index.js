import React from 'react'

class Index extends React.Component {

    render(){
        const names = ["Bruce", "Clark","Diana"]
        const namesList = names.map((name, index) => <li key={index}>{index} {name}</li>)
        return(
            <div>{namesList}</div>
        )
    }
}

export default Index