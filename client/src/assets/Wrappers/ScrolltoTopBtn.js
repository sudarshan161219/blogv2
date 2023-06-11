import styled from "styled-components";

const Wrapper = styled.div`
  .up-container {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    bottom: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
    background: rgba(36, 35, 35, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(11px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: all 0.6s ease-in-out;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transform: translateX(200%);
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
  }

  .up-icon {
    font-size: 1.3rem;
  }

  .show {
    transform: translateX(0%);
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
  }
`;

export default Wrapper;
