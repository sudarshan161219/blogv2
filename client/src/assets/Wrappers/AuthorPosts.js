import styled from "styled-components";

const Wrapper = styled.div`
  .authorpost-container {
    display: grid;
    gap: 1rem;
    /* justify-content: center; */
    margin-top: 1rem;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  .image-containner > img {
    width: 100%;
  }

  .image-containner {
    width: 100%;
  }
  .content-container {
    display: grid;
    justify-content: center;
    text-align: center;
    gap: 0.5rem;
    line-height: 1.1;
    letter-spacing: 1px;
    padding: 1rem;
  }

  .content-container > h2 {
    font-size: 1.6rem;
  }

  @media (min-width: 1024px) {
    .authorpost-container {
      box-shadow: none;
      display: flex;
      gap: 1rem;
      align-items: center;
      width: 750px;
      border-left: 1px solid #9ba4b5;
      border-right: 1px solid #9ba4b5;
      border-radius: 8px;
      padding: 0 0.5rem;
    }

    .authorpost-container:hover{
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      transition:all 0.3s;
    }

    /* .image-containner {
    width: 300px;
  } */

    .content-container {
      text-align: left;
      border-radius: 8px;
    }

    .content-container > h2 {
      font-size: 1.5rem;
    }

    .content-container > strong,
    span {
      color: #1c1c1c;
      opacity: 0.5;
    }
  }

  /* @media (min-width: 1366px) {

  } */
`;

export default Wrapper;