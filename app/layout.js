import "./globals.css";
import Provider from "./provider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-maroon scrollbar overflow-x-hidden">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
