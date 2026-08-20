import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full px-8 py-5 flex justify-between items-center border-b border-zinc-800 bg-[#0a0a0a]">
      <h1 className="text-2xl font-bold text-blue-500">
        StoryQuest
      </h1>

      <div className="flex gap-6 text-gray-300">
        <Link to="/" className="hover:text-blue-500 transition">
          Home
        </Link>

        <a href="#" className="hover:text-blue-500 transition">
          Explore
        </a>

        <a href="#" className="hover:text-blue-500 transition">
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;