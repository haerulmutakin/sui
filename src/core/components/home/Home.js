import React, { useEffect, useState } from 'react';
import './Home.scss';
import IssuePanel from '../issue-panel/IssuePanel';
import IssuFilter from '../issue-filter/IssueFilter';
import IssueSearch from '../issue-search/IssueSearc';

import { issues } from 'database/issue';

function Home () {
    const [ data, setData ] = useState(issues);

    useEffect(() => {
        setData(issues);
    }, []);

    return (
        <div className="home-content">
            <IssueSearch />
            <IssuFilter />
            {
                data.map((item, index) => {
                    return <IssuePanel issue={item}  key={index}/>
                })
            }
        </div>
    );
}

export default Home;