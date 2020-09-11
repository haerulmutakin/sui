import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  .iss-header {
    background: ${({ theme }) => theme.header};
    transition: all 0.25s linear;
  }

  .rs-popover {
    background: ${({ theme }) => theme.header};
    transition: background 0.25s linear !important;
    .rs-popover-arrow {
      &:after {
        border-bottom-color: ${({ theme }) => theme.header} !important;
        transition: all 0.25s linear !important;
      }
    }
    transition: all 0.25s linear;
  }

  .rs-dropdown-menu {
    background: ${({ theme }) => theme.header} !important;
    li {
      a {
        color: ${({ theme }) => theme.text} !important;
        &:hover {
          background: ${({ theme }) => theme.body} !important;
        }
      }
    }
  }

  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  small {
    display: block;
  }
  button {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.text};
  }



  .iss-button-bell {
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text};
  }

  .iss-button-user {
    background: transparent !important;
    .iss-nav-name-user {
      color: ${({ theme }) => theme.text}
    }
    &:hover {
      background: ${({ theme }) => theme.body} !important;
    }
  }

  .is-filter-container {
    border-bottom-color: ${({ theme }) => theme.defaultBorder};
  }


  .issue-panel-container {
    background: ${({ theme }) => theme.header};
    transition: all 0.25s linear;
  }

  .iss-popover {
    ul {
        li {
            &:hover {
              background: ${({ theme }) => theme.body};
            }
        }
    }
  }

  .iss-divider {
    border-bottom-color: ${({ theme }) => theme.defaultBorder};
  }

  .input-content {
    .rs-input-group {
        border-color: ${({ theme }) => theme.rsInputBorderCl} !important;
        transition: border-color 0.25s linear;
        input {
            background: ${({ theme }) => theme.rsInputBg};
            transition: background 0.25s linear;
        }
        .rs-input-group-addon {
          background: ${({ theme }) => theme.rdInputAddonBg};
          transition: background 0.25s linear;
        }
    }
  }
`;