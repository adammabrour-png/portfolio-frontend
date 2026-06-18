import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/admin/Dashboard";

// 🔥 Lazy loading des pages PUBLIC
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));

function App() {
  return (
    <BrowserRouter>

      {/* 🔥 Suspense GLOBAL (obligatoire pour lazy) */}
      <Suspense fallback={<div className="p-10 text-white">Loading...</div>}>

        <Routes>

          {/* PUBLIC ROUTES (lazy) */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />

          {/* 🔐 ADMIN ROUTE (NON lazy ici pour simplifier) */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>

      </Suspense>
    </BrowserRouter>
  );
}

export default App;