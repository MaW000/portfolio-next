import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-maroon scrollbar overflow-x-hidden">{children}</body>
    </html>
  );
}
