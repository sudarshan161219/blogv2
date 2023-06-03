import styled from "styled-components";

const Wrapper = styled.div`
  .authorpost-container {
    display: grid;
    gap: 1rem;
    border-radius: 8px;
    overflow: hidden;
    margin-top: 1rem;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  .image-containner > img {
    width: 100%;
  }

  .image-containner {
    width: 100%;
    height: 180px;
    position: relative;
    overflow: hidden;
  }

  .strong {
    position: absolute;
    padding: 0.3rem;
    background-color: black;
    right: 0;
    top: 0;
    color: aliceblue;
    border-radius: 8px;
  }
  .content-container {
    justify-content: center;
    text-align: center;
    gap: 0.5rem;
    line-height: 1.1;
    letter-spacing: 1px;
    padding: 1rem;
  }

  .content-container > h2 {
    font-size: 1.2rem;
  }

  span,
  strong {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: rgba(28, 28, 28, 0.486);
  }

  .read-btn {
    width: 100px;
    display: flex;
    align-items: end;
    gap: 0.3rem;
  }

  .read-icon {
    font-size: 1.2rem;
  }

  .action-link-container {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .edit-icon,
  .delete-icon {
    font-size: 1.3rem;
    color: #121212;
    padding: 0.6rem;
    border-radius: 50%;
  }

  .delete-icon:active {
    background-color: #e06469;
    color: antiquewhite;
  }

  .edit-icon:active {
    background-color: #afd3e2;
  }

  @media (min-width: 1024px) {
    .authorpost-container {
      width: 320px;
      border-radius: 8px;
    }

    .authorpost-container:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      transition: all 0.3s;
    }

    .content-container {
      text-align: left;
      border-radius: 8px;
    }

    .content-container > h2 {
      font-size: 1.1rem;
    }

    .content-container > strong,
    span {
      color: #1c1c1c;
      opacity: 0.5;
    }

    .delete-icon:hover {
      background-color: #e06469;
      color: antiquewhite;
    }

    .edit-icon:hover {
      background-color: #afd3e2;
    }
  }

  /* @media (min-width: 1366px) {

  } */
`;

export default Wrapper;
