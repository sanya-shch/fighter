import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../src/screens/Home";
import GamePage from "../src/screens/Game";

const NotFoundPage = lazy(() => import("./screens/NotFound"));

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />
      <Route
        path="*"
        element={
          <Suspense fallback="Loading...">
            <NotFoundPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
