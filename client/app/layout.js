import "./globals.css";
import { karla, workSans } from "./fonts";

import { AuthProvider } from "./context/AuthContext";
import { SocketProvider } from "./context/SocketContext";
import { NotificationProvider } from "./context/NotificationContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${karla.className} ${workSans.className}`}
    >
      <body suppressHydrationWarning>
        <AuthProvider>
          <SocketProvider>
            <NotificationProvider>
              <Toaster position="top-right" />
              {children}
            </NotificationProvider>
          </SocketProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
