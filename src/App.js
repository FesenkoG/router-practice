import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/VanDetail/VanDetail';
import Layout from './elements/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './pages/Host/HostLayout';
import HostVans from './pages/HostVans/HostVans';
import HostVanDetail from './pages/HostVanDetail/HostVanDetail';
import HostVanInfo from './pages/HostVanDetail/HostVanInfo';
import HostVanPhotos from './pages/HostVanDetail/HostVansPhotos';
import HostVanPricing from './pages/HostVanDetail/HostVanPricing';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>

          <Route path='/host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />}/>
              <Route path='photos' element={<HostVanPhotos />}/>
              <Route path='pricing' element={<HostVanPricing />}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}




