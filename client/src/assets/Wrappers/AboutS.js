import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  background-color: black;
  padding: 2rem;
  color: antiquewhite;
  position: relative;
  height: 100%;

  .first-info-container {
    background-color: #191919;
    padding: 1rem;
  }

  .first-info-container >  h4 {
    margin-bottom: 1rem;
  }

  .second-info-container >  h4 {
    margin-bottom: 1rem;
  }

  .first-info-container,
  h4,
  p {
    color: #fff;
    text-align: center;
    line-height: 1.2;
  }

  .first-container > img {
    width: 100%;
  }

  .second-container > img {
    width: 100%;
  }

  .second-info-container {
    background-color: #191919;
    padding: 1rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem 5rem;


    /* .first-container {
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }

    .first-info-container,
    h4,
    p {
      text-align: left;
    }
    .second-info-container,
    h4,
    p {
      text-align: center;
    }

    .first-container > img {
    width: 350px;
  }

  .second-container > img {
    width: 350px;
  }

    .first-info-container > h4 {
      font-size: 2rem;
    }

    .first-info-container > p {
      font-size: 1.1rem;
    }


    .second-info-container > h4 {
      font-size: 2rem;
    }

    .second-info-container > p {
      font-size: 1.1rem;
    }


    .first-info-container ,   .second-info-container {
    background-color: transparent;
    padding: 1rem;
  }

    .second-container {
      display: grid;
      gap: 1.2rem;
      top: 560px;
      left: 385px;
      position: absolute;
      width: 550px;
      -webkit-box-pack: center;
      justify-content: center;
      margin: 0px auto;
    }
    .second-container > img {
      width: 500px;
    } */
  }
`;

export default Wrapper;
