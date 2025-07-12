import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/ui/Layout";
import Home from "../pages/Home";
import Contato from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Servicos from "../pages/Services";
import Sobre from "../pages/About";

function RouterManager() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contato" element={<Contato />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterManager;
