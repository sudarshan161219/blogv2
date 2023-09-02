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

    visibility: hidden;
    z-index: 11;
    transform: translateX(-350px);
    transition: ease-in-out 0.3s;
    width: 60%;
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
    gap: 1.5rem;
  }

  .aside-nav,
  .nav-profile-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding-right: 1rem; */
    padding: 1.5rem 1rem;
    border-bottom: rgb(92, 95, 101) 1px solid;
  }

  .close-icon {
    font-size: 1.5rem;
    color: #b3b3b3;
  }

  .nav-img-name {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-img {
    width: 35px;
    border-radius: 100%;
    border: #b3b3b3 0.5px solid;
  }

  .nav-name {
    color: #b3b3b3;
    font-size: 0.8rem;
    font-family: FontMedium;
  }

  .nav-icon {
    color: #b3b3b3;
    font-size: 1rem;
  }

  .navlinks-container {
    display: grid;
    padding: 1.5rem 1rem;
  }

  
  .light.ulLink ,   .dark.ulLink{
    color: #b3b3b3;
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    font-family: fontRegularsec;
  }

  .navlinks-container > ul {
    display: grid;
    gap: 2rem;
    text-align: center;
    color: #b3b3b3;
  }

  .navlinks-container > ul > li > .Link {
    color: #b3b3b3;
    font-family: "FontMedium";
    font-size: 1rem;
    letter-spacing: 1.1px;
    line-height: 100%;
  }

  .logout-container > .icon-name {
    color: #ef6262;
    font-family: "FontMedium";
    font-size: 1rem;
    letter-spacing: 1.1px;
    line-height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .login-container > .icon-name {
    color: #fff0f5;
    font-family: "FontMedium";
    font-size: 1rem;
    letter-spacing: 1.1px;
    line-height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .logout-container > .icon-name > strong {
    color: #ef6262;
    font-family: "FontMedium";
    font-size: 1rem;
    letter-spacing: 1.1px;
    line-height: 100%;
  }

  .logout-container,
  .login-container {
    position: absolute;
    bottom: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .login-container > .icon-name > .strong {
    color: #fff0f5;
    font-family: "FontMedium";
    font-size: 1rem;
    letter-spacing: 1.1px;
    line-height: 100%;
  }

  @media (min-width: 550px) {
    .backdrop {
      display: none;
    }
  }
`;

export default Wrapper;
