// Lifting State Up:
// Send data from child component to parent component.

import React from 'react';

const LiftingStateUp = (props) => {
    const age = 23;

    return (
        <div>
            <p>My Age</p>
            <button onClick={() => props.alert(age)}>Click me</button>
        </div>
    );
};

export default LiftingStateUp;

// Finished.