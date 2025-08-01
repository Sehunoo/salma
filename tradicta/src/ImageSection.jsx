import React from "react";

function ImageSection({ title, description, image, alt }) {
  return (
    <div className="image-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={alt} />
    </div>
  );
}

export default ImageSection;
