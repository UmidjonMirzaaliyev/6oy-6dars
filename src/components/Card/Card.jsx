import React from "react";

const Card = ({ photo }) => {
  return (
    <div className="card">
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <div className="card-body">
        <h5>{photo.title}</h5>
      </div>
    </div>
  );
};

export default Card;
