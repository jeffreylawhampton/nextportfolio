"use client";
import PhotoAlbum from "react-photo-album";
import CloudImage from "../CloudImage";

const PhotoGallery = ({ photos, layout, openLightbox }) => {
  return (
    <PhotoAlbum
      layout={layout}
      spacing={4}
      renderPhoto={CloudImage}
      columns={(containerWidth) => {
        if (containerWidth < 800) return 1;
        if (containerWidth < 1400) return 2;
        if (containerWidth > 2200) return 4;
        return 3;
      }}
      photos={photos}
      onClick={({ index }) => {
        openLightbox(index);
      }}
    />
  );
};

export default PhotoGallery;
