import { DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "../../tokens.css";
import "./globals.css";

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Janit Rajkarnikar — Software Engineer",
  description:
    "Software engineer. Web, mobile, backend. An index of shipped work, published papers and open-source contributions.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmMono.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
