// Keys:
// Keys are special attributes used to identify and track individual elements in a list.
// Keys help React identify which items have changed, added, and removed.
// Keys should be given to the elements inside the array to give the elements a stable identity.

import React from 'react';

const Keys = () => {

    const items = [
        {
            id: 1,
            text: 'Item 1'
        },
        {
            id: 2,
            text: 'Item 2'
        },
        {
            id: 3, text: 'Item 3'
        },
        {
            id: 4, text: 'Item 4'
        },
        {
            id: 5, text: 'Item 5'
        }
    ];

    const result = items.map((item) =>
        <li key={item.id}>{item.text}</li>
    );

    return (
        <div>
            <ul>{result}</ul>
        </div>
    );
};

export default Keys;

// Finished.