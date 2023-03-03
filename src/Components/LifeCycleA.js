import React from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends React.Component {

    constructor(props) {
        console.log('LifeCycleA Constructor')
        super(props)
        this.state ={

        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA staticderivedStatefromerror')
        return null
        
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }

    render() {
        console.log("LifeCycleA render")
        return(
            <>
            <div>LifeCycleA</div>
            <LifeCycleB />
            </>
        )
    }
}

export default LifeCycleA