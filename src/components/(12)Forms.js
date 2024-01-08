// Forms:
// Just like in HTML, React uses forms to allow users to interact with the web page.

import React, { useState } from 'react';

const Forms = () => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const handleChange = (event) => {
        if (event.target.type === "text") {
            const capitalName = (event.target.value).toUpperCase();
            setName(capitalName);
        }
        else {
            setPassword(event.target.value);
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ name, password });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">Name</label><br />
                <input type="text" placeholder="Enter your first name" onChange={handleChange} id="firstName" /><br /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" placeholder="Enter your password" onChange={handleChange} id="password" /><br /><br />
                <button>submit</button>
            </form>
        </div>
    );
};

export default Forms;

// Finished.