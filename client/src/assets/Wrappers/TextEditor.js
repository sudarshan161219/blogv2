import styled from "styled-components";

const Wrapper = styled.div`
  .ql-editor {
    min-height: 5in;
    padding-top: 1rem;
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
