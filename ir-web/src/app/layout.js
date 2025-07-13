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
          <Link href="/events" style={{ marginRight: "1rem" }}>Events</Link>
          <Link href="/blogs" style={{ marginRight: "1rem" }}>Blogs</Link>
          <Link href="/resources" style={{ marginRight: "1rem" }}>Resources</Link>
          <Link href="/gallery" style={{ marginRight: "1rem" }}>Gallery</Link>
          <Link href="/contact" style={{ marginRight: "1rem" }}>Contact</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
