import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 4rem;
  .comment-container-div {
    display: block;
    position: fixed;
    background-color: #f2f4f7;
    height: 600px;
    z-index: 11;
    transform: translateY(900px);
    width: 100%;
    transition: ease-in-out 0.3s;
    overflow: auto;
    bottom: 0;
  }
  .dark.comment-container-div {
    background-color: #1f1e21;
  }

  .comment-container-div::-webkit-scrollbar-thumb {
    background-color: #565656;
    outline: 1px solid slategrey;
    border-radius: 50px;
  }

  .comment-container-div::-webkit-scrollbar {
    width: 0.4em;
  }

  .comment-container-div::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .comment-container-div-visible {
    transform: translateY(0px);
    transition: ease-in-out 0.3s;
    bottom: 0;
  }

  .comments {
    display: grid;
    gap: 1rem;
    padding: 1rem;
  }

  .icon-container {
    display: flex;
    justify-content: end;
    padding: 1rem;
  }

  .close-icon {
    font-size: 2rem;
    cursor: pointer;
  }
  .dark.close-icon,
  .dark.postCommentsHeading {
    color: var(--darkMText2);
  }
  @media (min-width: 1000px) {
    .comment-container-div {
      display: block;
      position: fixed;
      background-color: rgb(242, 244, 247);
      height: 100vh;
      z-index: 11;
      transform: translateX(900px);
      /* width: 60%; */
      width: 600px;
      transition: ease-in-out 0.3s;
      overflow: auto;
      right: 0;
    }

    .comment-container-div-visible {
      transform: translateX(0px);
      transition: ease-in-out 0.3s;
      right: 0;
    }
  }
`;

export default Wrapper;
