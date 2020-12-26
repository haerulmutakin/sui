import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
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

  .iss-header {
    background: ${({ theme }) => theme.foreground};
    transition: all 0.25s linear;
  }

  .rs-popover {
    background: ${({ theme }) => theme.foreground};
    transition: background 0.25s linear !important;
    .rs-popover-arrow {
      &:after {
        border-bottom-color: ${({ theme }) => theme.foreground} !important;
        transition: all 0.25s linear !important;
      }
    }
    transition: all 0.25s linear;
  }

  .rs-dropdown-menu {
    background: ${({ theme }) => theme.foreground} !important;
    li {
      a {
        color: ${({ theme }) => theme.text} !important;
        &:hover {
          background: ${({ theme }) => theme.background} !important;
        }
      }
    }
  }

  .iss-button-bell {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    &:hover {
      background: ${({ theme }) => theme.defaultHover};
    }
  }

  .iss-button-user {
    background: transparent !important;
    .iss-nav-name-user {
      color: ${({ theme }) => theme.text}
    }
    &:hover {
      background: ${({ theme }) => theme.background} !important;
    }
  }

  .is-filter-container {
    border-bottom-color: ${({ theme }) => theme.border};
  }

  .issue-panel-container {
    background: ${({ theme }) => theme.foreground};
    transition: all 0.25s linear;
  }

  .iss-popover {
    ul {
        li {
            &:hover {
              background: ${({ theme }) => theme.background};
            }
        }
    }
  }

  .iss-divider {
    border-bottom-color: ${({ theme }) => theme.border};
  }

  .input-content {
    border-color: ${({ theme }) => theme.border};
    transition: border-color 0.25s linear;
    input {
      transition: background 0.25s linear;
      background: ${({ theme }) => theme.foreground};
    }
  }

  // rsuite
  .rs-popover {
    border-color: ${({ theme }) => theme.modalBorder};
    transition: border-color 0.25s linear !important;
  }

  .rs-dropdown {
    .rs-dropdown-menu {
        border-color: ${({ theme }) => theme.modalBorder};
        transition: border-color 0.25s linear !important;
    }
    .rs-btn-subtle {
      &:hover {
          background:  ${({ theme }) => theme.foreground} !important;
          color: ${({ theme }) => theme.text};
      }
      &:focus {
          background:  ${({ theme }) => theme.foreground} !important;
          color: ${({ theme }) => theme.text};
      }
    }
  }
  .left-filter {
    button {
        &:hover {
            background:  ${({ theme }) => theme.foreground} !important;
            color: ${({ theme }) => theme.text};
        }
        &:focus {
            background:  ${({ theme }) => theme.foreground} !important;
            color: ${({ theme }) => theme.text};
        }
    }
  }



  .iss-comments-container {
    background:  ${({ theme }) => theme.foreground} !important;
    transition: background 0.25s linear !important;
  }
`;