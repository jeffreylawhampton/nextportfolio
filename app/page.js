import "yet-another-react-lightbox/styles.css";
import { getCloudinaryImages } from "@/lib/getCloudImages";
import PhotoBody from "./components/PhotoBody";

export default async function Home() {
  const images = await getCloudinaryImages("tags", "featured");
  return (
    <div>
      <PhotoBody images={images} />
    </div>
  );
}
