import "./globals.css";
import { karla, workSans } from "./fonts";

import { AuthProvider } from "./context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${karla.className} ${workSans.className}`}
    >
      <body suppressHydrationWarning>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
