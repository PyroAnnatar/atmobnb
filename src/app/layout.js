import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`grid place-items-center h-screen bg-teal-50 p-2`}>
        {children}
      </body>
    </html>
  );
}
