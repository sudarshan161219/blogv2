import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .nav-form {
    position: relative;
    display: flex;
    align-items: center;
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

  .nav-input:placeholder-shown {
    padding-left: 1.5rem;
  }

  .search-container-searchIcon {
    position: absolute;
    left: 5px;
    opacity: 0.5;
  }

  .nav-search-results {
    display: grid;
    gap: 1rem;
    margin-top: 0.2rem;
    position: absolute;
    background-color: #f2f4f7;
    width: 200px;
    overflow: auto;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .nav-search-results::-webkit-scrollbar {
    width: 0.4em;
  }

  .nav-search-results::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  .nav-search-results::-webkit-scrollbar-thumb {
    background-color: #565656;
    outline: 1px solid slategrey;
    border-radius: 50px;
  }

  .nav-search-loading{
    width: 45px;
    margin: 0 auto;
  }

  @media (min-width: 500px) {
    .nav-form {
      width: 300px;
    }

    .nav-search-results {
      width: 300px;
    }
  }
`;

export default Wrapper;
