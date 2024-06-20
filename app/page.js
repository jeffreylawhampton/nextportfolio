import { getCloudinaryImages } from "@/lib/getCloudImages";
import PhotoBody from "./components/PhotoBody";

export const metadata = {
  title: "Jeff Hampton",
  description: "My photo portfolio. Hope you like dogs.",
};

const Home = async () => {
  return <PhotoBody images={await getCloudinaryImages("tags", "featured")} />;
};

export default Home;
