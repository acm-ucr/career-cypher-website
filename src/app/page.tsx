import Header from "@/components/home/header";
import AboutHeader from "@/components/about/about-header";
import Mission from "@/components/about/mission";
import Board from "@/components/board/board";

const Home = () => {
  return (
    <div className="w-screen items-center justify-center">
      <section id="landing" className="h-screen pt-[15vh]">
        <Header />
      </section>

      <section
        id="about"
        className="flex h-screen flex-col items-center justify-center pt-[15vh]"
      >
        <AboutHeader />
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
