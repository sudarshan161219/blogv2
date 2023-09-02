import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  padding-top: 5rem;

  .dark.postG {
    background-color: #1f1e21;
    padding: 5rem 1rem;
    display: grid;
    gap: 2rem;
  }

  .light.postG {
    padding: 5rem 1rem;
    display: grid;
    gap: 2rem;
    background-color: #f2f4f7;
  }

  @media (min-width: 1020px) {
    .postG-heading-container {
      width: 800px;
      margin: auto;
    }
  }
`;

export default Wrapper;
