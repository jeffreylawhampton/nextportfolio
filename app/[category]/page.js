import PhotoBody from "../components/PhotoBody";
import { categories } from "@/categories";
import { getCloudinaryImages } from "@/lib/getCloudImages";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  return categories.map(({ name }) => ({
    category: name,
  }));
};

const Page = async ({ params: { category } }) => {
  return <PhotoBody images={await getCloudinaryImages("folder", category)} />;
};

export default Page;
