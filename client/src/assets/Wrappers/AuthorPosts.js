import styled from "styled-components";

const Wrapper = styled.div`
  .authorpost-container {
    display: grid;
    gap: 1rem;
    /* justify-content: center; */
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
    position: relative;
  }

  /* .image-containner:before {
    content: " ";
    height: 100%;
    width: 100%;
    position: absolute;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  } */

  .strong {
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    font-size: 0.8rem;
    padding: 0.3rem;
    background: #0F0E0E;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .content-container {
    display: grid;
    /* justify-content: center; */
    text-align: center;
    gap: 0.5rem;
    line-height: 1.1;
    letter-spacing: 1px;
    padding: 1rem;
  }

  .content-container > h2 {
    font-size: 1.2rem;
  }

  span {
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
      width: 300px;
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
      /* width: 70%; */
      padding: 0 0.5rem;
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
