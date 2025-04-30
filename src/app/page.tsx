import Header from "@/components/home/header";
import AboutHeader from "@/components/about/about-header";

const Home = () => {
  return (
    <div className="h-screen w-screen items-center justify-center">
      <section id="landing" className="h-screen pt-[15vh]">
        <Header />
      </section>

      <section id="about" className="h-screen pt-[15vh]">
        <AboutHeader />
        About
      </section>

      <section id="events" className="h-screen pt-[15vh]">
        Events
      </section>

      <section id="board" className="h-screen pt-[15vh]">
        Board
      </section>
    </div>
  );
};

export default Home;
