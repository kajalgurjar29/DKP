import React from "react";
import frame1 from "../../assets/Images/Frame1.png";
import frame2 from "../../assets/Images/Frame1.png";
import frame3 from "../../assets/Images/Frame1.png";
import frame4 from "../../assets/Images/Frame1.png";

const Members = () => {
  return (
    <div className="Members_main_container">
      <div className="background_container">
        <div className="Members_main_container_div">
          <h2 className="Members_main_container_h2">
            Built for Every Member of Your <br /> Gaming Community
          </h2>
          <div className="Members_main_container_content_div">
            <div className="Members_main_container_content_imagediv">
              <img
                src={frame1}
                alt="frame1"
                className="Members_main_container_content_image"
              />
              <h3 className="Members_main_container_content_image_h3">
                Guild Leaders
              </h3>
            </div>
            <div className="Members_main_container_content_imagediv">
              <img
                src={frame2}
                alt="frame2"
                className="Members_main_container_content_image"
              />
              <h3 className="Members_main_container_content_image_h3">
                 Event Managers
              </h3>
            </div>
            <div className="Members_main_container_content_imagediv">
              <img
                src={frame3}
                alt="frame3"
                className="Members_main_container_content_image"
              />
              <h3 className="Members_main_container_content_image_h3">
                Guild Members
              </h3>
            </div>
            <div className="Members_main_container_content_imagediv">
              <img
                src={frame4}
                alt="frame4"
                className="Members_main_container_content_image"
              />
              <h3 className="Members_main_container_content_image_h3">
                Multi-game <br /> Communities
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
