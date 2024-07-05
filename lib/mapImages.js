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

export const mapImages = (resources) => {
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
