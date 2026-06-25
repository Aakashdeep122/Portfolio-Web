import { skills } from "../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="py-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-12">Skills</h2>

      <div className="flex flex-wrap gap-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-[#efae1e] hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
