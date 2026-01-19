import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
      <div className="container mx-auto px-6 py-4 flex items-center justify-end">

        {/* Navigation */}
        <nav className="flex gap-6 text-white font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">CV</a>
          <a href="#" className="hover:underline">Projects</a>
          <a href="#" className="hover:underline">Achievement</a>
          <a href="#" className="hover:underline">Hobbies</a>
        </nav>

      </div>
    </header>
  );
}
