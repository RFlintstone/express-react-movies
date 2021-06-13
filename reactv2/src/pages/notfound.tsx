// Requirements
import React from 'react';

// Render the page with specified data
const Home = () => {
    // Return data so it can be loaded by the client
    return (
        <div>
            <h1>We couldn't find what you were looking for</h1>
            <p>Do you want to go back to the <a href={'/'}>home</a> screen?</p>
        </div>
    );
};
// Export 'Home' so it can be loaded by the client
export default Home;