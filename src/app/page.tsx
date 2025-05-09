import Header from "@/components/home/header";
import About from "@/components/about/About";
import AboutHeader from "@/components/about/about-header";
<<<<<<< HEAD
import HomeSupportingTxt from "@/components/home/Home";
=======
import Mission from "@/components/about/mission";
import Board from "@/components/board/board";
>>>>>>> 791bb8c55084ce7a07b36cb62f16ef026283dd5b

const Home = () => {
  return (
    <div className="w-screen items-center justify-center">
      <section id="landing" className="h-screen pt-[15vh]">
        <Header />
        <HomeSupportingTxt />
      </section>

      <section
        id="about"
        className="flex h-screen flex-col items-center justify-center pt-[15vh]"
      >
        <AboutHeader />
        <About />
        <Mission />
      </section>

      <section id="events" className="h-screen pt-[15vh]">
        Events
      </section>

      <section id="board" className="h-screen pt-[15vh]">
        <Board />
      </section>
    </div>
  );
};

export default Home;
