import React from 'react';


const SimpleList = ({ list }) => (
    <div>
        <h1>HELLO</h1>
        <ul>
            {list.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
);

export default SimpleList;