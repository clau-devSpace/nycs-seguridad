import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Contacto from './pages/Contacto.jsx';

 export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacto"  element={<Contacto />} />
      </Route>
    </Routes>
  );
}
