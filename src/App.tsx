import React from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Achievement from "./components/pages/Achievement";
import Hobbies from "./components/pages/Hobbies";
import CV from "./components/pages/CV";
import Projects from "./components/pages/Projects";

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <Home />
      <Achievement />
      <Hobbies />
      <CV />
      <Projects />
    </div>
  );
};

export default App;
