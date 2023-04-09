import React from "react";
import Wrapper from "../assets/Wrappers/AboutS";

import pic1 from "../assets/imgs/Picture-1.png";
import pic2 from "../assets/imgs/Picture-2.png";
const AboutS = () => {
  return (
    <Wrapper>
      {/* first contaniner */}
      <div className="first-container">
        <div className="first-info-container">
          <h4>We tell stories that drives the heart.</h4>
          <p>
            Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi
            qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui
            minim pariatur et officia elit id. Tempor cupidatat veniam esse ad
            veniam dolore excepteur tempor dolor consectetur ut id.
          </p>
        </div>
        <img src={pic1} alt="pic" />
      </div>

      {/* second container */}
      <div className="second-container">
        <img src={pic2} alt="pic" />
        <div className="second-info-container">
          <h4>We tell the news that makes the most impact.</h4>
          <p>
          Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.
          </p>
        </div>
      </div>


      {/* first contaniner */}
      <div className="first-container">
        <div className="first-info-container">
          <h4>We tell stories that drives the heart.</h4>
          <p>
            Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi
            qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui
            minim pariatur et officia elit id. Tempor cupidatat veniam esse ad
            veniam dolore excepteur tempor dolor consectetur ut id.
          </p>
        </div>
        <img src={pic1} alt="pic" />
      </div>

    </Wrapper>
  );
};

export default AboutS;
