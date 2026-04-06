import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms & Booking" },
  { to: "/culture", label: "Cultural Experience" },
  { to: "/temples", label: "Temple Guide" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-card/90 backdrop-blur-md border-b border-border shadow-warm">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🪷</span>
          <span className="font-heading text-lg md:text-xl font-bold text-gradient-saffron">
            MadhurVass
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === l.to
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/rooms"
          className="hidden md:inline-flex bg-gradient-saffron text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Book Now
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in">
          <ul className="flex flex-col p-4 gap-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === l.to
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/rooms"
                onClick={() => setOpen(false)}
                className="block bg-gradient-saffron text-primary-foreground text-center px-4 py-3 rounded-lg text-sm font-semibold mt-2"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
