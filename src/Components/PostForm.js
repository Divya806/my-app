import React from 'react'
import axios from 'axios'

class PostForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
           userId: '',
           title: '',
           body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
       axios.post('https://jsonplaceholder.typicode.com/posts', this.state) 
       .then(response => { console.log(response) })
       .catch(error => {console.log(error)})
    }

    render() {
        const { userId , body, title} = this.state
        return(
            <form onSubmit={this.onSubmitHandler}>
            <div><input type="text" name="userId" value={userId} onChange={this.changeHandler}  /></div>
            <div><input type="text" name="body" value={body} onChange={this.changeHandler}  /></div>
            <div><input type="text" name="title" value={title} onChange={this.changeHandler}  /></div>

            <button type="submit">Click Me</button>
            </form>
        )
    }
}

export default PostForm