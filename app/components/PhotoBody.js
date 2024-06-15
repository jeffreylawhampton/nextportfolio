"use client";
import { useState } from "react";
import PhotoGallery from "./PhotoGallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const PhotoBody = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);

  const openLightbox = (photoIndex) => {
    setIndex(photoIndex);
    setOpen(true);
  };

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />

      <PhotoGallery
        layout="masonry"
        photos={images}
        openLightbox={openLightbox}
      />
    </>
  );
};

export default PhotoBody;
