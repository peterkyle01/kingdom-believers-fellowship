import ScrollToTopButton from "./components/buttons/ScrollToTopButton";
import Footer from "./components/footer/Footer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import "./globals.css";
import { Source_Sans_Pro,Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const source_sans_pro = Source_Sans_Pro({
  weight:"400",
  style:"normal",
  subsets:["latin"]
})

const roboto = Roboto({
  weight:"400",
  style:"normal",
  subsets:["latin"],
  variable:"--font-roboto"
})

export const metadata = {
  title: "Kingdom Believers Fellowship",
  description: "kingdom believers fellowship church",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${source_sans_pro.className} ${roboto.variable}`}>
      <Head>
        <meta
          name="google-site-verification"
          content="-6RekajP5rl4atnUEyCY-fqJ8z6VTwBRWBZhrDgT6EY"
        />
      </Head>
      <body>
        <NavbarContainer />
        <ScrollToTopButton />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
