import cloudinary from "@/utils/cloudinary";
import { getCldImageUrl } from "next-cloudinary";

const getBase = async (resource) => {
  const imageUrl = getCldImageUrl({
    src: resource.public_id,
    width: 100,
  });
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  return `data:${response.type};base64,${base64}`;
};

const mapImages = (resources) => {
  return resources.map(async (resource, index) => {
    const { width, height, context } = resource;
    const blurDataURL = await getBase(resource);

    return {
      id: resource.asset_id,
      src: resource.secure_url,
      width,
      height,
      alt: context?.alt || "",
      priority: index < 6 ? true : false,
      publicId: resource.public_id,
      title: resource.title,
      blurDataURL: blurDataURL,
    };
  });
};

export const getCloudinaryImages = async (
  type = folder,
  term,
  blurred = false
) => {
  const results = await cloudinary.search
    .expression(`${type}=${term}`)
    .with_field("context")
    .execute();
  const { resources } = results;
  const images = await Promise.all(mapImages(resources));
  return images;
};
