import React from "react";
import ReactDom from "react-dom/client";
import App from './App';


const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google'
)

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {reactElement}
        <App/>
        
        </React.StrictMode>
);