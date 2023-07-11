import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;

  .profile-container {
    position: relative;
  }

  
.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  overflow: hidden;
}

.img-container:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
}

.profile-img {
  width: 100%;
}

.img-container:hover > .profile-name {
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s;
  transform: translate(-90%, 0);
  opacity: 1;
}

.profile-name {
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  transform: translate(10%, 0);
  opacity: 0;
  color: #1a1a1a;
  text-transform: capitalize;
  letter-spacing: 1.1px;
}

  .drop-down {
    font-family: "Open Sans", sans-serif;
    position: absolute;
    top: 50px;
    z-index: 1;
    left: -95px;
    padding: 1.1rem 0.8rem;
    background-color: white;
    border-radius: 8px;
    transform: translateY(-30px);
    visibility:hidden ;
    opacity: 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    gap: 0.8rem;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s;
    display: none;
  }

  .name {
    font-size: 0.9rem;
    font-weight: bold;
  }
  .email {
    font-size: 0.7rem;
  }

  .list-items {
    font-size: 0.9rem;
    color: #191A19;
    letter-spacing: 0.5px;
    font-weight: 500;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s;
    cursor: pointer;
  }

  .name-email {
    display: grid;
    gap: 0.3rem;
    margin-bottom: 1.2rem;
  }

  .show-drop-down {
    visibility:visible ;
    transform: translateY(0px);
    opacity: 1;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s;
  }

  .nav-link{
    height: 35px;
  }

  @media (min-width: 768px) {
    .drop-down{
      display: grid;
    }
  }

  @media (min-width: 1024px) {
    .profile-container {
      cursor: pointer;
    }

    .list-items:hover {
      cursor: pointer;
      color: rgba(0, 0, 0, 0.527);
      transform: translateX(10px);
      transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s;
    }
  }
`;

export default Wrapper;
