
import "./globals.css";
import Header from './components/header.js'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-[url(https://res.cloudinary.com/dumx42hqq/image/upload/v1740305190/5_aqp3ry.jpg)] bg-cover"
      >
        <Header/>
        
        {children}
      </body>
    </html>
  );
}
