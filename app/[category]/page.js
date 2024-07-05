import PhotoBody from "../components/PhotoBody";
import { categories } from "@/lib/categories";
import { getImages } from "../actions";
import { getSession } from "@/lib/authentication";
import SignIn from "../components/SignIn";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  return categories.map((category) => ({
    category,
  }));
};

const Page = async ({ params: { category } }) => {
  const { hasAccess } = await getSession();
  const { images, next_cursor } = await getImages("folder", category);

  return category === "family" && !hasAccess ? (
    <SignIn />
  ) : (
    <PhotoBody
      images={images}
      next_cursor={next_cursor}
      type={"folder"}
      term={category}
    />
  );
};

export default Page;
