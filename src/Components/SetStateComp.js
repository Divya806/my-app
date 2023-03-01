import React from 'react';

class SetStateComp extends React.Component {
   constructor(props) {
        super(props) 
            this.state ={
                count: 0
            }
        }

        handleClick = () => {
            this.setState(prevState =>({
                count: prevState.count + 1
            }))
        }

        render() {
            return (
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>counter</button>
            </>
            )
        }
}

export default SetStateComp;