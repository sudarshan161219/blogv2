import React from "react";
import Wrapper from "../assets/Wrappers/AboutS";

import pic1 from "../assets/imgs/Picture-1.png";
import pic2 from "../assets/imgs/Picture-2.png";
import pic3 from "../assets/imgs/Picture-3.png";
import pic4 from "../assets/imgs/Picture-4.png";
import pic5 from "../assets/imgs/Picture-5.png";

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
            Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi
            qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui
            minim pariatur et officia elit id. Tempor cupidatat veniam esse ad
            veniam dolore excepteur tempor dolor consectetur ut id.
          </p>
        </div>
      </div>

      {/* third contaniner */}
      <div className="third-container">
        <div className="third-info-container">
          <h4>We tell stories that drives the heart.</h4>
          <p>
            Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi
            qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui
            minim pariatur et officia elit id. Tempor cupidatat veniam esse ad
            veniam dolore excepteur tempor dolor consectetur ut id.
          </p>
        </div>
        <div className="img-container">
          <img src={pic3}  alt="pic" />
        </div>

        <div className="stack-img">
            <img src={pic3} className="third-pic-1  pic" alt="pic" />
            <img className="third-pic-2  pic" src={pic4} alt="pic" />
            <img className="third-pic-3 pic" src={pic5} alt="pic" />
          </div>
      </div>
    </Wrapper>
  );
};

export default AboutS;