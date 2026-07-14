import { skills } from "../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="px-5 py-8 lg:px-0 lg:py-6 max-w-7xl mx-auto">
      <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-12">Skills</h2>

      <div className="flex flex-wrap gap-3 md:gap-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-white/5 border border-white/10 rounded-xl hover:border-[#efae1e] hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
