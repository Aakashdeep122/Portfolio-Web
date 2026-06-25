import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";

import { SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}

        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[#efae1e] text-lg mb-3"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Aakashdeep
            <br />
            Maurya
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-2xl text-gray-300 h-10"
          >
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "Next.js Developer",
                2000,
              ]}
              speed={50}
              deletionSpeed={150}
              repeat={Infinity}
              cursor={true}
            />
          </motion.h2>

          <p className="mt-6 text-gray-400 leading-8">
            Frontend Developer with 1.5+ years of experience building scalable
            and SEO-optimized web applications using React.js, Next.js and Redux
            Toolkit.
          </p>

          <div className="flex gap-5 mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#efae1e] bg-[#efae1e] text-black px-6 py-3 rounded-xl font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:border-white hover:-translate-y-1"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="border border-[#efae1e] px-6 py-3 rounded-xl hover:bg-white hover:text-black hover:border-white font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-5 mt-8 text-3xl">
            <a
              href="https://github.com/Aakashdeep122"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#efae1e] transition-all duration-300 hover:-translate-y-1"
            >
              <FaGithub className="cursor-pointer" />
            </a>

            <a
              href="https://www.linkedin.com/in/aakash122/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#efae1e] transition-all duration-300 hover:-translate-y-1"
            >
              <FaLinkedin className="cursor-pointer" />
            </a>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center">
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="w-87.5 h-87.5 rounded-full bg-gradient-to-r from-[#1c355c] to-[#efae1e] flex items-center justify-center"
          >
            <div className="w-82.5 h-82.5 rounded-full bg-slate-950 flex items-center justify-center">
              <h1 className="text-[80px] font-bold">AM</h1>
            </div>
          </motion.div>

          <FaReact className="absolute top-5 left-10 text-cyan-400 text-5xl animate-bounce" />

          <SiNextdotjs className="absolute top-10 right-8 text-white text-4xl" />

          <SiRedux className="absolute bottom-16 left-5 text-purple-500 text-4xl " />

          <SiTailwindcss className="absolute bottom-10 right-10 text-sky-400 text-4xl" />

          <FaNodeJs className="absolute top-1/2 -right-4 text-green-500 text-5xl animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
