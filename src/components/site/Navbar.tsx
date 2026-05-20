import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt="SQUARE MEDICAL BILLING logo"
            className="h-14 w-auto mb-1 object-contain"
          />
          <span className="text-sm font-black tracking-[0.1em] text-white uppercase">
            SQUARE MEDICAL BILLING
          </span>
          <span className="text-[0.5rem] font-bold tracking-[0.24em] text-white/90 uppercase">
            TRUST-GROW-SUCCESS
          </span>
        </Link>
        <ul className="flex gap-1 sm:gap-2">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeProps={{ className: "bg-cyan-500/20 text-cyan-300" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
