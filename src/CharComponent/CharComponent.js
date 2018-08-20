import React from 'react';

const charComponent = ( props ) => {
    return (
        <div className='charComponent' onClick={props.delete} >{props.char}</div>
    )
}

export default charComponent;