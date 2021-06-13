// Requirements
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Get pages
// import Page from './page';
import Home from './home';
import notfound from './notfound';

// Render the page with specified data
const pages = () => {
    // Return data so it can be loaded by the client
    return(
        <Router>
            <Route exact path="/" component= {Home} />
            <Route path = "/404" component = {notfound} />
            {/*<Route path = "/page" component = {Page} />*/}
        </Router>
    );
};
// Export 'pages' so it can be loaded by the client
export default pages;