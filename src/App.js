import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
