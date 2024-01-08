// Components: 
// We use two types of components in React: Functional Component And Class Component.
// Components are like functions that return HTML elements.
// Components are the building blocks of a React application.
// They encapsulate reusable pieces of user interface and can be composed together to create complex UIs.
// The component name must start with an upper case letter.
// It is recommended to split your components into separate files.

// Functional Component:
import React from 'react';

const Components = () => {
    return (
        <div>
            <p>This is Functional Component</p>
        </div>
    );
};

export default Components;

// Class Component:
// import React from 'react';
// class Components extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>This is a Class Component</p>
//             </div>
//         );
//     };
// };
// export default Components;

// Finished.