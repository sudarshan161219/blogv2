import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.4rem;
  border-bottom: 1px solid #DBDFEA;


  .searchedItem {
    font-family: fontRegular;
    font-size: 1.1rem;
    color: #1d2939;
    display: flex;
    width: 100%;
    align-items: center;
    gap: 0.5rem;
  }

  .dark.searchedItem{
    color: var(--darkMText4);
  }

  .dark.searchedItem-author{
    color: var(--darkMText4);
  }

  .searchedItem-img-container {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
  }

  .searchedItem-img {
    width: 100%;
    height: 100%;
  }
  .searchedItem-span {
    font-style: italic;
    font-size: 0.8rem;
  }
`;

export default Wrapper;
