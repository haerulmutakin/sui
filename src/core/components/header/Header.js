import React from 'react';
import './Header.scss';
import { Button, Popover, Whisper, Toggle, Badge } from 'rsuite';
import { faMoon, faSignOutAlt, faCog, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuPopover = ({ onSelect, onThemToggle , ...rest }) => (
    <Popover {...rest}>
        <div className="iss-popover">
            <ul>
                <li className="iss-user-detail">
                    <div className="iss-user-detail-image">
                        <img src={process.env.PUBLIC_URL + '/luffy.png'} alt="profile-detail"/>
                    </div>
                    <div className="user-detail-info">
                        <p>Haerul Mutakin</p>
                        <span>Show your profile</span>
                    </div>
                </li>
                <div className="iss-divider"></div>
                <li>
                    <div className="" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <span><FontAwesomeIcon icon={faMoon} /> Dark mode</span>
                        <span><Toggle size="md" defaultChecked={rest.theme === 'dark'} onChange={onThemToggle} /></span>
                    </div>
                </li>
                <li>
                    <span><FontAwesomeIcon icon={faCog} /> Setting</span>
                </li>
                <div className="iss-divider"></div>
                <li>
                    <span><FontAwesomeIcon icon={faSignOutAlt} /> Logout</span>
                </li>
            </ul>
        </div>
    </Popover>
  );

function Header (props) {
    const triggerRef = React.createRef();
    function handleSelectMenu(eventKey, event) {
        triggerRef.current.hide();
    }
    return (
        <div className="iss-header">
            <div className="iss-brand">
                <img className="brand-logo" src={process.env.PUBLIC_URL + '/iss-app-logo.png'} alt=""/> SUI
            </div>
            <div className="iss-nav">
                <Whisper placement="bottom" trigger="click" triggerRef={triggerRef} speaker={<MenuPopover onSelect={handleSelectMenu} />}>
                    <Badge content='4'>
                        <div className="iss-button-bell">
                            <FontAwesomeIcon icon={faBell} />
                        </div>
                    </Badge>
                </Whisper>
                <Whisper placement="bottomEnd" trigger="click" speaker={<MenuPopover theme={props.theme} onThemToggle={() => props.onThemeChange()} />}>
                    <Button className="iss-button-user">
                        <div className="iss-nav-icon-user">
                            <img src={process.env.PUBLIC_URL + '/luffy.png'} alt="user-profile"/>
                        </div>
                        <div className="iss-nav-name-user">
                            Haerul
                        </div>
                    </Button>
                </Whisper>
            </div>
        </div>
    );
}

export default Header;