import React, { useState } from 'react';
import './Core.scss';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'theme/global-style';
import { lightTheme, darkTheme } from 'theme/theme';

import Home from 'core/components/home/Home';
import Header from 'core/components/header/Header';

function Core () {
    const [ theme, setTheme ] = useState('dark');

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
                        <Home />
                    </div>
                </div>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default Core;