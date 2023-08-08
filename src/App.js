import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/header/Header";
import Sport from "./pages/sport/Sport";
import Home from "./pages/home/home";
import Economic from "./pages/economic/Economic";
import Politic from "./pages/politic/Politic";
import Postdetail from "./pages/Postdetail/postdetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/economic" element={<Economic />} />
        <Route path="/politic" element={<Politic />} />
        <Route path="/:id" element={<Postdetail />} />
        <Route path="/edit/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
