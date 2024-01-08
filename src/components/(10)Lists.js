// Lists:
// In React list generally refer to rendering arrays of elements in a component. 
// In React you will render list with some type of loop.
// The JavaScript map() array method is generally the preferred method.

import React from 'react'

const Lists = () => {

    const IPL = ["CSK", "MI", "RCB", "GT", "LSG"];
    const result = IPL.map((ipl) => <li key={ipl}>{ipl}</li>);

    return (
        <div>
            <ul>{result}</ul>
        </div>
    );
};

export default Lists;

// Finished.