import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Library from "./pages/Library";
import FileView from "./components/FileView"; // Add your file view page if needed

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/libaray" element={<Library />} />
            <Route path="/files/:folderId" element={<FileView />} />{" "}
            {/* Example route for file view */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
