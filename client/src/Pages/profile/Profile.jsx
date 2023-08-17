import { useEffect } from "react";
import ProfileAuthorPage from "./ProfileAuthorPage"
import Allposts from "./Allposts";
import { useAppContext } from "../../context/Context";
import { Loading } from "../../Components/export";

const Profile = () => {

  const { getProfile, user, profileisLoading } = useAppContext();
  useEffect(() => {
    getProfile();
  }, [user && user.name])


  return (
    <>
      {profileisLoading ? <Loading /> : <ProfileAuthorPage authorInfo={user} />}
      <Allposts />
    </>
  );
};

export default Profile;
