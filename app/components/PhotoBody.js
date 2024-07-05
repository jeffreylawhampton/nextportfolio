"use client";
import { useEffect, useState } from "react";
import { useInViewRef, useWindowSize } from "rooks";
import { getImages } from "../actions";
import PhotoGallery from "./PhotoGallery";
import LightBox from "./LightBox";

const PhotoBody = ({
  images: initialPhotos,
  next_cursor: initialNextCursor,
  type,
  term,
}) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);
  const [nextCursor, setNextCursor] = useState(initialNextCursor);
  const [photos, setPhotos] = useState(initialPhotos);

  const isMobile = useWindowSize().innerWidth < 800;

  const options = {
    rootMargin: isMobile ? "200px 0px" : "400px 0px",
    threshold: 0,
  };
  const [myRef, inView] = useInViewRef(options);

  const handleLoadMore = async () => {
    if (nextCursor) {
      const results = await getImages(
        type,
        term,
        nextCursor,
        isMobile ? 5 : 10
      );
      const { images, next_cursor: updatedNextCursor } = results;
      setPhotos((prev) => [...prev, ...images]);
      setNextCursor(updatedNextCursor);
    }
  };

  const openLightbox = (photoIndex) => {
    setIndex(photoIndex);
    setOpen(true);
  };

  useEffect(() => {
    if (inView) {
      handleLoadMore();
    }
  }, [inView]);

  return (
    <>
      <LightBox open={open} setOpen={setOpen} images={photos} index={index} />
      <PhotoGallery
        layout="masonry"
        photos={photos}
        openLightbox={openLightbox}
        className="overflow-hidden"
      />
      <div ref={myRef}></div>
    </>
  );
};

export default PhotoBody;
