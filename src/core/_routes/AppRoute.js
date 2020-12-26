import React from 'react';
import { Route } from 'react-router-dom';

// componenets
import Home from 'core/components/home/Home';
import IssueDetail from 'core/components/issue-detail/IssueDetail';

function AppRoute() {
    return(
        <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/issue/:id" component={IssueDetail} />
        </React.Fragment>
    );
}

export default AppRoute;