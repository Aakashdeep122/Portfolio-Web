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
      className="py-6 max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-5xl font-bold mb-12"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-400 leading-8">
            Frontend Developer with 1.5+ years of
            experience creating scalable,
            SEO-optimized and high-performance
            applications using React.js and Next.js.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-[#efae1e]">
                {item.number}
              </h3>

              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;