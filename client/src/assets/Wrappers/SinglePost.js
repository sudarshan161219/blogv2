import styled from "styled-components";

const Wrapper = styled.div`
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
    gap: 1rem;
  }

  .ldc-icons {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .like-dislike-comment-save {
    display: flex;
    gap: 1rem;
    padding: 0 1rem;
    justify-content: space-between;
  }


  .like-dislike-comment {
    display: flex;
    gap: 1rem;
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



  @media (min-width: 700px) {
    padding: 0 2rem;
    .post-heading-container > h1 {
      font-size: 46px;
      letter-spacing: -3%;
    }

    .like-dislike-comment-save {
    padding: 0;
  }
  }

  @media (min-width: 1000px) {
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
    padding: 1rem 5rem;
  }

  @media (min-width: 1200px) {
    padding: 3rem 8rem;
  }
`;

export default Wrapper;
