import { Routes, Route } from "react-router-dom";
import Layout from "./pages/components/Layout";
import HomePage from "./pages/Home/HomePage";
import "./App.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
      <div className="relative">
        <FloatingWhatsApp className="absolute bottom-5 left-0" />
      </div>
    </div>
  );
}

export default App;
