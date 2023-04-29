import styled from "styled-components";

const Wrapper = styled.div`
  .img-container > img {
    width: 100%;
  }

  .info-content {
    display: grid;
    gap: 1rem;
  }

  .info-content > h1 {
    margin-top: 1rem;
    font-size: 1.5rem;
    text-align: center;
  }

  .info-content > p {
    text-align: center;
    font-family: "Open Sans", sans-serif;
    line-height: 1.5rem;
    letter-spacing: 1px;
    font-weight: 500;
  }

  .back-btn {
    width: 100px;
    margin-bottom: 2rem;
  }

  .action-container {
    margin: 1.2rem 0;
    display: flex;
    justify-content: end;
    gap: 0.2rem;
  }

  .edit-icon,
  .delete-icon {
    font-size: 1.3rem;
    color: #121212;
    padding: 0.6rem;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    .img-container {
      display: flex;
      width: 500px;
      margin: 0 auto;
    }
  }

  @media (min-width: 1024px) {
    width: 750px;
    display: grid;
    margin: 0 auto;
  }

  .delete-icon:hover {
    background-color: #e06469;
    color: antiquewhite;
  }

  .edit-icon:hover {
    background-color: #afd3e2;
    /* color: antiquewhite; */
  }
`;

export default Wrapper;
