import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;

  .stats-container {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    gap: 1rem;
    margin-top: 2rem;
  }

  .stats-container > div {
    border: 1px solid #000;
    padding: 1rem;
    display: grid;
    gap: 0.5rem;
    width: 100%;
  }

  .dash-stats {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .most-viewed-article-container {
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
