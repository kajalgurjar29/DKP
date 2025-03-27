import React from 'react'
import Featuredimage1 from "../../assets/Images/Rightimage1.png"
import RoleManagment from  "../../assets/Images/RoleManagement.png"
import Event from "../../assets/Images/Event.png"
import Customize from "../../assets/Images/Customize.png"
import Auction from "../../assets/Images/Auction.png"
import Transparecy from "../../assets/Images/Transparency.png"

import Featuredimage2 from "../../assets/Images/Rightimage2.png";

const HomeFeatures = () => {
  return (
    <div className="HomeFeatures_main_div">
      <div className="background_container">
        <h2 className="HomeFeatures_h1">
          Powerful features built for gaming <br /> communities and guilds.
        </h2>
        <div className="HomeFeatures_content_div">
          <div className="HomeFeatures_content_left">
            <div className="HomeFeatures_content_left_container">
              <img
                src={RoleManagment}
                alt="RoleManagment"
                className="HomeFeatures_content_left_container_image"
              />
              <h5 className="HomeFeatures_content_left_container_h5">
                Role Management
              </h5>
              <p className="HomeFeatures_content_left_container_p">
                Define specific permissions for raid leaders, event managers,
                and resource coordinators.
              </p>
            </div>
            <div className="HomeFeatures_content_left_container">
              <img
                src={Event}
                alt="Event"
                className="HomeFeatures_content_left_container_image"
              />
              <h5 className="HomeFeatures_content_left_container_h5">
                Event Creation and Point Assignment
              </h5>
              <p className="HomeFeatures_content_left_container_p">
                Automate point assignments for raids, PvP events, and more.
              </p>
            </div>
            <div className="HomeFeatures_content_left_container">
              <img
                src={Customize}
                alt="Customize"
                className="HomeFeatures_content_left_container_image"
              />
              <h5 className="HomeFeatures_content_left_container_h5">
                Customizable DKP Pools
              </h5>
              <p className="HomeFeatures_content_left_container_p">
                Manage shared and unique DKP pools for events.
              </p>
            </div>
            <div className="HomeFeatures_content_left_container">
              <img
                src={Auction}
                alt="Auction"
                className="HomeFeatures_content_left_container_image"
              />
              <h5 className="HomeFeatures_content_left_container_h5">
                Auction System
              </h5>
              <p className="HomeFeatures_content_left_container_p">
                Bid on items using DKP, with automated point deduction.
              </p>
            </div>
            <div className="HomeFeatures_content_left_container">
              <img
                src={Transparecy}
                alt="Transparecy"
                className="HomeFeatures_content_left_container_image"
              />
              <h5 className="HomeFeatures_content_left_container_h5">
                Transparency and Logs
              </h5>
              <p className="HomeFeatures_content_left_container_p">
                Comprehensive logs for attendance, events, and auctions.
              </p>
            </div>
          </div>
          <div className="HomeFeatures_content_right">
            <img
              src={Featuredimage1}
              alt="Featuredimage1"
              className="HomeFeatures_content_right_image"
            />
            <img
              src={Featuredimage2}
              alt="Featuredimage1"
              className="HomeFeatures_content_right_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFeatures