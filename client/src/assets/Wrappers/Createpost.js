import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  color: #2b2b2b;
  letter-spacing: 1px;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 1rem 1rem 5rem 1rem;
  .row {
    margin-top: 2rem;
  }
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
    outline: 1px solid var(--darkMText2);
    width: 100%;
  }

  .form-group {
    margin-top: 2rem;
  }

  .editor {
    margin-bottom: 1rem;
  }

  .title-input {
    outline: none;
    padding: 0.7rem;
    border: 1px solid #cccccc;
    font-size: medium;
    letter-spacing: 1px;
    font-weight: 500;
    border-radius: 5px;
  }

  .dark.title-input {
    background-color: #1f1e21;
    color: var(--darkMText2);
  }

  .btn-container {
    margin-top: 1rem;
  }

  .basic-multi-select.css-b62m3t-container {
    margin: 1rem 0;
    width: 300px;
    z-index: 5;
  }

  .tags-container {
    margin: 1rem 0;
    display: grid;
    gap: 0.5rem;
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

  .add-tag-btn {
    font-size: 1.5rem;
    position: absolute;
    right: 3px;
    cursor: pointer;
    transition: ease-in-out 0.3s;
    -webkit-tap-highlight-color: transparent;
  }
  .dark.add-tag-btn {
    color: var(--darkMText2);
  }

  .add-tag-btn:hover,
  .tag-delete-icon:hover {
    opacity: 0.7;
  }

  .tag-delete-icon {
    cursor: pointer;
    transition: ease-in-out 0.3;
    -webkit-tap-highlight-color: transparent;
  }

  .tag-title-input-container {
    display: flex;
    align-items: center;
    position: relative;
  }

  .tag-input {
    width: 100%;
    font-family: fontRegularsec;
    border: none;
    outline: #cccccc 1px solid;
    padding: 0.5rem 0rem 0.5rem 00.5rem;
    height: 20px;
    font-size: 1rem;
    border-radius: 5px;
  }

  .dark.tag-input {
    background-color: var(--darkMCardBg);
    color: var(--darkMText1);
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
    color: #cccccc;
    height: 30px;
  }

  .tags-container > strong > span {
    font-weight: bold;
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }

  .tag {
    background-color:  #cccccc;
    color:  #1f1e21;
    padding: 0.3rem;
    border-radius: 5px;
    outline: 1px #1f1e21 solid;
  }
  .dark.tag {
    outline: 1px var(--darkMText2) solid;
    background-color: #1f1e21;
    color: var(--darkMText2);
  }

  .tag-select {
    display: grid;
  }
  .css-b62m3t-container {
    z-index: 10;
  }

  .dark .css-1nmdiq5-menu:hover {
    background-color: var(--darkMCardBg);
    color: var(--darkMText1);
  }
  .dark .css-1dimb5e-singleValue {
    color: var(--darkMText1);
  }
  .dark.search-container-input,
  .dark .css-13cymwt-control,
  .dark .css-t3ipsp-control,
  .dark .css-1nmdiq5-menu {
    background-color: var(--darkMCardBg);
    color: var(--darkMText1);
  }

  @media (min-width: 1024px) {
    padding: 1rem 2rem;
    width: 900px;
    margin: 0 auto;
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
    .tag-delete-icon:hover {
      cursor: pointer;
    }

    /* .tag-select {
      display: flex;
      gap: 1rem;
      align-items: center;
      flex-direction: row-reverse;
    } */

    .css-b62m3t-container,
    .tags-container {
      width: 50%;
    }
  }
`;

export default Wrapper;
