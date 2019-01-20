import styled from 'styled-components';

const DrawerToggleButtonStyles = styled.div`
  .toggle-button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 30px;
    background: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;

    @media (min-width: 769px) {
      display: none;

      .nav-logo {
        margin-left: 0;
      }
    }

    &:focus {
      outline: none;
    }

    .toggle-button-line {
      width: 30px;
      height: 2px;
      background: #fff;
    }
  }
`;

export default DrawerToggleButtonStyles;
