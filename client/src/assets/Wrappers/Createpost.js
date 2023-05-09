import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  color: #2b2b2b;
  letter-spacing: 1px;
  padding: 1rem;
  background-color: aliceblue;
  background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23000000' fill-opacity='0.13' fill-rule='evenodd'/%3E%3C/svg%3E");
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  h3 {
    margin-bottom: 1rem;
  }

  .title-input {
    display: grid;
    gap: 0.7rem;
  }

  .input-container {
    margin-bottom: 1rem;
    display: grid;
    gap: 0.7rem;
  }

  .cover-img-container {
    display: grid;
    gap: 0.7rem;
  }

  input[type="file"] {
    display: none;
  }

  .cover-img {
    width: 100%;
  }

  .form-group {
    margin-top: 2rem;
  }

  .editor {
    margin-bottom: 1rem;
  }

  .title-input > input {
    outline: none;
    padding: 0.7rem;
    border: 1px solid #cccccc;
    font-size: medium;
    letter-spacing: 1px;
    font-weight: 500;
  }

  .btn-container {
    margin-top: 1rem;
  }

  .basic-multi-select.css-b62m3t-container {
    margin: 1rem 0;
    width: 300px;
    z-index: 5;
  }

  .tag-title-input {
    margin: 1rem 0;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    width: 100%;
    max-width: 100%;
    border-radius: 5px;
    color: black;
    border: 1px solid #cccccc;
    align-items: center;
  }

  .container input {
    outline: none;
    border: 0;
    padding: 0.7rem;
    font-size: medium;
    letter-spacing: 1px;
    font-weight: 500;
  }

  .tag {
    display: flex;
    align-items: center;
    white-space: nowrap;
    color: white;
    font-size: 0.8rem;
  }

  .tag-delete-icon {
    font-size: 1.3rem;
  }

  .tag-container > button {
    outline: none;
    border: none;
    background-color: #2b2b2b;
    color: #cccccc;
  }

  .tag-container {
    display: flex;
    gap: 0.3rem;
    align-items: center;
    background-color: #2b2b2b;
    color: #cccccc;
    height: 30px;
    padding: 0 0.5rem;
    border-radius: 10px;
  }

  .tags-container >  strong > span {
    font-weight: bold;
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }

  .tag-select{
    display: grid;
    /* gap: 0.5rem; */
  }
  .css-b62m3t-container{
    z-index: 10;
  }

  @media (min-width: 1024px) {
    padding: 1rem 2rem;
    .btn-container {
      display: flex;
      justify-content: end;
    }
    .quill-btn {
      width: 200px;
    }

    .image-label {
      width: 500px;
    }
    .tag-delete-icon:hover{
      cursor: pointer;
    }

    .tag-select{
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-direction: row-reverse;
  }

  .css-b62m3t-container,   .tags-container {
    width: 50%;
  }

  }
`;

export default Wrapper;