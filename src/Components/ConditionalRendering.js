import React from 'react'

class ConditionalRendering extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
     
    render() {
     return this.state.isLoggedIn && "this is atesting"
     }
    }

export default ConditionalRendering