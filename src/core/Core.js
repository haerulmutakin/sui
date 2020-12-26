import React, { useState } from 'react';
import './Core.scss';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'theme/global-style';
import { lightTheme, darkTheme } from 'theme/theme';

import  AppRoute from 'core/_routes/AppRoute';

import Header from 'core/components/header/Header';

function Core () {
    const [ theme, setTheme ] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
    }
    return (
        <React.Fragment>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />
                <div className="core-component">
                    <Header theme={theme} onThemeChange={toggleTheme} />
                    <div className="iss-main">
                        <AppRoute />
                    </div>
                    <div className="sticky-add-btn">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default Core;