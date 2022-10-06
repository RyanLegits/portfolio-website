import heroImg from './heroImg.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroText">
        <h3>Hello, my name is</h3>
        <h2>Ryan Legits</h2>
        <h3>I create dynamic websites</h3>
      </div>
      <div className="hero-img">
        <img className="blob" alt="Code Block" src={heroImg} />
      </div>
    </div>
  );
};

export default Hero;
