import React from 'react';

const Scroll = (props) => {
    return (
        <div 
        style={{ overflowY: 'scroll',
         height: '100%',
         paddingTop: '80px' }}>
            {props.children}
        </div>
    )
};

export default Scroll;