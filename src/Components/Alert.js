import React from 'react'

function Alert(props) {

    // const firstCap=(word)=>{
    //     const cap=word.toLowerCase();
    //     return cap.CharAt(0).toUpperCase()+ cap.slice(1);
    // }
    return (

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-1`} role="alert">
            <strong>{props.alert.type}</strong>:{props.alert.message}
        </div>

    )
}

export default Alert
