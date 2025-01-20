import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './output.css';
import MainPage from './pages/mainPage.tsx';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './components/app-sidebar.tsx';
import Footer from './components/Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex">
      <SidebarProvider>
        <div className="flex-shrink-0 transition-transform duration-500 ease-out">
          <AppSidebar  />
        </div>
        <main className="flex-grow transition-opacity duration-500 ease-out">
          <SidebarTrigger />
          <MainPage />
          <Footer />
        </main>
      </SidebarProvider>
    </div>
  </StrictMode>
);
