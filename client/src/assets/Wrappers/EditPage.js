import styled from "styled-components";

const Wrapper = styled.div`
  .profile-form {
    width: 100%;
    margin-top: 2rem;
    padding: 1rem 0;
    border-top:5px solid #000 ;
    border-bottom: 1px solid #000;
    border-radius: 10px;
  }
  input[type="file"] {
    display: none;
  }

  input {
    outline: none;
    border: none;
    letter-spacing: 1.1px;
    width: 100%;
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
    border-radius: 8px;
  }

  textarea {
    outline: none;
    border: none;
    letter-spacing: 1.1px;
    width: 100%;
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
    border-radius: 8px;
  }

  input:focus {
    border-bottom: 1px solid gray;
  }

  textarea:focus {
    outline: 1px solid gray;
  }

  .social-label {
    width: 100%;
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }

  .textarea-label {
    width: 100%;
    display: flex;
    gap: 0.3rem;
    align-items: baseline;
  }
  .label-icons {
    font-size: 1.5rem;
  }

  .img-input-container {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 250px;
    height: 250px;
    border-radius: 100%;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .profile-img {
    width: 100%;
  }
  textarea {
    resize: vertical;
  }
  .input-container {
    margin-top: 2rem;
    display: grid;
    gap: 1rem;
  }

  .edit-btn {
    width: 200px;
  }

  @media (min-width: 1024px) {
    width: 70%;
    padding: 0px 12rem;
  }
`;

export default Wrapper;