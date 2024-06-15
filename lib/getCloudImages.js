import cloudinary from "@/utils/cloudinary";
import { getCldImageUrl } from "next-cloudinary";

const getBase = async (image) => {
  const imageUrl = getCldImageUrl({
    src: image.publicId,
    width: 100,
  });
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  const dataUrl = `data:${response.type};base64,${base64}`;
  return dataUrl;
};

const mapImages = (resources) => {
  return resources.map((resource, index) => {
    const { width, height, context } = resource;
    return {
      id: resource.asset_id,
      image: resource.secure_url,
      url: resource.url,
      src: resource.url,
      width,
      height,
      alt: context?.alt || "",
      priority: index < 6 ? true : false,
      publicId: resource.public_id,
    };
  });
};

export const getCloudinaryImages = async (type = folder, term) => {
  const results = await cloudinary.search
    .expression(`${type}=${term}`)
    .with_field("context")
    .execute();
  const { resources } = results;
  const images = mapImages(resources);
  const base64s = await Promise.all(
    images.map(async (image) => await getBase(image))
  );

  for (let i = 0; i < images.length; i++) {
    images[i].blurDataURL = base64s[i];
  }
  return images;
};
