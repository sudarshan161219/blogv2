import React, { useEffect } from "react";
import { profileFn } from "../Actions/Actions";
import {Hero} from "../sections/export"

const Home = () => {
  useEffect(() => {
    // profileFn(token);
  }, []);

  return (
    <Hero />
  )

};

export default Home;
