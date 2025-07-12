import React from "react";
import Header from "../src/Components/Header/Header";
import Hero from "../src/Components/Hero/Hero";
import BelowHero from "../src/Components/BelowHero/BelowHero";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <BelowHero />
    </>
  );
}

export default App;
