import styled from "styled-components";

const Wrapper = styled.div`
  .comment-container {
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
    align-items: center;
    gap: 1rem;
    margin-left: 0.5rem;
    margin-top: 1rem;
  }

  .comment-like-container,
  .comment-dislike-container {
    display: grid;
    gap: 0.3rem;
    text-align: center;
  }

  .comment-like-container > strong,
  .comment-dislike-container > strong {
    font-size: 0.8rem;
  }

  .comment-icons {
    font-size: 1.1rem;
  }

  .comment-replies{
    display: grid;
    gap: 1rem;
    border-left: 1px solid gray;
  }

  @media (min-width: 700px) {
    .comment-container {
      width: 690px;
      margin: 0 auto;
    }
    .comment-content > p {
      font-size: 0.99rem;
    }
  }
`;

export default Wrapper;
