import styled from "styled-components";

const Wrapper = styled.div`
padding:1rem;
background-color: var( --bodybg);
.cards{
  display:grid;
    gap: 1.3rem;
}
  @media (min-width: 1024px) {
    .allPost-heading {
      text-align: center;
    }
    -webkit-box-pack: center;
    justify-content: center;
    display: grid;
    gap: 2rem;
    /* width: 800px; */
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .allPost-heading {
      text-align: left;
    }
  }
`;

export default Wrapper;
