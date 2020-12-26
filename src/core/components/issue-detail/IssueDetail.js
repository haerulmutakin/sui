import React, { useEffect, useState } from 'react';
import './IssueDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import IssueSearch from '../issue-search/IssueSearc';
import { issues } from 'database/issue';
import { comments } from 'database/comments';

function IssueDetail(props) {
    const [ issue, setIssue ] = useState(null);

    useEffect(() => {
        const filteredIssue = issues.filter(item => item.id === Number(props.match.params.id));
        setIssue(filteredIssue[0]);
    }, [props]);

    return(
        <React.Fragment>
            <IssueSearch />
            <p className="iss-detail-title">{issue?.title}</p>
            <div className="iss-status-container">
                <button className="iss-status-btn">
                    <span>{issue?.status}</span>
                    <div><FontAwesomeIcon icon={faCaretRight} /></div>
                </button>
                <p className="iss-author"><span>Muh Mbah Munawwar</span> open this issue Yesterday, 17:50</p>
            </div>
            <div className="iss-comments-container">
                <ul className="iss-comments">
                    {comments.map((item, index) => {
                        return <li key={index} className="iss-comment-item">
                            <img className="iss-user-comment-profile" src={process.env.PUBLIC_URL + '/luffy.png'} alt="user-profile" />
                            <div className="iss-comment">
                                <p className="iss-user-comment-name">{item.username}<span> {item.time}</span></p>
                                <p className="iss-comment-text">{item.content}</p>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </React.Fragment>
    );
}

export default IssueDetail;
