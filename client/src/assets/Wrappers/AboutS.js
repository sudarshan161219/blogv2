import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  background-color: black;
  padding: 2rem;
  color: antiquewhite;
  position: relative;
  /* height: 100%; */

  .first-info-container {
    background-color: #191919;
    padding: 1rem;
  }

  .first-info-container > h4 {
    margin-bottom: 1rem;
  }

  .second-info-container > h4 {
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

  .img-container {
    overflow: hidden;
  }

  .img-container::before {
    position: absolute;
    opacity: 0.7;
    content: " ";
    width: 100%;
    height: 95%;
    background-color: #191919;
    overflow: hidden;
  }

  .img-container > img {
    width: 100%;
    /* width: 200px; */
  }

  .third-container {
    position: relative;
  }

  .third-info-container {
    position: absolute;
    top: 100px;
    z-index: 10;
    display: grid;
    gap: 1.2rem;
  }

  .stack-img {
    display: none;
  }

  .stack-img > img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    padding: 5rem 5rem;

    .img-container {
      display: none;
    }

    .stack-img {
      display: flex;
      width: 100%;
      align-items: center;
      min-width: 815px;
      overflow: hidden;
    }

    .stack-img::before {
      position: absolute;
      opacity: 0.7;
      content: " ";
      width: 100%;
      height: 100%;
      background-color: #191919;
      overflow: hidden;
    }

    .third-info-container{
      padding: 2rem 5rem;
    }
/* 
    div::before {
      content: " ";
      width: 10px;
      height: 100px;
      background-color: #fff;
    }

    div::after {
      content: " ";
      width: 10px;
      height: 100px;
      transform: translateY(195px);
      background-color: #fff;
    } */

    .first-container,
    .second-container {
      display: flex;
      align-items: flex-start;
      gap: 1.2rem;
    }

    .first-info-container,
    .second-info-container {
      background-color: transparent;
      padding: 1rem;
    }

    .first-info-container > h4 {
      font-size: 2.2rem;
      text-align: left;
    }

    .first-info-container > p {
      font-size: 1.1rem;
      text-align: left;
    }

    .second-info-container > h4 {
      font-size: 2.2rem;
      text-align: left;
    }

    .second-info-container > p {
      font-size: 1.1rem;
      text-align: left;
    }

    .first-container > img {
      width: 400px;
    }

    .second-container > img {
      width: 400px;
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
  }

  @media (min-width: 1366px) {
    padding: 5rem 13rem;
  }
`;

export default Wrapper;
