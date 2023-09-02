import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
 .CommentReplyForm {
    width: 88%;
    display: grid;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 1rem;
    border-radius: 10px;
  }

  .dark.CommentReplyForm{
    background-color: var(--darkBg);
  }
  .comment-form {
    height: 120px;
    width: 100%;
    resize: none;
    outline: none;
    border: none;
    font-size: 1rem;
    font-family: FontRegular;
    letter-spacing: 1.1px;
    line-height: 150%;
    border-radius: 8px;
    margin-bottom: 1rem;
    padding: 0.2rem;
  }
  .comment-form:focus {
    outline: gray solid 1px;
  }
  .dark.comment-form{
    background-color:#272829;
    color: var(--darkMText2);
  }

  .img-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mobile-comment-img {
    width: 35px;
    border-radius: 100%;
    overflow: hidden;
  }

  .comment-btn {
    height: 30px;
    font-family: FontRegular;
    letter-spacing: 1.1px;
    width: 100px;
    display: flex;
    justify-self: end;
  }

  .desktop-comment-img {
    display: none;
  }

  .giff {
    width: 50px;
    position: absolute;
    top: -10px;
  }

  @media (min-width: 700px) {
    .mobile-comment-img {
      display: none;
    }

    .img-btn {
      justify-content: end;
    }

    .desktop-comment-img {
      display: block;
      width: 40px;
      border-radius: 100%;
      overflow: hidden;
    }

    .text-img-container {
      display: flex;
      align-items: start;
      gap: 1rem;
    }

    /* form {
      width: 600px;
      margin: 0 auto;
    } */
  }
`;

export default Wrapper;
