import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import ChapterPage from "./ChapterPage.jsx";

export default function App() {
  return (
    <HashRouter>
      <div className="shell">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/chapter/1" replace />} />
            <Route path="/chapter/:num" element={<ChapterPage />} />
            <Route path="/chapter/:num/:exampleId" element={<ChapterPage />} />
            <Route path="*" element={<Navigate to="/chapter/1" replace />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
