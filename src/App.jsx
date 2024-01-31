import React from "react";
import Header from "./components/partials/header";
import Home from "./routes/index"
import Contact from "./routes/contact";
import Footer from "./components/partials/footer";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;