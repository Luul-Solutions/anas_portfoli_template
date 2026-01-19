import React from "react";
import Hero from "../Hero";
import profileImg from '../../asssts/anas.jpg';
const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
      <Hero />
    </main>
  );
};

export default Home;
