import React from 'react'

class Fragment extends React.Component {

    render() {
        const items = [
            {
                title: "Game of thrones",
                name: "Divya"
            },
            {
                title: "Hello gross",
                name: "Bhavys"
            },
            {
                title: "Hello demands",
                name: "jasg"
            }
        ]
        return (
            <React.Fragment key={items.title} >
                {
                    items.map(item => <h2>{item.name} {item.title}</h2>)
                }
            </React.Fragment>
        )
    }
}
 
export default Fragment