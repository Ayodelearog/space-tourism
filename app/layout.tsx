import "./globals.css";
import { bellefair, barlowCondensed, barlow } from './fonts'
import { Metadata } from "next";
import Header from "./components/ui/Header";



export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Explore space in the easiest and safest way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bellefair.variable} ${barlowCondensed.variable} ${barlow.variable}`}>
      <body>
      <div className="relative z-30">
				<Header />
			</div>
        {children}
        </body>
    </html>
  );
}


