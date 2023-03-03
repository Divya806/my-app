import React from 'react'
// import RegComp from './RegComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: "Vishwas"
        }
    }

componentDidMount = () => {
    setInterval(() =>{
        this.setState({
            name: "Vishwas"
        }) }
        , 2000)
}

    render() {
        console.log("parent Comp render")
        return(
            <div>
                Parent Comp render
                <MemoComp name={this.state.name}></MemoComp>
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp