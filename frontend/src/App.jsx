import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Header } from "./components/header/header";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
