// State:
// State is a built-in feature in React that allows components to hold and manage their internal data.
// State can hold more complex data structures like objects or arrays. 
// It provides a way to store information that can change during the lifetime of a component. 
// When state changes, React automatically re-renders the component, updating the user interface to reflect the new state. 

import React, { useState } from 'react';

const State = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default State;

// Finished.