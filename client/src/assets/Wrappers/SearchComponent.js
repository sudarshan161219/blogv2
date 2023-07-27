import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
  margin-bottom: 3rem;
  .search-container {
    margin: 0 1rem;
  }
  /* margin: 0 1rem 3rem 1rem; */
  .search-container-form {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* padding: 0 1rem; */
  }
  .search-container-input {
    width: 100%;
    position: relative;
    border: 0.1rem solid #2b2b2b;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    outline: none;
    font-size: 1.1rem;
    padding: 0.5rem 0.8rem;
    border-radius: 15px;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 1px;
    font-weight: 500;
    color: #2b2b2b;
  }

  .search-container-input::placeholder {
    font-weight: 400;
    opacity: 0.8;
    font-size: 0.9rem;
  }

  .icon-container {
    position: absolute;
    right: 25px;
    /* padding: 0.4rem 0 0.4rem 0.4rem; */
    background-color: white;
    border-radius: 50%;
  }

  .search-container-searchIcon {
    font-size: 1.1rem;
    color: #2b2b2b;
  }

  .btn-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.7rem;
  }

  .btn-tag {
    border: #2b2b2b 1px solid;
    font-size: 1.1rem;
    padding: 0.2rem 1rem;
    border-radius: 20px;
    appearance: none;
    background-color: transparent;
    box-sizing: border-box;
    color: #1c1c1c;
    cursor: pointer;
    display: inline-block;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    outline: none;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
  }

  .btn-tag:hover {
    -webkit-tap-highlight-color: transparent;
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  .btn-tag:active {
    box-shadow: none;
    transform: translateY(0);
  }

  .css-b62m3t-container {
    width: 210px;
    border-radius: 10px;
  }

  .css-13cymwt-control {
    border-color: hsl(0deg 0% 3.15%);
    border-radius: 15px;
  }

  .select-container {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin: 0 1rem;
  }

  @media (min-width: 700px) {
    /* width: 800px; */
    display: grid;
    margin: 0 auto;
    align-items: baseline;
    flex-direction: inherit;

    .search-container-form {
      width: 500px;
    }
    .css-b62m3t-container {
      width: 50%;
    }
  }
`;

export default Wrapper;
