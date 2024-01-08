// Conditional Rendering:
// In React, you can conditionally render a components.
// There are several ways to do this: if Statement, Ternary Operator, and Logical && Operator.

// if Statement:
// We can use the if JavaScript statement to decide which component to render.

import React, { useState } from 'react';

const ConditionalRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if (isLoggedIn) {
        return <p>Welcome User</p>;
    }
    else {
        return <button onClick={() => setIsLoggedIn(true)}>Log In</button>;
    }
};

export default ConditionalRendering;

// Ternary Operator:
// We can also use the Ternary Operator to decide which component to render.
// import React, { useState } from 'react';
// const ConditionalRendering = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     return (
//         <div>
//             {
//                 isLoggedIn ? <p>Welcome User</p> : <button onClick={() => setIsLoggedIn(true)}>Log In</button>
//             }
//         </div>

//     );
// };
// export default ConditionalRendering;


// Logical && Operator:
// We can also use the Logical && Operator to decide which component to render.
// import React, { useState } from 'react';
// const ConditionalRendering = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     return (
//         <div>
//             {
//                 (isLoggedIn && <p>Welcome User</p>) || (<button onClick={() => setIsLoggedIn(true)}>Log In</button>)
//             }
//         </div>
//     );
// };
// export default ConditionalRendering;


// Finished.