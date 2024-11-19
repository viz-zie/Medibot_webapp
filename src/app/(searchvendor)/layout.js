import { Inter } from "next/font/google";
import "@/app/globals.css";
import MenubarDemo from "@/components/ui/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/ui/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Medisoter",
  description: "Your go to medical Ai assistant",
};

export default function searchvendorlayout({ children }) {

  return (
    <html>
    <body className={inter.className}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        
        <MenubarDemo/>
        {children}
        <Toaster />
        
        
        </ThemeProvider>
    </body>
    </html>
  );
}
