"use server";
import cloudinary from "@/utils/cloudinary";
import { mapImages } from "@/lib/mapImages";

export async function getImages(type = "folder", term, cursor, limit = 10) {
  const results = await cloudinary.search
    .expression(`${type}=${term}`)
    .with_field("context")
    .next_cursor(cursor)
    .max_results(limit)
    .execute();

  const { resources, next_cursor } = results;

  const images = await Promise.all(mapImages(resources));

  return {
    images,
    next_cursor: next_cursor || false,
  };
}
