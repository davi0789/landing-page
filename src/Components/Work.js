import React from "react";

const Work = () => {
  const workInfoData = [
    {
      title: "Discover",
      text: "Find new music tailored to your taste.",
    },
    {
      title: "Playlists",
      text: "Create and share playlists with friends.",
    },
    {
      title: "Listen Anywhere",
      text: "Enjoy your music on any device.",
    },
  ];
  
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
      <p className="primary-subheading">How It Works</p>
        <h1 className="primary-heading">Discover Your Music Journey</h1>
        <p className="primary-text">
          Explore the features that make our platform unique.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;