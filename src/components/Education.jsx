const Education = () => {
  return (
    <section className="px-5 lg:px-0 lg:py-6 max-w-7xl mx-auto">
      <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-12 md:text-center">
        Education
      </h2>

      <div className="space-y-8 px-2 lg:px-0">
        <div>
          <h3 className="text-lg md:text-2xl font-semibold">
            Master of Computer Applications
          </h3>
          <p className="text-[#efae1e]">IGNOU</p>
          <p className="text-gray-300">2025</p>
        </div>

        <div>
          <h3 className="text-lg md:text-2xl font-semibold">
            MERN Stack Development
          </h3>
          <p className="text-[#efae1e]">Ducat Institute</p>
          <p className="text-gray-300">2023</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
