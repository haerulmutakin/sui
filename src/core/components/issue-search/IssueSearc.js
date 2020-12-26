import React from 'react';
import './IssueSearc.scss';
import { Icon, Button } from 'rsuite';

function IssueSearch () {
    return (
        <div className="is-searc-container">
            <div className="input-content">
                <input className="iss-search-input" placeholder="Search issue..." type="text" />
                <div className="iss-input-addon">
                    <Icon icon="search" />
                </div>
            </div>
            <Button className="button-iss" appearance="primary" color="red">New Issue</Button>
        </div>
    );
}

export default IssueSearch;