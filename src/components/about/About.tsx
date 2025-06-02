const About = () => {
  return (
    <div className="font-poppins mx-auto flex max-w-4xl flex-col items-center justify-center gap-10 text-center text-xl">
      <div className="rounded-md border border-black bg-gradient-to-b from-blue-100 to-white px-4 py-2 text-base text-black transition-all hover:bg-black md:px-12 md:text-xl">
        ABOUT US
      </div>

      <div className="max-w-[65%]">
        <p className="pb-10">
          Established in 2023, Career Ciphers is a community dedicated to
          solving complex coding challenges on platforms like CodeForces and
          LeetCode, with a strong emphasis on finding optimal solutions. Our
          mission is to foster a collaborative environment where problem-solving
          skills are honed through rigorous practice.
        </p>

        <p className="pb-10">
          Beyond programming problems, we provide mock interview resources to
          help students excel in technical assessments with people at top-tier
          companies, including Tesla, Databricks, NASA JPL, and more.
        </p>

        <p className="pb-30">
          Our focus spans across computer science, aerospace, and electrical
          engineering, equipping students with the skills and confidence needed
          to succeed in the tech and engineering industries. At Career Ciphers,
          we believe in pushing boundaries, refining algorithms, and preparing
          the next generation of engineers and developers for the challenges
          ahead.
        </p>
      </div>
    </div>
  );
};

export default About;
