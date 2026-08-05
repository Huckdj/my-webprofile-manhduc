import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Bùi Mạnh Đức | Full-stack Developer", template: "%s | Bùi Mạnh Đức" },
  description: "Portfolio của Bùi Mạnh Đức — Full-stack Developer chuyên React, Next.js, Node.js và ASP.NET Core.",
  keywords: ["Bùi Mạnh Đức", "Full-stack Developer", "React Developer", "Next.js", "Vietnam"],
  openGraph: { title: "Bùi Mạnh Đức | Full-stack Developer", description: "Tôi xây dựng những sản phẩm web trực quan, nhanh và dễ mở rộng.", type: "website", locale: "vi_VN" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} mesh-bg min-h-screen`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
