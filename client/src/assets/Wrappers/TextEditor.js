import styled from "styled-components";

const Wrapper = styled.div`
  .ql-editor{
    min-height: 5in;
    padding-top: 2rem;
  }

  .ql-toolbar.ql-snow .ql-formats {
    margin:0;
  }

  .ql-toolbar{
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    position:sticky;
    top: 0;
    z-index: 1;
    background-color:#f3f3f3;
    /* border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
  }

  
`;

export default Wrapper;
