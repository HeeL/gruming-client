import React from 'react';
import Template from './app-template';
import Home from './home';
import { Router, Route, IndexRoute } from 'react-router';

export default () => {
    return (
        <Router>
            <Route path="/" component={ Template }>
                <IndexRoute component={ Home }/>
            </Route>
        </Router>
    );
};
