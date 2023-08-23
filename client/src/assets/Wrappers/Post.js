import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f2f4f7;
  margin-top: 4rem;
  .like-container,
  .dislike-container,
  .comment-container {
    display: flex;
    align-items: center;
  }

  .post-heading-container {
    display: grid;
    gap: 1rem;
    text-align: center;
    margin-bottom: 3rem;
    padding: 1rem;
  }

  .post-heading-container > h1 {
    font-family: FontBold;
    font-size: 26px;
    line-height: 120%;
  }

  .post-date-author-info-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .post-date-author-info-container > span {
    text-transform: uppercase;
    font-family: FontSemiBold;
    font-size: 13px;
    line-height: 120%;
  }

  .post-date-author-info-container > span:nth-child(1) {
    color: #475467;
  }

  .post-date-author-info-container > span:last-child {
    color: #1d2939;
  }

  .post-img-container {
    padding-bottom: 3rem;
    display: grid;
  }

  .like-dislike-comment-save {
    display: flex;
    justify-content: space-between;
  }
  
  .like-dislike-comment {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
  }

  .post-img-container > img {
    width: 100%;
  }

  .post-content-container {
    padding: 1rem;
  }

  .post-author {
    color: #1d2939;
    display: flex;
    gap: 0.3rem;
    text-transform: uppercase;
    font-family: FontSemiBold;
    font-size: 13px;
    line-height: 120%;
  }

  .ldc-disable-msg {
    display: flex;
    justify-content: center;
    padding: 1rem;
    background-color: #1d2939;
  }

  .ldc-disable-msg > strong {
    font-size: 0.9rem;
    font-family: FontSemiBold;
    color: #ffffff;
  }

  .ldc-disable-msg > strong > .strong-link {
    text-decoration: none;
    color: #0079ff;
  }

  .post-ldc-icons {
    font-size: 1.1rem;
    cursor: pointer;
    color: #1d2939;
  }

  .tags {
    padding: 0 1rem;
  }

  .tags ul > li {
    font-size: 1.3rem;
    color: #1d5d9b;
  }

  .tags ul {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (min-width: 700px) {
    .post-container {
      padding: 0 2rem;
    }

    .post-heading-container > h1 {
      font-size: 46px;
      letter-spacing: -3%;
    }

    .like-dislike-comment-save {
      padding: 0;
    }
  }

  @media (min-width: 1000px) {
    margin-top: 2rem;
    .post-img-container {
      /* display: flex; */
      justify-content: center;
    }
    .post-img-container > img {
      width: 650px;
    }

    .post-heading-container > h1 {
      font-size: 65px;
    }
  }

  @media (min-width: 1200px) {
    .post-container {
      padding: 1rem 5rem;
    }
  }

  @media (min-width: 1200px) {
    .post-container {
      padding: 3rem 8rem;
    }
  }
`;

export default Wrapper;
