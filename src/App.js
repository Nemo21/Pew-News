import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TermPage from "./pages/TermPage";
import CategoryPage from "./pages/CategoryPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:term" element={<TermPage />}/>
        <Route path="/search/:category" element={<CategoryPage />}/>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
