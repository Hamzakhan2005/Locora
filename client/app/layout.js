import "./globals.css";
import { inter, notoSans } from "./fonts";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} ${notoSans.className}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
