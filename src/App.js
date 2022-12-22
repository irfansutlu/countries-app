import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Capital from "./pages/Capital";
import SearchWord from "./pages/SearchWord";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="capital" element={<Capital />} />
        <Route path="searchword" element={<SearchWord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
