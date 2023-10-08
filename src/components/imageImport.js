import React from "react";

// Import all image files from a specific folder using require.context
const importAll = (r) => {
  return r.keys().map(r);
};

// Define the folder path where your images are located
const images = importAll(
  require.context("./assets/images", false, /\.(jpg|jpeg|png|gif)$/)
);

const ImageGallery = () => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.default} // Use .default to access the image file
            alt={`Image ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
