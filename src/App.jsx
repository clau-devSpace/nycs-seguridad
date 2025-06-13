import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Contacto from './pages/Contacto.jsx';
import SeguridadFisica from './pages/Servicios/SeguridadFisica.jsx';
import SeguridadElectronica from './pages/Servicios/SeguridadElectronica.jsx';

 export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacto"  element={<Contacto />} />
        <Route path="servicios/seguridad-fisica"  element={<SeguridadFisica />} />
        <Route path="servicios/seguridad-electronica"  element={<SeguridadElectronica />} />
      </Route>
    </Routes>
  );
}
