import styled from "styled-components";

const Wrapper = styled.header`
  color: #1c1c1c;
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  .nav-icons,
  .mobile-nav-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  ul {
    display: none;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .nav-links > ul {
    font-family: fontRegular;
  }

  .nav-link {
    height: 35px;
    display: none;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
  }

  .ham-icon {
    font-size: 2rem;
  }

  .mobile-nav-search-container {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    justify-content: space-between;
    gap: 0.5rem;
    color: #1c1c1c;
    background-color: white;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    transform: translateY(-500px);
    transition: ease-in-out 0.3s;
  }

  .mobile-nav-search-container-show {
    transform: translateY(0px);
  }

  .mobile-nav-search-close-icon {
    font-size: 1.5rem;
    color: #3d3e3fb4;
    margin-left: 0.5rem;
  }

  .mobile-nav-search-icon,
  .desktop-nav-search-icon,
  .nav-search-icon {
    font-size: 1.6rem;
  }

  .desktop-nav-icons {
    display: none;
    align-items: center;
    gap: 1rem;
  }

  .nav-search-container {
    display: none;
  }

  @media (min-width: 768px) {
    ul {
      color: #1c1c1c;
      display: flex;
      gap: 1.5rem;
      font-size: 1rem;
    }

    ul > li > .Link {
      color: #1c1c1c;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 3rem;
    }

    .nav-link {
      display: flex;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .mobile-nav-icons {
      display: none;
    }

    .desktop-nav-icons {
      display: flex;
    }

    .mobile-nav-search-container,
    .mobile-nav-search-icon,
    .desktop-nav-search-icon,
    .nav-search-icon {
      display: none;
    }

    .nav-search-container {
      width: 415px;
      display: block;
    }
  }

  @media (min-width: 1000px) {
    .nav {
      width: 85%;
      margin: 0 auto;
    }
  }


  
  @media (min-width: 1300px) {
    .nav-search-container {
      width: 500px;
    }
  }
`;

export default Wrapper;
