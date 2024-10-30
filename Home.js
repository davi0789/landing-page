import React from "react";
import BannerBackground from "../Assets/home-banner-background.png"; 
import BannerImage from "../Assets/home-banner-image.jpg"; 
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Banner Background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Discover Your Next Favorite Song
          </h1>
          <p className="primary-text">
            Explore a world of music tailored just for you.
          </p>
          <button className="secondary-button">
            Listen Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Banner" />
        </div>
      </div>
    </div>  
  );
};

export default Home;