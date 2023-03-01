import React from 'react'

class Bind extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    // handleClick = () => {
    //     this.setState({
    //         message: "helo divyaayssa"
    //     })
    //     console.log(this);
    // }

    handleClick() {
        this.setState({
            message: "helo divyaayssa"
        })
        console.log(this);
    }

    render() {
        return (
            <div>
            <h1>{this.state.message}</h1>
            {/* <button onClick={()=>this.handleClick()}>onClick</button>
            <button onClick={this.handleClick.bind(this)}>onClick</button> */}
            <button onClick={this.handleClick}>onClick</button>
            </div>
        )
    }
}

export default Bind