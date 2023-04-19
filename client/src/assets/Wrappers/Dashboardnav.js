import styled from "styled-components";

const Wrapper = styled.aside`
  display: flex;
  align-items: center;
  .logo {
    display: none;
  }

  .dashboard-nav {
    display: block;
    width: 100%;
    position: fixed;
    left: 0px;
    top: 94vh;
    background: rgba(36, 35, 35, 0.6);
    box-shadow: rgba(31, 38, 135, 0.37) 0px 8px 32px 0px;
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .hide-dashboard-nav {
    display: none;
  }

  .dash-close-icon {
    font-size: 1.5rem;
    color: #fff;
  }

  .icon-container {
    top: -1px;
    padding: 0.1rem 0.2rem;
    background-color: #3b3f44;
    border-radius: 50%;
  }

  .dash-menu-icon {
    opacity: 1;
    color: black;
    font-size: 1.2rem;
    font-weight: 500;
  }

  li {
    z-index: 20;
  }

  .toggle-li {
    padding: 0;
    position: fixed;
    top: 3px;
    left: 5px;
    /* left:3px;  */
  }

  .hide-dash-menu-icon {
    opacity: 0;
    margin-top: 0.2rem;
  }

  .dashboard-nav > ul {
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    padding: 0.5rem 0.2rem;
  }

  li {
    padding: 0.5rem 0.5rem;
    border-radius: 10px;
  }

  li:active {
    background-color: #3b3f44;
  }

  .dashboard-nav > ul > li > .Link:active {
    color: #fff;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s;
  }

  .dashboard-nav > ul > li > .Link {
    font-family: "Open Sans", sans-serif;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 1px;
  }

  .dash-icons {
    /* display: none; */
  }

  @media (min-width: 500px) {
    .dashboard-nav > ul {
      gap: 1rem;
    }
  }

  @media (min-width: 768px) {
    .dashboard-nav {
      width: 50%;
      display: block;
    }
  }

  @media (min-width: 1024px) {
    .logo {
      display: block;
      padding: 1.5rem 0.5rem;
    }
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 200px;
    /* padding: 1.5rem 0.5rem; */
    background-color: #3b3f44;

    .dashboard-nav {
      visibility: visible;
      margin-top: 4rem;
      background-color: inherit;
      border: none;
      box-shadow: none;
      position: initial;
      transform: none;
      width: initial;
    }

    .dash-menu-icon,
    .toggle-li,
    .hide-dash-menu-icon {
      display: none;
    }

    .dashboard-nav > ul {
      display: grid;
      justify-content: initial;
    }

    li {
      padding: 1rem 0.5rem;
    }

    .dashboard-nav > ul > li > .Link {
      gap: 0.8rem;
      color: white;
      font-size: 1rem;
    }

    .dashboard-nav.show-dashboard-nav::before {
      display: none;
    }

    .dash-icons {
      display: block;
      font-size: 1.5rem;
    }

    li:hover {
      cursor: pointer;
      background-color: #545a61;
      color: black;
      transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s;
    }

    li:hover > .Link {
      transform: translateX(10px);
      transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s;
    }
  }
`;

export default Wrapper;
