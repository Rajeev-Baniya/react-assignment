import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointment from "./pages/appointment/Appointment";
import Gallery from "./pages/gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Appointment />} />
        <Route path="/photo-library" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
