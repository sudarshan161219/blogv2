import styled from "styled-components";

const Wrapper = styled.div`
  .like-container,
  .dislike-container {
    display: grid;
    gap: 0.33rem;
    align-items: center;
  }

  .like-container > strong,
  .dislike-container > strong {
    text-align: center;
    font-size: 1rem;
    font-family: FontSemiBold;
    color: #475467;
  }

  @media (min-width: 700px) {
    .post-container{
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

`;

export default Wrapper;
