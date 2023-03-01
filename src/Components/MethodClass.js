import React from 'react';
import Child from './Child';

class MethodClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ParentName: "Parent"
        }
    }

    greetHandler=(childName)=>{
        alert(`${this.state.ParentName} from ${childName}`)
    }

    render(){
    return(
        <div> {this.state.ParentName}
            <Child greethandler={this.greetHandler}  />
        </div>
    )
    }
}

export default MethodClass