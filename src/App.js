import React from "react";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import PageContent from "./pages/PageContent";

function App() {
  return (
    <div className="w-full">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
