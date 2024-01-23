import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TagsList from "./views/TagsList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<TagsList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
