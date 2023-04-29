import styled from "styled-components";

const Wrapper = styled.div`
  .img-container > img {
    width: 100%;
  }

  .info-content{
    display: grid;
    gap: 1rem;
  }

  .info-content > h1 {
    margin-top: 1rem;
    font-size: 1.5rem;
    text-align: center;
  }

  .info-content > p {
    text-align: center;
    line-height: 1.5rem;
  }

  @media (min-width: 768px) {
    .img-container {
      display: flex;
      width: 500px;
      margin: 0 auto;
    }
  }

  @media (min-width: 1024px) {
    width: 750px;
    display: grid;
    margin: 0 auto;
  }
`;

export default Wrapper;
