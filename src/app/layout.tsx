import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import TopNav from "@/components/TopNav";
import SideNav from "@/components/SideNav";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Gamerz",
  description: "Site for gamers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> */}
      <body className="bg-black text-white">
        <TopNav />

        <div className="flex gap-2 ">
          {/* LEFT */}
          <div className="w-[20%]  md:w-[20%] ">
            <SideNav />
          </div>

          {/* RIGHT */}
          <div className="w-[80%]  md:w-[80%] ">{children}</div>
        </div>
      </body>
    </html>
  );
}
