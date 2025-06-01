import Header from "@/components/home/header";
import About from "@/components/about/About";
import BoardHeader from "@/components/board/board-header";
import HomeSupportingTxt from "@/components/home/Home";
import Mission from "@/components/about/mission";
import WeeklyCalendar from "@/components/events/WeeklyCalendar";
import HowToJoin from "@/components/about/HowToJoin";
import Board from "@/components/board/board";
import Partners from "@/components/about/partners";

const Home = () => {
  return (
    <div className="flex max-w-screen flex-col items-center justify-center overflow-hidden">
      <section id="landing" className="min-h-screen pt-[15vh]">
        <Header />
        <HomeSupportingTxt />
      </section>

      <section
        id="about"
        className="flex min-h-screen flex-col items-center justify-start pt-[15vh]"
      >
        <About />
        <Mission />
        <HowToJoin />
        <Partners />
      </section>

      <section id="events" className="h-screen pt-[15vh]">
        <WeeklyCalendar />
      </section>

      <section id="board" className="min-h-screen pt-[15vh]">
        <BoardHeader />
        <Board />
      </section>
    </div>
  );
};

export default Home;
