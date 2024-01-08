// Rendering Elements:
// In React, rendering refers to the process of converting React elements into actual DOM elements that can be displayed in the browser.
// React renders HTML to the web page by using a function called createRoot() and its method render().

import React from 'react';
import ReactDOM from 'react-dom/client';

const RenderingElements = () => {
    return (
        <div>
            <p>This is rendered element</p>
        </div>
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<RenderingElements />);

export default RenderingElements;

// Finished.