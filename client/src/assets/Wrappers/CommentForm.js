import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  /* background-color: rgb(242, 244, 247); */

  form {
    display: grid;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 0.3rem;
    border-radius: 10px;
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
  }

  .comment-btn {
    height: 30px;
    font-family: FontRegular;
    letter-spacing: 1.1px;
    width: 100px;
    display: flex;
    justify-self: end;
  }
`;

export default Wrapper;
