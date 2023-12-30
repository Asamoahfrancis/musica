import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./ui/sidebar/page";
import Navbar from "./ui/navbar/page";
import Footer from "./ui/footer/page";
import Banner from "./ui/banner/page";
import GlobalCssPriority from "./ui/GlobalCssPriority";
import Play from "./context/Play";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Play>
          <GlobalCssPriority>
            <main className="grid grid-cols-10  md:block">
              <div className="col-span-2   bg-pink-950 ">
                <Sidebar />
              </div>
              <div className="relative z-[1] bg-pink-950 col-span-8">
                <Navbar />
                {children}
                <footer className="relative">
                  <Footer />
                </footer>
              </div>
              <div className=" fixed z-50 left-0  bottom-0 w-[100%] ">
                <Banner />
              </div>
            </main>
          </GlobalCssPriority>
        </Play>
      </body>
    </html>
  );
}
