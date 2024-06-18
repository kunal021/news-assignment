import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
