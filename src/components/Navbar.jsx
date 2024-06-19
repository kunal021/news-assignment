import { Bookmark, Home } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full border-b border-black mb-5 bg-white">
      <div className="flex items-center justify-between px-6 py-2">
        <Link
          to={"/"}
          className="text-center cursor-pointer text-xl md:text-3xl font-bold"
        >
          News
        </Link>
        <ul className="flex justify-center items-center gap-4 md:gap-10">
          <li className="hover:underline">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `flex justify-center items-center gap-1 ${
                  isActive ? "underline" : ""
                }`
              }
            >
              {<Home className="h-5 w-5" />} <p>Home</p>
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink
              to={"/saved"}
              className={({ isActive }) =>
                `flex justify-center items-center gap-1 ${
                  isActive ? "underline" : ""
                }`
              }
            >
              {<Bookmark fill="#000000" className="h-5 w-5" />}
              <p>Saved</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
