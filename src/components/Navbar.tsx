import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "./Container";
import AnimatedButton from "./AnimatedButton";
import { useTheme } from "../theme/ThemeProvider";
import { Menu, Moon, Sun } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/nav_log.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/success", label: "Success" },
  { to: "/blogs", label: "Blogs" },
];

export default function Navbar(){
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  const linkCls = ({ isActive }: any) =>
    "px-3 py-2 rounded-xl2 text-sm font-semibold transition " +
    (isActive
      ? "text-[var(--text)] bg-[color-mix(in_srgb,var(--card)_88%,transparent)] border border-[var(--border)]"
      : "text-[var(--muted)] hover:text-[var(--text)] hover:bg-[color-mix(in_srgb,var(--card)_88%,transparent)]");

  const mobile = useMemo(() => (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="md:hidden glass mt-3 rounded-xl2 p-3 shadow-soft"
        >
          <div className="flex flex-col gap-2">
            {nav.map(n => (
              <NavLink key={n.to} to={n.to} className={linkCls}>{n.label}</NavLink>
            ))}
            <div className="mt-1 grid grid-cols-2 gap-2">
              <Link to="/login"><AnimatedButton variant="soft" className="w-full">Login</AnimatedButton></Link>
              <Link to="/signup"><AnimatedButton className="w-full">Enroll Now</AnimatedButton></Link>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  ), [open]);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-md border-b border-[var(--border)]">
        <Container className="py-3">
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-2">
              
              <div className="h-16 w-16 rounded-xl2 overflow-hidden shadow-soft">
                <img
                  src={logo}
                  alt="Captain Aminul Haque IT Institute"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="leading-tight">
                <div className="font-display font-extrabold">Captain Aminul Haque</div>
                <div className="text-xs text-[var(--muted)] -mt-0.5">IT Institute</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              {nav.map(n => (
                <NavLink key={n.to} to={n.to} className={linkCls}>{n.label}</NavLink>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                className="focus-ring glass rounded-xl2 p-2.5 hover:shadow-soft transition"
                aria-label="Toggle theme"
                title="Color Mode"
              >
                {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
              </button>

              <div className="hidden md:flex items-center gap-2">
                <Link to="/login"><AnimatedButton variant="ghost">Login</AnimatedButton></Link>
                <Link to="/signup"><AnimatedButton>Enroll Now</AnimatedButton></Link>
              </div>

              <button
                onClick={() => setOpen(v => !v)}
                className="md:hidden focus-ring glass rounded-xl2 p-2.5 hover:shadow-soft transition"
                aria-label="Menu"
              >
                <Menu size={18}/>
              </button>
            </div>
          </div>

          {mobile}
        </Container>
      </div>
    </div>
  );
}
