import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-bold mb-12 text-center">Experience</h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
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
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              hover:border-[#efae1e]/50
              transition-all
              duration-500
              hover:-translate-y-2
            "
          >
            {/* Glow Effect */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                bg-gradient-to-br
                from-[#efae1e]/10
                to-[#1c355c]/20
              "
            />

            <div className="relative z-10">
              <span
                className="
                  inline-block
                  px-3
                  py-1
                  rounded-full
                  bg-[#efae1e]/20
                  text-[#efae1e]
                  text-sm
                  mb-4
                "
              >
                {exp.period}
              </span>

              <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>

              <p className="text-[#efae1e] mb-4">{exp.company}</p>

              <ul className="space-y-3 text-gray-300">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#efae1e]">▹</span>
                    <span>{point}</span>
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
