import styled from "styled-components";

const Wrapper = styled.div`
  .nav-form {
    position: relative;
    display: flex;
    align-items:center;
    width: 200px;
  }

  .nav-input {
    position: relative;
    padding: 0.3rem 0.5rem 0.3rem 1.5rem;
    height: 20px;
    border: 1px solid gray;
    outline: none;
    border-radius: 10px;
    width: 100%;
  }

  .nav-input:placeholder-shown{
    padding-left: 1.5rem;
  }

  .search-container-searchIcon {
    position: absolute;
    left: 5px;
    opacity: 0.5;
  }

  @media (min-width:500px) {
    .nav-form {
    width: 300px;
  }
  }
`;

export default Wrapper;
