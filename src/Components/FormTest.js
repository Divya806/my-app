import React from 'react'

class FormTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: "",
            userName: "",
            topic: "",
        }
    }

    handleUserChange = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    handleTopicChange = (e) => {
        this.setState({
            topic: e.target.value
        })
    }

    handleComments = (e) => {
        this.setState({
            comments: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        alert(`${this.state.comments} ${this.state.topic} ${this.state.userName}`)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>UserName</label>
                <input type="text" value={this.state.userName} onChange={this.handleUserChange} />
            </div>
            <div>
                <label>Comments</label>
                <input type="text" value={this.state.comments} onChange={this.handleComments} />
            </div>
            <div>
                <label>Skills</label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        )
    }
}

export default FormTest