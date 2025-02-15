import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./pages/header";
import Home from "./pages/home";
import Documentation from "./pages/documentation";
import Components from "./pages/components";
import Footer from "./pages/footer";

function App() {
  return (
    <Router>
      <div className="relative bg-gradient-to-br from-cyan-700 to-black min-h-screen text-white overflow-hidden">
        {/* Shared Header */}
        <Header />
        
        {/* Define Routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/components" element={<Components />} />
            {/* Add additional routes as needed */}
          </Routes>
        </main>
        
        {/* Shared Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
