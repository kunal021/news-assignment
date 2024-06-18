import { Flame, Home } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full border-b border-black mb-5 bg-white">
      <div className="flex items-center justify-between px-6 py-2">
        <h1 className="text-center cursor-pointer text-xl md:text-3xl font-bold">
          News
        </h1>
        <ul className="flex justify-center items-center gap-4 md:gap-10">
          <li className="hover:underline">
            <NavLink
              to={"/"}
              className="flex justify-center items-center gap-1"
            >
              {<Home className="h-4 w-4" />} <p>Home</p>
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink
              to={"/hot"}
              className="flex justify-center items-center gap-1"
            >
              {<Flame className="h-4 w-4" />}
              <p>Hot News</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
