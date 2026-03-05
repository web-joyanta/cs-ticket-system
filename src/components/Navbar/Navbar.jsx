import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  const links = <>
    <li><a>Home</a></li>
    <li><a>FAQ</a></li>
    <li><a>Changelog</a></li>
    <li><a>Blog</a></li>
    <li><a>Download</a></li>
    <li><a>Contact</a></li>
  </>
  return (
    <div className="navbar py-3 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-2">

        {/* LEFT SIDE (Logo Always Left) */}
        <div className="navbar-start">
          <a className="text-lg md:text-xl font-bold flex items-center gap-2">
            <h2>CS — Ticket System</h2>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end gap-4">

          {/* Desktop Menu (Right Side) */}
          <ul className="menu menu-horizontal hidden lg:flex text-gray-700">
            {links}
          </ul>

          {/* Coin Button (Always Visible) */}
          <button className="btn btn-sm md:btn-md border-0 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-xl px-3 md:px-6">
            <span className="mr-1"><FaPlus /></span> New Ticket
          </button>

          {/* Mobile Dropdown Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;