import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediZen - The future of doctor appointment app",
  description: "Connect with doctor anytime anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

             <Header />
             
             <main className="min-h-screen">{children}</main>
             <Toaster richColors />
             
             <footer className="bg-muted/50 py-12">

              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with 💗 by Debmallya</p>
              </div>
            </footer>

          </ThemeProvider>
       
      </body>
    </html>
    </ClerkProvider>
  );
}
