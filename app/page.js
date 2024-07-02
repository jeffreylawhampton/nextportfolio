import { getCloudinaryImages } from "@/lib/getCloudImages";
import PhotoBody from "./components/PhotoBody";

export const metadata = {
  title: "Jeff Hampton",
  description: "My photo portfolio. Hope you like dogs.",
};

export const viewport = {
  initialScale: 1,
  width: "device-width",
};

const Page = async () => {
  return <PhotoBody images={await getCloudinaryImages("tags", "featured")} />;
};

export default Page;
