import React from 'react' 

class LifeCycleB extends React.Component {
    constructor(props) {
        console.log('LifeCycleB constructor')
        super(props)
        this.state = {

        }
    }

    static getDerivedStateFromProps(props,state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log("LifeCycleB componentDidMount")
    }

    render() {
        console.log('LifeCycleB render called')
        return(
            <div>
                LifeCycleB
            </div>
        )
    }

}

export default LifeCycleB