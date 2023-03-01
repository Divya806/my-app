import React from 'react'

class ClassEvent extends React.Component {
    handleClick = () => {
        alert("button clicked")
    }

    render() {
        return(
            <button onClick={this.handleClick}>Class Button</button>
        )
    }
}

export default ClassEvent