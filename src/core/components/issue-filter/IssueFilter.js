import React from 'react';
import './IssueFilter.scss';
import { Dropdown } from 'rsuite';

function IssueFilter () {
    return (
        <div className="is-filter-container">
            <div className="left-filter">
                <label>Closed</label>
                <label>Open</label>
                <label>Watched Issue</label>
                <label>My Issue</label>
            </div>
            <div className="right-filter">
                <Dropdown title="Application" placement="bottomEnd" style={{fontWeight: 'bold'}}>
                    <Dropdown.Item style={{width: '200px'}}>UIIRAS</Dropdown.Item>
                    <Dropdown.Item style={{width: '200px'}}>UIIJadwal</Dropdown.Item>
                    <Dropdown.Item style={{width: '200px'}}>UIIAkademik</Dropdown.Item>
                    <Dropdown.Item style={{width: '200px'}}>UIIKurikulum</Dropdown.Item>
                    <Dropdown.Item style={{width: '200px'}}>UIIPerkuliahan</Dropdown.Item>
                </Dropdown>
                <Dropdown title="Sort" placement="bottomEnd">
                    <Dropdown.Item style={{width: '200px'}}>Newest</Dropdown.Item>
                    <Dropdown.Item style={{width: '200px'}}>Oldest</Dropdown.Item>
                    <Dropdown.Item style={{width: '200px'}}>Most commented</Dropdown.Item>
                    <Dropdown.Item style={{width: '200px'}}>Least commented</Dropdown.Item>
                    <Dropdown.Item style={{width: '200px'}}>Recently Update</Dropdown.Item>
                </Dropdown>
            </div>
        </div>
    );
}

export default IssueFilter;