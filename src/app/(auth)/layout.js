import { Inter } from "next/font/google";
import '../../../src/app/globals.css'
import { MenubarDemowithoutloginandnotifbtn } from '@/components/ui/headerwithoutloginandnotif'
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/ui/footer";


const inter = Inter({ subsets: ["latin"] });



export default function loginpagelayout({ children }) {

  return (
    <html>
    <body>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        
        <MenubarDemowithoutloginandnotifbtn/>
        {children}
        <Toaster />
        <Footer/>
        
    </ThemeProvider>
    </body>
    </html>
    
  );
}
