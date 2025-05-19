import Header from "@/components/home/header";
import About from "@/components/about/About";
import AboutHeader from "@/components/about/about-header";
import BoardHeader from "@/components/board/board-header";
import HomeSupportingTxt from "@/components/home/Home";
import Mission from "@/components/about/mission";
import Board from "@/components/board/board";
import Partners from "@/components/about/partners";

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
        <Partners />
      </section>

      <section id="events" className="h-screen pt-[15vh]">
        Events
      </section>

      <section id="board" className="h-screen pt-[15vh]">
        <BoardHeader />
        <Board />
      </section>
    </div>
  );
};

export default Home;
