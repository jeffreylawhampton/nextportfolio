import PhotoBody from "../components/PhotoBody";
import { getCloudinaryImages } from "@/lib/getCloudImages";
import { getSession } from "@/lib/authentication";
import SignIn from "./SignIn";

export const metadata = {
  title: "Jeff Hampton",
  description: "Family photos",
};

export const viewport = {
  initialScale: 1,
  width: "device-width",
};

const Page = async () => {
  const session = await getSession();
  const resources = await getCloudinaryImages("folder", "family");

  return (
    <div>
      {session.hasAccess ? <PhotoBody images={resources} /> : <SignIn />}
    </div>
  );
};

export default Page;
