import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TournamentsPage from "./pages/TournamentsPage";
import AboutPage from "./pages/AboutPage";
import RatingsPage from "./pages/RatingsPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/tournaments" element={<TournamentsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ratings" element={<RatingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
