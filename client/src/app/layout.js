import { Inter } from "next/font/google";
import "./globals.css";
import { MenubarDemo } from '@/components/ui/Header'
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Medibot",
  description: "Your go to medical Ai assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      
      <MenubarDemo/>
      {children}
      <Toaster />
      <Footer/>
      
      </ThemeProvider>
      </body>
      
  
    </html>
  );
}
