import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 992px) {
    display: none;
  }

  .sidebar {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    background-color: gray;
    height: 100vh;
    padding: 1rem 1.5rem 0 1rem;
    visibility: hidden;
    z-index: 10;
    transform: translateX(-350px);
    transition: ease-in-out 0.3s;
    width: 55%;
    background: rgba(36, 35, 35, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .show-sidebar {
    visibility: visible;
    /* z-index: 0; */
    transform: translateX(0px);
    transition: ease-in-out 0.3s;
  }

  .aside-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .close-icon {
    font-size: 1.5rem;
  }

  .navlinks-container {
    width: 100%;
    display: grid;
    justify-content: center;
    margin-top: 10rem;
  }

  .navlinks-container > ul {
    display: grid;
    gap: 2rem;
    font-size: 1.5rem;
    text-align:center;
    color: blanchedalmond;
  }

  
  .navlinks-container > ul  > li > .Link{
    color: black;
  }
`;

export default Wrapper;
