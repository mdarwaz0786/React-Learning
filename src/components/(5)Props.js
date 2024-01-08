// Props:
// Props stands for properties.
// React Props are like function arguments in JavaScript and attributes in HTML.
// It allow you to pass data from parent component to child component.
// Props are Read-Only means child component can use the data provided by props, but it cannot modify them directly.

import React from 'react';

const Props = (props) => {
    return (
        <div>
            <p>My Name is {props.myName}</p>
            <p>My Age is {props.myBioData.age}</p>
            <p>My Qualification is {props.myBioData.qualification}</p>
            <p>My Address is {props.myBioData.address}</p>
            <p>My contact is {props.myBioData.contact}</p>
        </div>
    );
};

export default Props;

// Finished.