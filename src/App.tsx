import React from "react";
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
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/conheca" element={<ConhecaPage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="/nossa-cultura" element={<NossaCulturaPage />} />
        <Route path="/marcas" element={<MarcasPage />} />
        <Route path="/carreiras" element={<CarreirasPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
