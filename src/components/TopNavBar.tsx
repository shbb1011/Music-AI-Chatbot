import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export function TopNavBar() {
  const location = useLocation();

  const isNavActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center h-16 px-margin-desktop max-w-full bg-canvas/80 backdrop-blur-md border-b border-hairline dark:border-hairline-soft">
      <div className="flex items-center gap-xl">
        <Link to="/" className="font-display-sm text-display-sm font-bold text-primary dark:text-primary-fixed cursor-pointer active:opacity-80">
          Aria Music
        </Link>
        <ul className="hidden md:flex items-center gap-lg">
          <li>
            <Link
              to="/"
              className={cn(
                "font-nav-link text-nav-link cursor-pointer active:opacity-80 hover:text-primary-active transition-colors duration-200",
                isNavActive("/") ? "text-primary dark:text-primary-active border-b-2 border-primary font-bold pb-1" : "text-body dark:text-on-dark-soft hover:text-primary"
              )}
            >
              Discover
            </Link>
          </li>
          <li>
            <Link
              to="/chat"
              className={cn(
                "font-nav-link text-nav-link cursor-pointer active:opacity-80 hover:text-primary-active transition-colors duration-200",
                isNavActive("/chat") ? "text-primary dark:text-primary-active border-b-2 border-primary font-bold pb-1" : "text-body dark:text-on-dark-soft hover:text-primary"
              )}
            >
              My Chat
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={cn(
                "font-nav-link text-nav-link cursor-pointer active:opacity-80 hover:text-primary-active transition-colors duration-200",
                isNavActive("/profile") ? "text-primary dark:text-primary-active border-b-2 border-primary font-bold pb-1" : "text-body dark:text-on-dark-soft hover:text-primary"
              )}
            >
              Features
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-md">
        <Link to="/login" className="hidden md:block font-button text-button text-body hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80">
          Log In
        </Link>
        <Link to="/register" className="bg-primary text-on-primary px-lg py-sm rounded-full font-button text-button shadow-sm hover:bg-primary-active transition-colors duration-200 cursor-pointer active:opacity-80">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
