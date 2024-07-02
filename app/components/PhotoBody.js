"use client";
import { useState } from "react";
import PhotoGallery from "./PhotoGallery";
import LightBox from "./LightBox";

const PhotoBody = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);

  const openLightbox = (photoIndex) => {
    setIndex(photoIndex);
    setOpen(true);
  };

  return (
    <>
      <LightBox open={open} setOpen={setOpen} images={images} index={index} />
      <PhotoGallery
        layout="masonry"
        photos={images}
        openLightbox={openLightbox}
        className="overflow-hidden"
      />
    </>
  );
};

export default PhotoBody;
