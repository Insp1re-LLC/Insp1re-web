// app/layout.tsx or src/app/layout.tsx
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Insp1re App",
  description: "A mindful movement app experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans text-text">
        <a
          href="#main-content"
          className="absolute left-1/2 top-2 -translate-x-1/2 z-100 bg-white text-brand font-semibold px-4 py-2 rounded-full shadow-md border-2 border-brand focus:outline-none focus:ring-2 focus:ring-brand transition-all opacity-0 focus:opacity-100"
        >
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}
