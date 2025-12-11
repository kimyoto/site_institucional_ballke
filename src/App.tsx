import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ConhecaPage from "./pages/ConhecaPage";
import QuemSomosPage from "./pages/QuemSomosPage";
import NossaCulturaPage from "./pages/NossaCulturaPage";
import MarcasPage from "./pages/MarcasPage";
import CarreirasPage from "./pages/CarreirasPage";
import ContatoPage from "./pages/ContatoPage";
import PoliticasPage from "./pages/PoliticasPage";
import Footer from "./components/footer/Footer";

const RedirectToExternal = () => {
  useEffect(() => {
    // Redireciona o navegador para a URL externa
    window.location.href = "http://127.0.0.1:8000/admin/";
  }, []);

  return <div>Redirecionando para o Admin...</div>;
};

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<RedirectToExternal />} />
        <Route path="/conheca" element={<ConhecaPage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="/nossa-cultura" element={<NossaCulturaPage />} />
        <Route path="/marcas" element={<MarcasPage />} />
        <Route path="/carreiras" element={<CarreirasPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/politicas" element={<PoliticasPage />}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
