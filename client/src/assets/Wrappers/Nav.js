import styled from "styled-components";

const Wrapper = styled.header`
  color: #1c1c1c;
  margin-bottom: 3rem;

  ul {
    display: none;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ham-icon {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    ul {
      color: #1c1c1c;
      display: flex;
      gap: 1.5rem;
      font-family: "Libre Baskerville", serif;
      font-size: 1.1rem;
    }

    ul > li > .Link {
      color: #1c1c1c;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 3rem;
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
`;

export default Wrapper;
