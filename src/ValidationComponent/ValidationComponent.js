import React from 'react';

const validationComponent = ( props ) => {
    let howLong;
    if (props.length <= 5) {
        howLong = `Text too short`
    } else {
        howLong = `Text long enough`
    }

    return (
        <p>{howLong}</p> 
    )
}

export default validationComponent;