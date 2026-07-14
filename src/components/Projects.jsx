import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-5 lg:px-0 py-8 lg:py-6 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-12 md:text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-3
              hover:border-[#efae1e]
              hover:shadow-[0_0_25px_rgba(239,174,30,0.15)]
            "
          >
            <div className="flex items-center justify-between mb-3">
              <FaGithub className="text-3xl text-gray-300 group-hover:text-[#efae1e] transition-colors" />

              <FaArrowUpRightFromSquare className="text-lg text-gray-500 group-hover:text-[#efae1e] transition-colors" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-1 lg:mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm md:text-base mb-4 lg:mb-6">
              {project.desc}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-[#efae1e] text-sm font-medium">
                View Source Code
              </span>

              <span className="text-xs bg-[#efae1e]/15 text-[#efae1e] px-3 py-1 rounded-full">
                Open Source
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;