"use client";
import { useState } from "react";
import PhotoGallery from "./PhotoGallery";
import LightboxImage from "./LightboxImage";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const PhotoBody = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);
  const [maxZoomPixelRatio, setMaxZoomPixelRatio] = useState(2);

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
        render={{ slide: LightboxImage }}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio }}
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
