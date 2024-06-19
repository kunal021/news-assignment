import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SavedNews from "./components/SavedNews";
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/saved" element={<SavedNews />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
