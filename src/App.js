import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vans from './pages/Vans/Vans';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}




