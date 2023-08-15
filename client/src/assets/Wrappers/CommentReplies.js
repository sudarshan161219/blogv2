import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-left: 0.5rem;

  .comment-reply-container {
    width: 95%;
    display: grid;
    gap: 1rem;
  }

  .comment-info-container {
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    padding: 0.5rem;
  }
  .comment-name-time-reply {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .reply-icon {
    font-size: 1.4rem;
  }

  .comment-img-name,
  .icon-container {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.88rem;
  }

  .icon-container {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .mobile-comment-img {
    width: 40px;
    border-radius: 100%;
    overflow: hidden;
  }

  .comment-content {
    padding: 0 0.5rem;
  }

  .comment-content > p {
    font-size: 0.88rem;
  }

  .comment-like-dislike-container {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin-left: 0.5rem;
    margin-top: 1rem;
    justify-content: space-between;
  }

  .like-dislike-container {
    display: flex;
    align-items: center;
    /* gap: 1rem; */
  }

  .comment-like-container,
  .comment-dislike-container {
    display: grid;
    /* gap: 0.3rem; */
    text-align: center;
  }

  .comment-like-container,
  .comment-dislike-container {
    font-size: 0.88rem;
  }

  .comment-icons {
    font-size: 1.2rem;
  }

  .edit-comment-icon,
  .delete-comment-icon {
    font-size: 1.3rem;
    /* color: #121212; */
    border-radius: 50%;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }

  .edit-comment-icon {
    color: #516beb;
  }

  .delete-comment-icon {
    color: #e06469;
  }

  @media (min-width: 700px) {
    .comment-content > p {
      font-size: 0.99rem;
    }
  }
  @media (min-width: 1100px) {
    .edit-ripple:hover {
      background-color: #afd3e2;
      color: antiquewhite;
    }

    .delete-ripple:hover {
      background-color: #e06469;
      color: #2b2730;
    }

    .edit-comment-icon:hover,
    .delete-comment-icon:hover {
      color: #2b2730;
    }
  }
`;

export default Wrapper;
