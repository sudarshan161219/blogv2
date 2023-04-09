import styled from "styled-components";

const Wrapper = styled.div`
      display: grid;
      justify-content: center;
      background-color: aliceblue;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      
  .logo {
    width: 120px;
    display: flex;
    justify-self: center;
  }

  .about-info > p{
    text-align:center;
    line-height: 1.2;
    font-size:  1.5rem;
    font-weight:400;
    letter-spacing: 1.2px;
  }

`;

export default Wrapper;
