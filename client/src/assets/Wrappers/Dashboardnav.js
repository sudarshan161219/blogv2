import styled from "styled-components";

const Wrapper = styled.aside`
  display: flex;

  .logo {
    display: none;
  }

  .dashboard-nav {
    width: 100%;
  }
  .dashboard-nav > ul {
    display: flex;
    justify-content: space-between;
    /* gap: 0.5rem; */

    border-radius: 10px;
  }

  li {
    padding: 0.5rem 0.5rem;
    border-radius: 10px;
  }

  li:active {
    background-color: #3b3f44;
    /* transform: translateX(10px); */
    /* transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s; */
  }

  .dashboard-nav > ul > li > .Link:active {
    color: #fff;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s;
  }

  .dashboard-nav > ul > li > .Link {
    font-family: "Open Sans", sans-serif;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #3b3f44;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 1px;
  }

  .dash-icons {
    display: none;
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
      margin-top: 4rem;
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
