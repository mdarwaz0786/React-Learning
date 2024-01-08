// Handling Events:
// Just like HTML DOM events, React can perform actions based on user events.
// React has the same events as HTML.
// React events are written in camelCase syntax.
// React event handlers are written inside curly braces.
// To pass an argument to an event handler, use an arrow function.
// Event handlers have access to the React event that triggered the function.

import React from 'react';

const HandlingEvents = () => {
    const shot = () => {
        alert("Great Shot");
    };

    return (
        <div>
            <button onClick={() => { alert("Welcome") }}>Click me</button><br />
            <button onClick={shot}>Take the shot</button>
        </div>
    );
};

export default HandlingEvents;

// Finished.
