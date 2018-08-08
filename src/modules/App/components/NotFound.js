import React from 'react';

const NotFound = ({ location }) => (
    <div>
        <h3>URL not found <code>{location.pathname}</code></h3>
    </div>
);

export default NotFound;