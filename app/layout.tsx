/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { PageLoader } from "@/components/PageLoader";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Inlighn Tech",
  description: "Empowering students and young professionals with immersive internship programs in Full Stack Development, Data Science, Cyber Security, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className} bg-[#12212e] text-white`}>
          <CustomCursor />
          <PageLoader>
            <main className="relative z-10">
              {children}
            </main>
          </PageLoader>
        </body>
      </html>
    </ClerkProvider>
  );
}
