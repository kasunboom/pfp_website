import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import HomePage from './Pages/HomePage';
import VideoProduction from './Pages/VideoProduction';
import ContentMarketing from './Pages/ContentMarketing';
import MotionGraphics from './Pages/MotionGraphics';
import './App.css';
import CaseStudiesPage from './Pages/CaseStudiesPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video-production" element={<VideoProduction />} />
        <Route path="/Case-Studies" element={<CaseStudiesPage />} />
        <Route path="/content-marketing" element={<ContentMarketing />} />
        <Route path="/motion-graphics" element={<MotionGraphics/>} />
      </Routes>
    </BrowserRouter>
  );
}
