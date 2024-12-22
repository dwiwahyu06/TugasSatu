import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#2C2A2F] via-[#3F3D42] to-[#2C2A2F] text-white shadow-md p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold text-[#D5BFBF] hover:text-[#E8D8D8] transition-transform duration-500 hover:scale-105">
          Country
        </h1>
        <nav className="mt-4 bg-gradient-to-r from-[#4E4B50] to-[#6A676C] p-3">
          <ul className="flex space-x-10 text-lg font-medium">
            <li className="text-[#D5BFBF] hover:text-[#F4EDED] transition-transform duration-500 hover:scale-110">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[#D5BFBF] hover:text-[#F4EDED] transition-transform duration-500 hover:scale-110">
              <Link to="./about">About</Link>
            </li>
            <li className="text-[#D5BFBF] hover:text-[#F4EDED] transition-transform duration-500 hover:scale-110">
              <Link to="/flag">Flags</Link>
            </li>
            <li className="text-[#D5BFBF] hover:text-[#F4EDED] transition-transform duration-500 hover:scale-110">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
