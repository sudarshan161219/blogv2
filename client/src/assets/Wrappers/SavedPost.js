import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  display: grid;
  gap: 1rem;

  .saved-card {
    display: grid;
    gap: 1rem;
  }

  @media (min-width: 1000px) {
    .saved-card {
      width: 800px;
      margin: 0 auto;
    }
  }
`;

export default Wrapper;
