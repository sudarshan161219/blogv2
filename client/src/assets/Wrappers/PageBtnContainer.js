import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
  margin-top: 2rem;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;


  .btns{
    display: flex;
    flex-wrap:wrap;
  }

  .prev-btn,
  .next-btn {
    padding: 0.5rem 0.5rem;
    margin:0 0.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    appearance: none;
    background-color: transparent;
    border: 1px solid #1c1c1c;
    border-radius: 8px;
    box-sizing: border-box;
    color: #1c1c1c;
    cursor: pointer;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-weight: 600;
    outline: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
  }
  .prev-btn:hover,
  .next-btn:hover {
    -webkit-tap-highlight-color: transparent;
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  .prev-btn:active,
  .next-btn:active {
    box-shadow: none;
    transform: translateY(0);
  }


  
  .pageBtn{
    width: 30px;
    height: 30px;
    /* margin: 0.1rem 0.1rem; */
    cursor: pointer;
    appearance: none;
    background-color: transparent;
    /* border: 1px solid #1c1c1c; */
    border: none;
    /* border-radius: 8px; */
    box-sizing: border-box;
    color: #1c1c1c;
    cursor: pointer;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    outline: none;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
  }

  .pageBtn:hover{
    -webkit-tap-highlight-color: transparent;
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  /* .pageBtn:active{
    box-shadow: none;
    transform: translateY(0);
  } */

 .active{
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  }

  @media (min-width: 500px) {
   justify-content:center ;
  }


  @media (min-width: 1024px) {
   justify-content:center ;
  }

`;

export default Wrapper;
