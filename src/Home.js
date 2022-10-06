import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Technologies from './Technologies';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
