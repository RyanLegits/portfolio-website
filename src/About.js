import projImg from './proj500.png';

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <div className="about-sec-cont">
        <div className="about-info">
          <h5>About</h5>
          <p>
            This is my really cool project that I'm super proud of! Look at all
            the cool stuff!
          </p>
          <p>And here is some more text to take up some room.</p>
        </div>
        <div className="proj-media">
          <img src={projImg} alt="Project Media" />
        </div>
      </div>
    </div>
  );
};

export default About;
