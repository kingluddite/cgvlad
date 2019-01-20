import styled from 'styled-components';

const NavbarStyles = styled.header`
  position: fixed;
  width: 100%;
  background: #521751;
  height: 56px;
  z-index: 200;

  .navbar {
    display: flex;
    height: 100%;
    align-items: center;

    .nav-logo {
      margin-left: 1rem;
    }

    .nav-logo a {
      text-decoration: none;
      font-size: 1.5rem;
      padding: 0 1rem;
    }

    .spacer {
      flex: 1;
    }

    @media (max-width: 768px) {
      .nav-items {
        display: none;
      }
    }

    .nav-items ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }

    .nav-items li {
      padding: 0 1.5rem;
    }

    .nav-items a {
      text-decoration: none;
    }

    .nav-items a:hover,
    .nav-items a:active {
     color: red;
    }
  }
}
`;

export default NavbarStyles;
