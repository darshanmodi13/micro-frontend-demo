import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <StylesProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </>
  );
};

export default App;
