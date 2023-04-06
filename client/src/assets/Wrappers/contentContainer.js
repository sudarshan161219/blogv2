import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding: 0 0 1rem 0;

  .hero-img {
    width: 100%;
  }

  /* .hero-heading {
    color: black;
    font-family: "Libre Baskerville", serif;
    font-size: 1.5rem;
    line-height: 2rem;
  } */

  .span-fi {
    font-family: "Open Sans", sans-serif;
    color: #1c1c1c7c;
    font-size: 1.3rem;
  }

  .span-se {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .meta-info {
    font-family: "Open Sans", sans-serif;
    color: #1c1c1c7c;
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .hero-img-content {
    display: grid;
    gap: 1rem;
    padding: 1rem;
    text-align: center;
  }

  .hero-para {
    font-family: "Open Sans", sans-serif;
    line-height: 1.5rem;
    letter-spacing:1px;
    font-weight:500;
  }

  /* font-family: 'Open Sans', sans-serif; */
  /* font-family: "Libre Baskerville", serif; */

  @media (min-width: 1024px) {
    .content-container {
      position: relative;
      padding: 0;
      height: 550px;
      overflow: hidden;
      box-shadow: none;
    }

    .hero-img {
      width: 100%;
      display: block;
    }

    .hero-img-content {
      position: absolute;
      background-color: rgb(255, 255, 255);
      width: 450px;
      top: 0;
      left: 30px;
      padding: 1.5rem;
      display: grid;
      gap: 1rem;
    }
    .hero-para {
      padding-top: 2rem;
    }
  }
`;

export default Wrapper;
