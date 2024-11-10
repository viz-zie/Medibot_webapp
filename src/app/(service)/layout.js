import { Inter } from "next/font/google";
import "@/app/globals.css";
import MenubarDemoServices from "@/components/ui/headerservices";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/ui/footer";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Medisoter",
  description: "Your go to medical Ai assistant",
};



export default function serviceLayout({ children }) {

  return (
    <html lang="en" >
      <body className={inter.className}>
      <main>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        
        <MenubarDemoServices/>
        {children}
        <Toaster />
        <Footer/>
        
        </ThemeProvider>
      </main>
      </body>
    </html>
  );
}
