import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getSession } from "@/lib";

const RootLayout = async ({ children }) => {
  const session = await getSession();

  return (
    <html lang="en">
      <body className="px-4 lg:px-4 xl:px-6 h-screen">
        <Header session={session} />
        <main className="min-h-[80%]">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
