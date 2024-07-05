import { getImages } from "./actions";
import PhotoBody from "./components/PhotoBody";

export const metadata = {
  title: "Jeff Hampton",
  description: "My photo portfolio. Hope you like dogs.",
};

const Page = async () => {
  const { images, next_cursor } = await getImages("tags", "featured");

  return (
    <PhotoBody
      images={images}
      next_cursor={next_cursor}
      type="tags"
      term="featured"
    />
  );
};

export default Page;
