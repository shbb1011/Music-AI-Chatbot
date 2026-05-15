import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full py-xl px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-md bg-surface-soft dark:bg-surface-dark-elevated border-t border-hairline dark:border-hairline-soft mt-auto">
      <div className="font-display-sm text-display-sm text-body-strong dark:text-on-dark cursor-pointer">
        Aria Music
      </div>
      <div className="font-body-sm text-body-sm text-muted dark:text-muted-soft text-center md:text-left">
        © 2024 Aria Music. Curating sound with soul.
      </div>
      <ul className="flex flex-wrap items-center justify-center gap-md md:gap-lg font-body-sm text-body-sm">
        <li><Link to="#" className="text-muted dark:text-muted-soft hover:text-body transition-colors duration-200 cursor-pointer">Privacy Policy</Link></li>
        <li><Link to="#" className="text-muted dark:text-muted-soft hover:text-body transition-colors duration-200 cursor-pointer">Terms of Service</Link></li>
        <li><Link to="#" className="text-muted dark:text-muted-soft hover:text-body transition-colors duration-200 cursor-pointer">Contact Support</Link></li>
        <li><Link to="#" className="text-muted dark:text-muted-soft hover:text-body transition-colors duration-200 cursor-pointer">About Us</Link></li>
      </ul>
    </footer>
  );
}
