import React from "react";
import Component from "../../assets/Images/Component2.png";
import Component3 from "../../assets/Images/Component3.png";
import Component4 from "../../assets/Images/Component4.png";
import Component5 from "../../assets/Images/Component5.png";
import boybannerimage from "../../assets/Images/boybanner.png";
import section2blur1 from "../../assets/Images/section2blurimage1.png";


const Goals = () => {
  return (
    <div className="Goals_main_div">
      <div className="background_container">
        <div className="Goals_main_container">
          <h2 className="Goals_main_container_h2">
            Our Goals: Designed for Your Success
          </h2>
          <div className="Goals_main_content_container">
            <div className="Goals_main_content_container_left">
              <div className="Goals_main_content_container_content">
                <img
                  src={Component}
                  alt="Component"
                  className="Goals_main_content_container_image"
                />
                <h5 className="Goals_main_content_container_h5">
                  Rapid Development
                </h5>
                <p className="Goals_main_content_container_p">
                  Deliver a Minimum Viable Product (MVP) quickly to attract
                  paying customers and gather feedback.
                </p>
              </div>
              <div className="Goals_main_content_container_content ">
                <img
                  src={Component4}
                  alt="Component"
                  className="Goals_main_content_container_image"
                />
                <h5 className="Goals_main_content_container_h5">
                  Rapid Development
                </h5>
                <p className="Goals_main_content_container_p">
                  Deliver a Minimum Viable Product (MVP) quickly to attract
                  paying customers and gather feedback.
                </p>
              </div>
            </div>
            <div className="Goals_main_content_container_right">
              <div className="Goals_main_content_container_content">
                <img
                  src={Component3}
                  alt="Component"
                  className="Goals_main_content_container_image"
                />
                <h5 className="Goals_main_content_container_h5">Flexibility</h5>
                <p className="Goals_main_content_container_p">
                  Enable guild leaders to customize the system to fit their
                  specific needs, including roles, point allocation, and
                  contribution tracking.
                </p>
              </div>
              <div className="Goals_main_content_container_content margintop">
                <img
                  src={Component5}
                  alt="Component"
                  className="Goals_main_content_container_image"
                />
                <h5 className="Goals_main_content_container_h5">Flexibility</h5>
                <p className="Goals_main_content_container_p">
                  Enable guild leaders to customize the system to fit their
                  specific needs, including roles, point allocation, and
                  contribution tracking.
                </p>
              </div>
            </div>
            <img
              src={boybannerimage}
              alt="boybanner"
              className="Goals_main_content_container_boyimage"
            />
          </div>
        </div>
      </div>
      <img
        className="HomeFeatures_content_div_blur1"
        src={section2blur1}
        alt="section2blur1"
      />
      <img
        className="HomeFeatures_content_div_blur2"
        src={section2blur1}
        alt="section2blur1"
      />
    </div>
  );
};

export default Goals;
