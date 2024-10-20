import type { Metadata } from "next";
import {Nunito} from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";
import RegisterModal from "./components/modal/RegisterModal";
import LoginModal from "./components/modal/Login.Modal";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb fullstack project",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
          <ToasterProvider />
           <LoginModal />
          {/* <RentModal />
          <SearchModal />  */}
          <RegisterModal />
          <Navbar/>
        {children}
      </body>
    </html>
  );
}
