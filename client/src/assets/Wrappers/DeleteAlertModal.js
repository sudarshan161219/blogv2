import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  background: rgba(36, 35, 35, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  /* transition: all 0.1s; */
  h3 {
    color: #334253;
  }
  p {
    color: #67727e;
  }

  .modal {
    padding: 0.5rem 1rem;
    width: 100%;
    height: 200px;
    background-color: #fff;
    color: #000;
    display: grid;
    align-items: center;
  }

  .modal-btns {
    display: flex;
    justify-content: space-between;
  }

  .no {
    background-color: #67727e;
  }
  .yes {
    background-color: #ed6368;
  }
  .no,
  .yes {
    border: none;
    padding: 0.5rem;
    font-size: 18px;
    color: #fff;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  @media (min-width:700px){
    .modal{
      width: 450px;
    }
  }
`;

export default Wrapper;
