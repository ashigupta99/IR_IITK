// src/app/layout.js
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <Link href="/" style={{ marginRight: "1rem" }}>Home</Link>
          <Link href="/about" style={{ marginRight: "1rem" }}>About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
