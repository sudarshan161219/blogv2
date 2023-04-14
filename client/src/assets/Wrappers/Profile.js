import styled from "styled-components";

const Wrapper = styled.div`
  /* height: 100vh; */
  width: 100%;

  .profile-container {
    display: grid;
    gap: 1.5rem;
    justify-content: center;
  }

  .img-container {
    margin: 0 auto;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .profile-img {
    width: 70%;
  }

  .profile-info {
    text-align: center;
    letter-spacing: 1px;
  }

  strong {
    color: #454545;
  }

  p {
    margin-top: 1rem;
    font-family: "Open Sans", sans-serif;
    line-height: 1.5rem;
    font-weight: 500;
  }

  .profile-social-container {
    margin-top: 1rem;

    display: flex;
    justify-content: space-between;
  }

  .link > li > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #454545;
    gap: 0.1rem;
    font-weight: 500;
  }

  .link-icon {
    font-size: 1.5rem;
  }

  .socials {
    display: flex;
    gap: 1rem;
  }

  .social-icon {
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    .profile-container {
      width: 500px;
      margin: 0 auto;
    }
  }

  @media (min-width: 1024px) {
    .profile-container {
      width: 650px;
      display: flex;
      align-items:center;
      padding-left:5rem;
    }

    .img-container {
    width: 500px;
    height: 200px;
  }
  }
`;

export default Wrapper;
