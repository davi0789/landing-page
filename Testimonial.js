import React from "react";
import ProfilePic from "../Assets/user-profile-pic.png"; // Cambia a una imagen de perfil de un usuario
import { AiFillStar } from "react-icons/ai";


const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What Listeners Are Saying</h1>
        <p className="primary-text">
          "This platform has changed the way I discover music!"
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          "I love the personalized playlists. It's like having my own DJ!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jane Doe</h2>
      </div>
    </div>
  );
};

export default Testimonials;