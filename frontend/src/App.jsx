import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Header } from "./components/header/header";

import { GlobalStyle } from "./styles/global";

function App() {

  return (
    <Router>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path="/" />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
