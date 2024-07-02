import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./loading";
import { getSession } from "@/lib/authentication";
import { categories } from "@/lib/categories";

import { Suspense } from "react";

const RootLayout = async ({ children }) => {
  const session = await getSession();
  const { hasAccess } = session;
  return (
    <html lang="en">
      <body className="px-4 lg:px-4 xl:px-6">
        <Header hasAccess={hasAccess} categories={categories} />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
