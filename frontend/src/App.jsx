import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Letters from "./pages/Letters";
import Words from "./pages/Words";
import Sentence from "./pages/Sentence";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letters" element={<Letters />} />
        <Route path="/words" element={<Words />} />
        <Route path="/sentence" element={<Sentence />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;
