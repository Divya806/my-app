import React from 'react'

function MemoComp(props) {
    console.log("Memo comp render");
        return ( <div>Memo Component {props.name}</div>)
}

export default React.memo(MemoComp)