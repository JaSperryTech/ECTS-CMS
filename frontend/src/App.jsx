import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FileView from "./components/FileView"; // Add your file view page if needed
import VideoView from "./components/VideoView"; // Component to handle video display
import PDFView from "./components/PDFView";     // Component to handle PDF display

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/files/:folderId" element={<FileView />} />{" "}
            <Route path="/files/:folderId/video/:videoId" element={<VideoView />} />
            <Route path="/files/:folderId/pdf/:pdfId" element={<PDFView />} />
            {/* Example route for file view */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
