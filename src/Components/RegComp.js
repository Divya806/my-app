import React from 'react';

class RegComp extends React.Component {

    render() {
        console.log("Reg Comp render")
        return(
            <div>Reg Comp {this.props.name}</div>
        )
    }

}


export default RegComp