import React from 'react';
import './button.css'
function Button(props) {
    return (
        <div className='btn-css'>
            {props.name}
        </div>
    );
}

export default Button;