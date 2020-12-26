import React from 'react';
import './IssuePanel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Whisper, Popover, Dropdown } from 'rsuite';

import { history } from 'core/_helpers/RouteHistory';

const MenuPopover = ({ onSelect, ...rest }) => (
    <Popover {...rest} full>
      <Dropdown.Menu onSelect={onSelect} style={{width: '200px'}}>
        <Dropdown.Item eventKey={1}>Show Issue</Dropdown.Item>
        <Dropdown.Item eventKey={2}>Watch Issue</Dropdown.Item>
        <Dropdown.Item eventKey={3}>Copy Issue Link</Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );

function IssuePanel (props) {
    const triggerRef = React.createRef();
    function handleSelectMenu(eventKey, event) {
        triggerRef.current.hide();
    }

    function HandlePanelClick() {
        history.push('issue/' + props.issue.id);
    }

    return(
        <div className="issue-panel-container" onClick={HandlePanelClick}>
            <span className="ellipsis-icon absolute">
                <Whisper placement="bottomEnd" trigger="click" triggerRef={triggerRef} speaker={<MenuPopover onSelect={handleSelectMenu} />}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </Whisper>
            </span>
            <div className="issue-top-content">
                <p className="issue-title">{props.issue.title}</p>
                <p className="issue-desc"><span className="action-user">{props.issue.by}</span> {props.issue.status} {props.issue.open_date}</p>
            </div>
            <div className="issue-left-content">
                <span className={'iss-issue-status ' + props.issue.status }>{props.issue.status}</span>
                <span className="comment-icon">
                    <React.Fragment> <FontAwesomeIcon icon={faCircle} /> <span>{props.issue.comment > 0 ? props.issue.comment : 'no '} comments</span></React.Fragment>
                </span>
            </div>
        </div>
    );
}

export default IssuePanel;