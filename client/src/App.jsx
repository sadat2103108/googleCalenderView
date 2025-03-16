import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CalenderPage from "./pages/CalenderPage";

function App() {
  return (
    <Router>
      <div>
        {/* View Calendar button */}
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/calendar">
          <button>Calendar</button>
        </Link>
      </div>

      <Routes>
        <Route path="/calendar" element={<CalenderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
