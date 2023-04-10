import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 2.2rem;
  background-color: black;
  padding: 2rem;
  color: antiquewhite;
  justify-content: center;
  text-align: center;
  padding: 5rem 0;

  ul {
    display: flex;
    gap: 1rem;
  justify-content: center;

  }

  .social-icon {
    font-size: 1.5rem;
  }

  .contact-info > h5,
  p {
    color: white;
  }

  h5 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.2;
    letter-spacing: 1px;
  }

  @media (min-width:1024px) {
    .social-icon {
    font-size: 1.8rem;
  }
  }
`;

export default Wrapper;
