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

  /* @media (min-width: 1366px) {

  } */
`;

export default Wrapper;
