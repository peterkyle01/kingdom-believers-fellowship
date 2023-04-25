import ScrollToTopButton from "./components/buttons/ScrollToTopButton";
import Footer from "./components/footer/Footer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import "./globals.css";
import { Source_Sans_Pro,Roboto } from "next/font/google";

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
  description: "kingdom believers fellowship church"
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
      <body>
        <NavbarContainer/>
        <ScrollToTopButton/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
