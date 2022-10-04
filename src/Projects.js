import restaurantImg from './restaurantImg.png';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="proj-sec-cont">
        <div className="proj-cont">
          <div className="proj-media-cont">
            <img
              className="proj-media"
              src={restaurantImg}
              alt="Project Media"
            />
          </div>
          <div className="proj-info-cont">
            <h5>Project Name</h5>
            <p>
              This is my really cool project that I'm super proud of! Look at
              all the cool stuff!
            </p>
            <p>And here is some more text to take up some room.</p>
            <div className="btn-cont">
              <a
                href="https://github.com/RyanLegits/restaurantPage"
                rel="noopener noreferrer"
                target="_blank"
                className="button"
              >
                Code
              </a>
              <button className="button">Live Site</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
