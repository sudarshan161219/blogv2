import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;

  .stats-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }

  .stats-container > div {
    border: 1px solid #000;
    padding: 1rem;
    display: grid;
    gap: 0.5rem;
  }

  .dash-stats {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .most-viewed-article-container {
  }

  .most-viewed-article-container > strong,
  span {
    text-align: left;
  }
`;

export default Wrapper;
