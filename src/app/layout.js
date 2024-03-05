import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "'@/components/Header";
import Footer from "'@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Kardiologiya markazi",
  description:
    "RESPUBLIKA IXTISOSLASHTIRILGAN KARDIOLOGIYA ILMIY AMALIY TIBBIYOT MARKAZINING FARG’ONA VILOYAT MINTAQAVIY FILIALI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
