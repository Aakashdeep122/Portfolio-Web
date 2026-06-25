import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50
      backdrop-blur-lg bg-white/5 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Portfolio<span className="text-[#efae1e]">.</span>
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#about" className="hover:text-[#efae1e] hover:scale-105 transition">
            About
          </a>

          <a href="#skills" className="hover:text-[#efae1e] hover:scale-105 transition">
            Skills
          </a>

          <a href="#experience" className="hover:text-[#efae1e] hover:scale-105 transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-[#efae1e] hover:scale-105 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-[#efae1e] hover:scale-105 transition">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;