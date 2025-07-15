import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

import TextToImagePage from "./components/TextToImageForm";
import ImageToImagePage from "./components/ImageToImageForm";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/text-to-image" element={<TextToImagePage />} />
          <Route path="/image-to-image" element={<ImageToImagePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
