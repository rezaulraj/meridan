import { Routes, Route } from "react-router-dom";
import Layout from "./pages/components/Layout";
import HomePage from "./pages/Home/HomePage";
import "./App.css";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
