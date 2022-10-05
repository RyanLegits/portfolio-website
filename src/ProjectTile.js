import restaurantImg from './restaurantImg.png';
import tiles from './projectTiles.json';

const ProjectTile = () => {
  // Create property lists from JSON data
  const titles = Array.from(tiles.map((a) => a.id));
  const title = 'Title';
  const id = 1;
  const desc =
    "This is my really cool project that I'm super proud of! Look at all the cool stuff!";
  const media = restaurantImg;
  const buttonName = 'Code';
  const buttonLink = 'https://github.com/RyanLegits/restaurantPage';

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="proj-sec-cont">
        {/* Create all project tiles dynamically fron JSON using 'map' */}
        {tiles.map((tile) => (
          <div className="proj-cont" key={tile.id}>
            <div className="proj-media-cont">
              <img
                className="proj-media"
                src={tile.media}
                alt="Project Media"
              />
            </div>
            <div className="proj-info-cont">
              <h5>{tile.title}</h5>
              {/* List out all descriptions for each project from JSON */}
              {tile.desc.map((desc) => (
                <p key={desc.id}>{desc.desc}</p>
              ))}
              {/* Create buttons with links for each project from JSON */}
              <div className="buttons-cont">
                {tile.buttons.map((buttons) => (
                  <a
                    href={buttons.buttonLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="button"
                    key={buttons.id}
                  >
                    {buttons.buttonName}
                  </a>
                ))}
              </div>
              <div className="btn-cont"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTile;
