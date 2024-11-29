import Navbar from "./Components/Navbar";
import FAQ from "./Pages/Faq";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" exact element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
