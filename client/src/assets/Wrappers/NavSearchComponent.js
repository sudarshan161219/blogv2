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

  .dark.nav-input {
    background-color: #1f1e21;
    color: var(--darkMText2);
  }

  .dark.nav-input:placeholder-show {
    color: var(--darkMText2);
  }

  .search-container-searchIcon {
    position: absolute;
    left: 10px;
    opacity: 0.5;
  }

  .dark.search-container-searchIcon,
  .dark.search-container-closeIcon {
    color: var(--darkMText2);
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
    position: fixed;
    left: 0;
    background-color: #f2f4f7;
    width: 100%;
    height: 92vh;
    overflow: auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;  
  }

  .nav-search-results-hide {
    height: 0px;
  }
  .dark.nav-search-results {
    background-color: var(--darkMCardBg);
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
    width: 75px;
    margin: 0 auto;
  }

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  /* margin: 8px; */
  border: 2px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


  @media (min-width: 710px) {
    .nav-search-results {
      display: grid;
      gap: 1rem;
      margin-top: 0.2rem;
      position: absolute;
      background-color: #f2f4f7;
      width: 100%;
      overflow: auto;
      border-radius: 10px;
      height: 250px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
`;

export default Wrapper;
