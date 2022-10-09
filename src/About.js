import aboutImg from './aboutImg.png';

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <div className="about-sec-cont">
        <div className="about-img-cont">
          <img className="blob" src={aboutImg} alt="About" />
        </div>
        <div className="about-text-cont">
          <h5>About Me</h5>
          <p>
            This is my really cool project that I'm super proud of! Look at all
            the cool stuff!
          </p>
          <p>And here is some more text to take up some room.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
