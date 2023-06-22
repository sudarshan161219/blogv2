import styled from "styled-components";

const Wrapper = styled.main`
  .card {
    background-color: #fff;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

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

  .homepage-img {
    width: 100%;
    height: 100%;
  }

  .homepage-info-container {
    padding: 1rem;
  }

  .homepage-text-info-container > p {
    display: none;
  }

  .homepage-text-info-container {
    text-align: left;
    display: grid;
    gap: 0.8rem;
  }

  .homepage-link {
    color: #475467;
    font-family: FontSemiBold;
    display: flex;
    justify-content: end;
  }

  .ptag > h1,
  h2,
  u {
    text-decoration: auto;
    font-size: 16px;
    font-family: FontRegular;
  }

  @media (min-width: 700px) {
    .card {
      padding: 1.2rem;
      display: flex;
      gap: 1rem;
    }

    .homepage-info-container {
      padding: 0;
      order: -1;
      width: 60%;
    }

    .homepage-img-container {
      border-radius: 15px;
      overflow: hidden;
      width: 40%;
      display: grid;
      align-items: center;
    }
    .homepage-text-info-container > p {
      display: block;
    }

    .homepage-author-info-container {
      justify-content: initial;
    }

    .homepage-author-info-container > span:nth-child(2):before {
      content: "/";
      margin-left: 0.5rem;
    }

    .homepage-link {
      color: #475467;
      font-family: FontSemiBold;
      width: 100px;
      display: block;
      /* justify-content: end; */
    }
  }

  @media (min-width: 1020px) {
    width: 800px;
    margin: auto;
    .homepage-link:hover {
      opacity: 0.5;
      transition: all 0.3s;
    }
  }
`;

export default Wrapper;
