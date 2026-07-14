import { motion } from "framer-motion";

const stats = [
  {
    number: "1.5+",
    title: "Years Experience",
  },
  {
    number: "10+",
    title: "Projects",
  },
  {
    number: "3+",
    title: "Companies",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="px-5 lg:px-0 lg:py-6 max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-12"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
        <div>
          <p className="text-gray-400 leading-6.5 lg:leading-8">
            Frontend Developer with 1.5+ years of
            experience creating scalable,
            SEO-optimized and high-performance
            applications using React.js and Next.js.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 lg:gap-5">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 py-4 px-3 lg:p-6 rounded-2xl"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-[#efae1e]">
                {item.number}
              </h3>

              <p className="text-sm lg:text-base">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;