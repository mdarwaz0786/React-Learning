// JSX:
// JSX stands for JavaScript XML.
// JSX allows us to write HTML in React.
// JSX converts HTML tags into react elements.
// React elements are lightweight representations of the user interface.
// With JSX you can write javascript expressions inside curly braces.
// The HTML code must be wrapped in one top level parent element or fragment.
// JSX follows XML rules, and therefore HTML elements must be properly closed.
// Use attribute className instead of class in JSX.
// React supports if statements, but not inside JSX.
// You should put the if statements outside of the JSX or you could use a ternary operator instead.

import React from 'react';

const Jsx = () => {
    const fullName = 'Md Arwaz';

    const user = {
        firstName: 'Md.',
        lastName: 'Arwaz'
    };

    const isLoggedIn = false;

    return (
        <div>
            <p>Hello {fullName}</p>
            <p>React is {5 + 5} times easy to learn than Angular.</p>
            {isLoggedIn ? <p>You are logged in</p> : <p>Please log in</p>}
            <p>Your full name is {user.firstName} {user.lastName}</p>
        </div>
    );
};

export default Jsx;

// Finished.
