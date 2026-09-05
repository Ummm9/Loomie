import type { Metadata } from "next";
import "@fontsource/bricolage-grotesque/400.css";
import "@fontsource/bricolage-grotesque/500.css";
import "@fontsource/bricolage-grotesque/600.css";
import "@fontsource/bricolage-grotesque/700.css";
import "@fontsource/bricolage-grotesque/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Loomie — Design & Creative Studio",
  description:
    "Loomie is a design studio building brand identities, digital experiences and visual systems. Selected work: Vanta, Mellow, Ping.",
  metadataBase: new URL("https://loomie-portfolio.vercel.app"),
  openGraph: {
    title: "Loomie — Design & Creative Studio",
    description:
      "Loomie is a design studio building brand identities, digital experiences and visual systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="cursor-none-desktop">
        <Loader />
        <Cursor />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
