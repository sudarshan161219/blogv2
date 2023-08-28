import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-right: 0.5rem;
  .nav-form {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .nav-input {
    position: relative;
    padding: 0.3rem 0.5rem 0.3rem 2rem;
    height: 25px;
    border: 1px solid #b1b6c1;
    outline: none;
    border-radius: 30px;
    width: 100%;
    font-family: fontRegularsec;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }

  .nav-input:placeholder-shown {
    padding-left: 2rem;
    font-family: fontRegularsec;
  }

  .search-container-searchIcon {
    position: absolute;
    left: 10px;
    opacity: 0.5;
  }

  .search-container-closeIcon {
    position: absolute;
    opacity: 0.5;
    right: 10px;
    font-size: 1.3rem;
  }

  .search-container-closeIcon:hover {
    cursor: pointer;
    opacity: 1;
  }

  .nav-search-results {
    display: grid;
    gap: 1rem;
    margin-top: 0.2rem;
    position: absolute;
    background-color: #f2f4f7;
    width: 100%;
    overflow: auto;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .nav-search-results::-webkit-scrollbar {
    width: 0.4em;
  }

  .nav-search-results::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #9ba4b5;
  }
  .nav-search-results::-webkit-scrollbar-thumb {
    background-color: #565656;
    outline: 1px solid slategrey;
    border-radius: 50px;
  }

  .nav-search-loading {
    width: 45px;
    margin: 0 auto;
  }
`;

export default Wrapper;
