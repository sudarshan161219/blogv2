import styled from "styled-components";

const Wrapper = styled.div`
  .authorpost-container {
    display: grid;
    gap: 1rem;
    overflow: hidden;
    margin-top: 1rem;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .image-containner > img {
    width: 100%;
  }

  .image-containner {
    width: 100%;
    height: 180px;
    overflow: hidden;
  }

  .authorpost-author-info-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .authorpost-text-info-container {
    text-align: left;
  }

  .content-container {
    justify-content: center;
    text-align: center;
    gap: 0.5rem;
    line-height: 1.1;
    letter-spacing: 1px;
    padding: 1rem;
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
    margin-top: 1rem;
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

  @media (min-width: 700px) {
    h1 {
      text-align: left;
    }
    .authorpost-container {
      padding: 1.2rem;
      display: flex;
      gap: 1rem;
    }

    .content-container {
      padding: 0;
      order: -1;
      width: 60%;
    }

    .image-containner {
      border-radius: 15px;
      overflow: hidden;
      width: 40%;
      display: grid;
      align-items: center;
    }

    .image-containner > img {
      border-radius: 15px;
    }

    .authorpost-author-info-container {
      justify-content: initial;
    }

    .authorpost-author-info-container > span:nth-child(2):before {
      content: "/";
      margin-left: 0.5rem;
    }
  }

  @media (min-width: 1024px) {
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
`;

export default Wrapper;
