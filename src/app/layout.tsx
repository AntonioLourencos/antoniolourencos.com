import "./globals.css";
import 'remixicon/fonts/remixicon.css'

import { Quicksand } from "next/font/google";
import getMetadata from "../common/shared/metadata";


// Components
import Header from "../components/shared/header";
import Footer from "../components/shared/footer";

const QuisandFont = Quicksand({ preload: true, weight: ["400", "500", "700"], subsets: ["latin-ext"] });

export const metadata = getMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body className={`${QuisandFont.className} flex flex-col bg-stone-800  min-h-screen  px-8 md:px-32 lg:px-52 2xl:px-96`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>

  );
}
