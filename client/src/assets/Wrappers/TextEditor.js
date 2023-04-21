import styled from "styled-components";

const Wrapper = styled.div`
  /* height: 100vh; */
  /* margin-bottom: 5rem; */
  .ql-editor {
    min-height: 3in;
    padding-top: 2rem;
  }

  .ql-toolbar.ql-snow .ql-formats {
    margin: 0;
  }

  .ql-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #f3f3f3;
  }

  
`;

export default Wrapper;
