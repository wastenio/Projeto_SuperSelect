import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './pages/home/index';
import { Login } from './pages/login';
// import { Feed } from './pages/feed';
import { Cadastro } from './pages/cadastro';
import { AuthContextProvider } from "./context/auth";
import React from "react";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/feed" element={<Feed />} /> */}
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;