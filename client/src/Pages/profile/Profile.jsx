import { useEffect } from "react";
import ProfileAuthorPage from "./ProfileAuthorPage"
import Allposts from "./Allposts";
import { useAppContext } from "../../context/Context";
import { Loading } from "../../Components/export";
import SavedPost from "./SavedPost"
const Profile = () => {

  const { getProfile, user, profileisLoading, togglePage } = useAppContext();
  useEffect(() => {
    getProfile();
  }, [user && user.name])


  return (
    <>
      {profileisLoading ? <Loading /> : <ProfileAuthorPage authorInfo={user} />}
      {togglePage === "post" ? <Allposts /> : <SavedPost />}
    </>
  );
};

export default Profile;
