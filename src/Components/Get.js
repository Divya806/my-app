import React from 'react'
import axios from 'axios'

class Get extends React.Component {
    constructor(props) {
        super(props) 
        this.state =  {
            message: "Welcome",
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
        console.log(response)
            this.setState({
                posts: response.data})
            })
        .catch(error => console.log(error))
    }

    render(){
        const {posts} = this.state
         return(
            <div>
                <p>{this.state.message}</p>
                <div>
                    {
                    posts.map(post => <div key={post.id}>{post.id} {post.title}</div>)
                    }</div>
            </div>
        )
    }
}

export default Get