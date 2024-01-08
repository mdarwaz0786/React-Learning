// Life Cycle Methods:
// Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
// The three phases are: Mounting, Updating, and Unmounting.
// Mounting: Mounting means putting component into the DOM.
// Updating: Updating means component is updated.
// Unmounting: Unmounting means component is removed from the DOM.

// Life Cycle Method in Functional component:
// The equivalent Hooks for the above lifecycle methods are:
// useState: Manages component state.
// useEffect: Combines the functionality of Mount, Update, and Unmount.

import React, { useState, useEffect } from 'react';

const LifecycleMethods = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setTime((t) => t + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <div>
            <p>Timer: {time}</p>
        </div>
    );
};

export default LifecycleMethods;

// Finished.