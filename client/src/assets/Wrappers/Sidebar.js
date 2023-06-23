import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 768px) {
    display: none;
  }

  .sidebar {
    display: block;
    position: fixed;
    left: -1px;
    top: -1px;
    background-color: gray;
    height: 100vh;
    padding: 1.5rem 1.5rem 0 1rem;
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
    transform: translateX(0px);
    transition: ease-in-out 0.3s;
  }

  .show-sidebar > .backdrop {
    position: fixed;
    width: 100vh;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: -1;
    top: 0;
    left: 0;
    transition: ease-in-out 0.1s;
 
  }

  .Link {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .aside-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;
  }

  .close-icon {
    font-size: 1.5rem;
    color: #b3b3b3;
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
    text-align: center;
    color: blanchedalmond;
  }

  .navlinks-container > ul > li > .Link {
    color: #b3b3b3;
    font-family: 'FontMedium';
    font-size: 1.2rem;
    letter-spacing:1.1px;
    line-height: 100%;
  }
`;

export default Wrapper;
