import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  .post-card {
    display: grid;
    width: 100%;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  }

  .image {
    height: 200px;
  }

  .image img {
    display: block;
    width: 100%;
    height: inherit;
    object-fit: cover;
  }

  .content {
    padding: 2rem 1.8rem;
  }

  h4 {
    margin: 0 0 1rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  .description {
    font-size: 1rem;
    line-height: 1.4rem;
  }

  .loader .image,
  .loader h4,
  .loader .description {
    background-color: #ededed;
    background: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 60%
      )
      #ededed;
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s loader ease-in-out infinite;
  }

  @keyframes loader {
    to {
      background-position-x: -20%;
    }
  }

  .loader h4 {
    min-height: 1.6rem;
    border-radius: 4px;
    animation-delay: 0.05s;
  }

  .loader .description {
    min-height: 4rem;
    border-radius: 4px;
    animation-delay: 0.06s;
  }

  @media (min-width: 768px) {
    .post-card {
      width: 700px;
      display: flex;
      padding: 1.2rem;
      gap: 1rem;
      align-items: center;
    }
    .image {
      width: 40%;
    }

    .content {
      padding: 0;
      order: -1;
      width: 60%;
    }
  }

  @media (min-width: 1020px) {
    width: 800px;
    margin: auto;
  }
`;

export default Wrapper;
