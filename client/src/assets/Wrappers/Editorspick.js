import styled from "styled-components";

const Wrapper = styled.div`
  padding: 5rem 0;
  display: grid;
  gap: 3rem;
  justify-content: center;

  .editor-page-heading {
    font-size: 2rem;
    font-weight: 500;
    font-family: "Open Sans", sans-serif;
  }

  .editor-page-heading-container {
    display: grid;
    justify-content: center;
    gap: 0.3rem;
  }

  .heading-underline {
    display: flex;
    width: 100px;
    height: 4px;
    background-color: black;
    justify-self: center;
  }

  .editor-page-img-container,
  .editor-page-content {
    display: grid;
    justify-content: center;
  }

  .editor-page-content {
    gap: 1.1rem;
    padding: 0 1rem 1rem 1rem;
  }

  /* .editor-page-content > h2{
  font-family: "Libre Baskerville", serif;
  font-size: 2rem;
  line-height: 2rem;
} */

  .editor-page-content > p {
    font-family: "Open Sans", sans-serif;
    line-height: 1.5rem;
    letter-spacing:1px;
    font-weight:500;
  }

  .editor-page-content > span{
    font-family: "Open Sans", sans-serif;
    font-weight:500;
    letter-spacing:1px;
    color: grey;

  }

  .editor-page-flex-box {
    display: grid;
    gap: 1.5rem;
    justify-content: center;
    text-align: center;
  }

  .meta {
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    color: grey;
  }

  .span-se {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  @media (min-width: 756px) {
    .editor-page-flex-box {
      text-align: left;
      display: flex;
      align-items: flex-start;
      width: 700px;
    }
  }

  @media (min-width: 1020px) {
    .editor-page-flex-box {
      display: flex;
      /* align-items: flex-start; */
      width: 850px;
    }
    .meta {
      justify-content: left;
    }
  }
`;

export default Wrapper;
