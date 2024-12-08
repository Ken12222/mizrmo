import Navbar from "./Components/Navbar";
import Contact_Us from "./Pages/Contact_us";
import FAQ from "./Pages/Faq";
import Home from "./Pages/Home";
import PrivacyPolicy from "./Pages/Privacy-Policy";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terms from "./Pages/TermsConditions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" exact element={<FAQ />} />
          <Route path="/contact_us" exact element={<Contact_Us />} />
          <Route path="/privacy-policy" exact element={<PrivacyPolicy />} />
          <Route path="/termscondition" exact element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
