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
            Hello, my name is Ryan Legits! I'm a full-stack web developer. I
            love building websites, especially those that can help others.
          </p>
          <p>
            I specialize in JavaScript, paired with React, on the front-end and
            Python with Django on the back-end.
          </p>
          <p>
            I've been working as a flight attendant while attending school,
            which has given me great perspective on the customer experience. I
            have also worked in IT, and I'm ready to bring my tech knowledge to
            the next level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
