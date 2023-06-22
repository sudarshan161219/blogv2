import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  .author_info_img_conyainer {
    display: flex;
    justify-content: center;
  }
  .author_info_img_conyainer > img {
    width: 150px;
    border-radius: 100%;
  }

  .author_info_info_container {
    display: grid;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    align-content: center;
  }
  .author_info_links_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .author_info_unodredlist {
    display: flex;
    gap: 1rem;
  }

  .author_info_unodredlist > li > a,
  .author_info_links_container > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #454545;
    gap: 0.1rem;
    font-weight: 500;
  }
  .link-icon {
    font-size: 1.5rem;
  }

  .social-icon {
    font-size: 1.5rem;
  }

  @media (min-width: 700px) {
    display: flex;
    gap: 1rem;
    width: 600px;
    margin: 0 auto;
    .author_info_img_conyainer > img {
      width: 160px;
    }

    .author_info_info_container {
      text-align: left;
    }
  }

  @media (min-width: 700px) {
    gap: 1.5rem;
    width: 700px;
    .author_info_img_conyainer > img {
      width: 200px;
    }
  }
`;

export default Wrapper;
