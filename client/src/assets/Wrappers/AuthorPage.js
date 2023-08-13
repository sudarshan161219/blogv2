import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;

  .postG {
    padding: 5rem 1rem;
    display: grid;
    gap: 2rem;
    background-color: rgb(242, 244, 247);
  }

  @media (min-width: 1020px) {
    .postG-heading-container {
      width: 800px;
      margin: auto;
    }
  }
`;

export default Wrapper;
