import blob from './blob500.png';
import button from './button150.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroText">
        <h3>Hello, my name is</h3>
        <h2>Ryan Legits</h2>
        <h3>I create dynamic websites</h3>
        <img className="button" src={button} alt="Button" />
      </div>
      <div className="heroImg">
        <img className="blob" alt="Code Block" src={blob} />
      </div>
    </div>
  );
};

export default Hero;
