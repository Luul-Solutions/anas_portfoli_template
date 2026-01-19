import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-xl" />
      <div className="relative backdrop-blur-2xl bg-black/30 border-b border-white/10 shadow-2xl">
        <Navbar />
      </div>
    </header>
  );
}
