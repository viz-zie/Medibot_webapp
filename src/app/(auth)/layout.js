import { Inter } from "next/font/google";
import '../../../src/app/globals.css'
import { MenubarDemowithoutloginandnotifanddashboardbtn } from '@/components/ui/headerloginpage'
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/ui/footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Medibot",
  description: "Your go to medical Ai assistant",
};


export default function loginpagelayout({ children }) {

  return (
    <html>
    <body className={inter.className}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        
        <MenubarDemowithoutloginandnotifanddashboardbtn/>
        {children}
        <Toaster />
        <Footer/>
        
    </ThemeProvider>
    </body>
    </html>
    
  );
}
