import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  padding: 1rem;
  height: 200px;
  align-items: center;
  gap: 2rem;
  .author_info_img_container {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }


  .author_img_container > img {
    width: 100px;
    outline: #fff 2px solid;
    border-radius: 100%; 
  }

  .author_info_heading-button {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .light.author_info_button {
    height: 30px;
    width: 90px;
    background-color: var(--bodybg);
    color: var(--heading);
    outline: 1px solid var(--heading);
  }

  .dark.author_info_button {
    height: 30px;
    width: 90px;
    background-color: var(--darkMButtonBg);
    color: #fff;
    outline: 1px solid var(--darkmText);
  }

  .dark.author_info_button:hover,
  .light.author_info_button:hover {
    opacity: 0.5;
  }

  .author_info_btn-container > button > .author_info_btn-container-link {
    color: #454545;
  }
  .total-posts-span {
    font-family: fontRegularsec;
    font-size: 0.9rem;
    color: #454545;
  }
  .dark.total-posts-span {
    color: var(--darkMText2);
  }

  .author_info_container {
    display: grid;
    gap: 0.5rem;
  }

  .author_info_heading-button > button:hover > .author_info_btn-container-link {
    color: white;
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

  .author_info_btn-container {
    width: 100%;
    display: flex;
    justify-content: end;
  }

  .dark.link-icon,
  .dark.link-icon .dark.author_info_btn-container-link {
    color: var(--darkMText1);
  }

  .profile-nav {
    border-top: 1px solid var(--darkMText2);
    padding-top: 1rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    position: relative;
  }

  .light.navigator {
    position: absolute;
    width: 100px;
    height: 3px;
    top: 0;
    border-radius: 5px;
    background-color: #454545;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
  }
  .dark.navigator {
    position: absolute;
    width: 100px;
    height: 3px;
    top: 0;
    border-radius: 5px;
    background-color: #fff;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
  }

  .profile-nav div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: fontRegularsec;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .dark.profile-nav-p {
    color: var(--darkMText2);
  }

  @media (min-width: 700px) {
    justify-content: center;
    width: 500px;
    margin: auto;
    .author_img_container {
      width: 120px;
    }
  }
`;

export default Wrapper;
