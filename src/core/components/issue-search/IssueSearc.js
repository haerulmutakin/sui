import React from 'react';
import './IssueSearc.scss';
import { InputGroup, Input, Icon, Button } from 'rsuite';

function IssueSearch () {
    return (
        <div className="is-searc-container">
            <div className="input-content">
                <InputGroup>
                    <Input placeholder="Searc issue..." />
                    <InputGroup.Addon>
                        <Icon icon="search" />
                    </InputGroup.Addon>
                </InputGroup>
            </div>
            <Button className="button-iss" color="red">New Issue</Button>
        </div>
    );
}

export default IssueSearch;