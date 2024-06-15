import PhotoBody from "../components/PhotoBody";
import { categories } from "@/categories";
import { getCloudinaryImages } from "@/lib/getCloudImages";

export const dynamicParams = false;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.name,
  }));
}

export default async function Page({ params }) {
  const { category } = params;
  const images = await getCloudinaryImages("folder", category);

  return (
    <div>
      <PhotoBody images={images} />
    </div>
  );
}
