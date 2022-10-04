import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
