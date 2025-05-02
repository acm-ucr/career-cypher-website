import Header from "@/components/home/header";
import AboutHeader from "@/components/about/about-header";
import HomeSupportingTxt from "@/components/home/Home";

const Home = () => {
  return (
    <div className="h-screen w-screen items-center justify-center">
      <section id="landing" className="h-screen pt-[15vh]">
        <Header />
        <HomeSupportingTxt />
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
