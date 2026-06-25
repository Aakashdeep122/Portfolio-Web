import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
} from "react-icons/si";

const icons = [
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
];

const symbols = [
  "</>",
  "{}",
  "()",
  "=>",
  "React",
  "Next",
  "JS",
  "CSS",
  "HTML",
  "Node",
  "Redux",
  "Git",
  "MongoDB",
  "Tailwind",
];

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Gradient Blob 1 */}
      <motion.div
        animate={{
          x: [0, 200, 0],
          y: [0, -150, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          left-20
          w-[400px]
          h-[400px]
          rounded-full
          bg-[#efae1e]/10
          blur-[120px]
        "
      />

      {/* Gradient Blob 2 */}
      <motion.div
        animate={{
          x: [0, -200, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-20
          right-20
          w-[350px]
          h-[350px]
          rounded-full
          bg-[#1c355c]/20
          blur-[120px]
        "
      />

      {/* Floating Icons */}
      {icons.map((Icon, index) => (
        <motion.div
          key={`icon-${index}`}
          className="absolute text-white/6"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            fontSize: `${40 + Math.random() * 40}px`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + index,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Icon />
        </motion.div>
      ))}

      {/* Floating Symbols */}
      {symbols.map((symbol, index) => (
        <motion.div
          key={`symbol-${index}`}
          className="
            absolute
            text-white/5
            font-bold
            select-none
          "
          style={{
            left: `${Math.random() * 95}%`,
            top: `${Math.random() * 95}%`,
            fontSize: `${20 + Math.random() * 20}px`,
          }}
          animate={{
            y: [0, -80, 0],
            rotate: [-5, 5, -5],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 12 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
