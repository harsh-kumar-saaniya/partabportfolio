import "./globals.css";
import Navbar from "./navbar/page";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col justify-between items-center h-screen">
          <div className="flex-1"> {children}</div>
          <div className="flex justify-center w-full mb-2 md:mb-5">
            <Navbar />
          </div>
        </div>
      </body>
    </html>
  );
}
