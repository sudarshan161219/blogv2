import styled from "styled-components";

const Wrapper = styled.header`
  color: #1c1c1c;
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;

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

    .ham-icon {
      display: none;
    }
  }

  @media (min-width: 1000px) {
    .nav {
      width: 85%;
      margin: 0 auto;
    }
  }
`;

export default Wrapper;
