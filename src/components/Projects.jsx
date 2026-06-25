import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className=" py-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-3 hover:border-[#efae1e] transition-all duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

            <p className="text-gray-400">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
