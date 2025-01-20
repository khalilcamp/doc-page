import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './output.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage.tsx';
import MainDoc from './pages/mainDoc.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex">
        <main className="flex-grow transition-opacity duration-500 ease-out">
          <Routes>
            <Route path="https://doc-page-mu.vercel.app/" element={<MainPage />} />
            <Route path="https://doc-page-mu.vercel.app/docs/:id" element={<MainDoc />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  </StrictMode>
);
