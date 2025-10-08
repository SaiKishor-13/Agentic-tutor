import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Letters from "./pages/Letters";
import Words from "./pages/Words";
import Sentence from "./pages/Sentence";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
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
