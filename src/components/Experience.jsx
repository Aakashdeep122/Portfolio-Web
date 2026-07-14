import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="px-5 lg:px-0 lg:py-6 max-w-7xl mx-auto">
      <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-12 md:text-center">
        Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#efae1e]/50 lg:border-white/10 bg-white/5 backdrop-blur-xl p-5 md:p-6 
            transition-all duration-500 hover:border-[#efae1e]/50 md:hover:-translate-y-2 active:scale-[0.97]"
          >
            {/* Glow Effect */}
            <div className=" absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#efae1e]/10 to-[#1c355c]/20" />

            <div className="relative z-10">
              <span className=" inline-block px-3 py-1 rounded-full bg-[#efae1e]/20 text-[#efae1e] text-xs md:text-sm mb-2 md:mb-4">
                {exp.period}
              </span>

              <h3 className="text-xl md:text-2xl font-bold md:mb-2">{exp.role}</h3>

              <p className="text-[#efae1e] text-sm md:text-base mb-2 md:mb-4">
                {exp.company}
              </p>

              <ul className="space-y-1 md:space-y-3 text-sm md:text-base text-gray-300">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#efae1e] mt-0.5 md:mt-0">▹</span>

                    <span className="leading-6">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
