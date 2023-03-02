import React from 'react'
import '../App.css'
import styles from '../Test.module.css'

const heading = {
    fontSize: '72px',
    color: 'blue'
}
class Inline extends React.Component {
    render() {
        return(
            <div>
            <div style={heading}>Heading inline</div>
            <h2 className='primary'>Heading from primary</h2>
            <h4 className={styles.inline}>Success should be shown</h4>
            </div>
        )
        }
}

export default Inline