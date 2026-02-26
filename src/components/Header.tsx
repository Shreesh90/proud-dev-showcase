import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-mono text-sm font-semibold tracking-tight">
          ~/your-name
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                  />
                )}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
