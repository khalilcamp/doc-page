import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '../components/app-sidebar.tsx';
import SectionTwo from '@/components/MainPG/SectionTwo';
import SectionOne from '../components/MainPG/SectionOne';
import "../output.css";
import Footer from '@/components/Footer.tsx';
import Navbar from '@/components/navbar.tsx';
import { Separator } from '@/components/ui/separator.tsx';

function MainPage() {
  return (
    <>
    
    <SidebarProvider>
      <div className='flex'>
        
        <div className='flex-shrink-0 transition-transform duration-500 ease-out'>
          <AppSidebar />
        </div>
        <main className="flex-grow transition-opacity duration-500 ease-out">
          <SidebarTrigger />
          <Navbar/>
          <Separator/>
          <div className="flex flex-col ml-4 mr-4">
            <div className='mt-12'>
              <SectionOne />
              <SectionTwo />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </SidebarProvider>
    </>
    
  );
}

export default MainPage;
