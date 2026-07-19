import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import { SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

const whatsappMessage = encodeURIComponent(
  "Hi Aakashdeep!\n\nI visited your portfolio website and I'm interested in working with you.\n\nCould we discuss my project?",
);

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 lg:px-6 py-12 lg:py-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
        {/* LEFT */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[#efae1e] md:text-lg mb-3"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
          >
            Aakashdeep
            <br />
            Maurya
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-lg md:text-2xl text-gray-300"
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

          <p className="mt-5 text-gray-400 leading-7 max-w-xl mx-auto md:mx-0">
            Frontend Developer with 1.5+ years of experience building scalable
            and SEO-optimized web applications using React.js, Next.js and Redux
            Toolkit.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
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

          <div className=" flex justify-center md:justify-start gap-6 mt-6 md:mt-8 text-3xl">
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
              className="hover:text-sky-400 transition-all duration-300 hover:-translate-y-1"
            >
              <FaLinkedin className="cursor-pointer" />
            </a>

            <a
              href={`https://wa.me/7007072808?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-all duration-300 hover:-translate-y-1"
            >
              <FaWhatsapp className="cursor-pointer" />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="order-1 md:order-2 relative flex justify-center mb-8 md:mb-0 ">
          <motion.div
            animate={{
              background: [
                "conic-gradient(from 0deg, #1c355c, #efae1e, #1c355c)",
                "conic-gradient(from 360deg, #1c355c, #efae1e, #1c355c)",
              ],
              y: [0, -20, 0],
            }}
            transition={{
              background: {
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="w-63.5 h-63.5 md:w-87 md:h-87 rounded-full flex items-center justify-center"
          >
            <div className="w-60 h-60 md:w-83 md:h-83 rounded-full bg-slate-950 flex items-center justify-center">
              <h1 className="text-6xl sm:text-7xl md:text-[80px] font-bold">
                AM
              </h1>
            </div>
          </motion.div>

          <FaReact className="absolute top-2 left-5 md:top-5 md:left-10 text-4xl md:text-5xl text-cyan-400 animate-bounce" />

          <SiNextdotjs className="absolute top-5 right-5 md:top-10 md:right-8 text-3xl md:text-4xl text-white" />

          <SiRedux className="absolute bottom-10 left-2 md:bottom-16 md:left-5 text-3xl md:text-4xl text-purple-500" />

          <SiTailwindcss className="absolute bottom-6 right-4 md:bottom-10 md:right-10 text-3xl md:text-4xl text-sky-400" />

          <FaNodeJs className="absolute top-1/2 -right-2 md:-right-4 text-4xl md:text-5xl text-green-500 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
