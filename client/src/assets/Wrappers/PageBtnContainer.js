import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;

  .btn-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 0.5rem;
    justify-content: center;
    border-radius: 10px;
    gap: 0.5rem;
  }

  .prev-btn,
  .next-btn,
  .pageBtn {
    width: 15px;
    height: 15px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: #fff;
    cursor: pointer;
    background-color: #9E9FA5;

  }
  .prev-btn:hover,
  .next-btn:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .prev-btn:active,
  .next-btn:active {
  }


  .pageBtn:hover {
  }

  .active {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  }

  @media (min-width: 500px) {
    justify-content: center;
  }

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

export default Wrapper;
