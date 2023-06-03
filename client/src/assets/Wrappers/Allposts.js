import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 1024px) {
    h1 {
      text-align: center;
    }
    -webkit-box-pack: center;
    justify-content: center;
    display: grid;
    gap: 2rem;
    width: 800px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .card {
      grid-template-columns: repeat(3, 1fr);
      display: grid;
      gap: 1rem;
    }
  }

  @media (min-width: 1024px) {
    .card {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1360px) {
    .card {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Wrapper;
