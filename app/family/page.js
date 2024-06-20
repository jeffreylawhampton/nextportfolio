import PhotoBody from "@/app/components/PhotoBody";
import { getCloudinaryImages } from "@/lib/getCloudImages";
import { getSession } from "@/lib";
import SignIn from "../components/SignIn";

const Page = async () => {
  const session = await getSession();
  return session.hasAccess ? (
    <PhotoBody images={await getCloudinaryImages("folder", "family")} />
  ) : (
    <SignIn />
  );
};

export default Page;
