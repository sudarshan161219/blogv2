import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;

  .stats-container {
    padding: 1rem;
    display: grid;
    gap: 1.1rem;
    grid-template-columns: repeat(auto-fit, minMax(min(100%, 250px), 1fr));
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
  .most-viewed-container {
    padding: 1rem;
  }

  .most-viewed-article-container {
    border: 1px solid #000;
    padding: 1rem;
    display: grid;
    gap: 0.5rem;
    width: 300px;
  }

  .stats-container > div > strong,
  span {
    text-align: left;
  }

  .dashloading {
    width: 50px;
  }
`;

export default Wrapper;
