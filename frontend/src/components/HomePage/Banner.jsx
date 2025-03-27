import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LogoImage from "../../assets/Images/logo.png";
import "./HomePage.css";
import Image from "../../assets/Images/Home/Mask.png";
import Image1 from "../../assets/Images/Home/Mask1.png";
import Image2 from "../../assets/Images/Home/Mask2.png";
import Image3 from "../../assets/Images/Home/Mask3.png";
import Image4 from "../../assets/Images/Home/Mask4.png";
import Image5 from "../../assets/Images/Home/Mask5.png";
import { Link } from "react-router-dom";


const images = [Image, Image1, Image2, Image3, Image4, Image5];

const Banner = () => {
  return (
    <div className="banner_Layoout">
      <div className="background_container">
        <div className="Banner_main_container">
          <div className="Banner_Nav_div">
            <img src={LogoImage} alt="LogoImage" className="Banner_Nav_Logo" />
            <Link to="/Login" className="Banner_Nav_button">Login</Link>
          </div>
          <div className="Banner_Main_div">
            <div className="Banner_Main__content_div">
              <h3>Master DKP Management Across Games</h3>
              <p>
                A streamlined and flexible system to manage your guild’s Dragon
                Kill Points and events with ease.
              </p>
              <button className="text-white">
                Start for FREE{" "}
                <span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="Banner_Main__slider_div mr-56 flex sm:justify-start  ">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 1500 }}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="slider-image-div">
                <img className="slider-image" src={image} alt={`Slide ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
