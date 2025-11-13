import { NavLink, Outlet, useNavigate } from "react-router";
import HighlightLetters from "./utility/HighLightLetters";

export default function Layout() {
  const navigate = useNavigate();
  const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/experience", label: "Experience" },
  { to: "/certificates", label: "Certificates" },
];

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto md:fixed top-0 z-[99] w-screen backdrop-blur-md bg-[#121212]/50 py-6 px-4 isolate">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <button onClick={redirectToHome} className="flex">
            <span className="self-center text-2xl font-heading tracking-widest text-white whitespace-nowrap hover:text-gray-200">
              <HighlightLetters text="krisnaWandhana();" indices={[0, 4, 7, 11, 12]} className="font-menu"/>
            </span>
          </button>
          <div className="flex md:order-2 fadein-bottom" >
            <a
              href="https://github.com/krisnawandhana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-9 rounded-full"
                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
                alt="github"
              />
            </a>
          </div>
          <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-xl font-extralight font-heading tracking-wider">
              {navItems.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `block pl-3 pr-4 py-2 ${
                        isActive
                          ? "text-white after:block after:mt-[0.08em] after:w-full after:h-1 after:rounded after:bg-primary"
                          : "text-white hover:text-gray-200"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="md:mt-[100px]">
        <Outlet />
      </div>

      {/* Mobile Footer */}
      <footer className="z-[999] block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-[#121212] bg-opacity-80 backdrop-blur-md backdrop-opacity-90">
        <nav className="flex justify-around py-4 text-xs">
              {navItems.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `font-heading text-base ${
                        isActive
                          ? "text-primary"
                          : "text-white hover:text-gray-200"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
        </nav>
      </footer>
    </div>
  );
}
