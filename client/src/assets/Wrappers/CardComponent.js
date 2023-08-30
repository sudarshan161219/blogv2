import styled from "styled-components";

const Wrapper = styled.article`
  background-color: var(--cardbg);
  overflow: hidden;
  border-radius: 15px;

  .homepage-author-info-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    
  }

  .homepage-author-info-container > span:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .homepage-img-container {
    height: 200px;
    overflow: hidden;
  }

  .homepage-img {
    width: 100%;
  }

  .homepage-info-container {
    display: grid;
    padding: 1rem;
  }

   .ptag {
    display: none;
  }

  .homepage-text-info-container {
    text-align: center;
    display: grid;
    gap: 0.8rem;
  }

  .homepage-link {
    color: #475467;
    font-family: FontSemiBold;
    display: flex;
    justify-content: end;
  }

  .dark .ptag{
    color:  var(--darkMText2);
  }

  .ptag > h1,
  h2,
  u {
    text-decoration: auto;
    font-size: 16px;
    font-family: FontRegular;
  }

  .action-link-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .edit-icon,
  .delete-icon {
    font-size: 1.3rem;
    color: #121212;
    padding: 0.6rem;
    border-radius: 50%;
  }

  .delete-icon:active {
    background-color: #e06469;
    color: antiquewhite;
  }

  .edit-icon:active {
    background-color: #afd3e2;
  }
  .read {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1rem;
    font-family: FontSemiBold;
    color: #475467;
    line-height: 130%;
  }

  @media (min-width: 700px) {
    .card {
      padding: 1.2rem;
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .homepage-info-container {
      padding: 0;
      order: -1;
      width: 60%;
    }
    .homepage-text-info-container {
      text-align: left;
    }

    .homepage-img-container {
      border-radius: 15px;
      overflow: hidden;
      width: 40%;
      display: grid;
      align-items: center;
      order: 1;
    }
 .ptag {
      display: block;
    }

    .homepage-author-info-container {
      justify-content: initial;
    }

    .homepage-author-info-container > span:nth-child(2):before {
      content: "/";
      margin-left: 0.5rem;
    }

  }

  @media (min-width: 1020px) {
    width: 800px;
    margin: auto;
    .homepage-link:hover {
      opacity: 0.5;
      transition: all 0.3s;
    }
    .delete-icon:hover {
      background-color: #e06469;
      color: antiquewhite;
    }

    .edit-icon:hover {
      background-color: #afd3e2;
    }

    :hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      transition: all 0.3s;
    }

    .read:hover{
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;

export default Wrapper;
