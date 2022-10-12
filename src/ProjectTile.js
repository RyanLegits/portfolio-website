import tiles from './projectTiles.json';
import uuid from 'react-uuid';

const ProjectTile = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="proj-sec-cont">
        {/* Create all project tiles dynamically fron JSON using 'map' */}
        {tiles.map((tile) => (
          <div className="proj-cont" key={uuid()}>
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
                <p key={uuid()}>{desc.desc}</p>
              ))}
              {/* Create buttons with links for each project from JSON */}
              <div className="buttons-cont">
                {tile.buttons.map((buttons) => (
                  <a
                    href={buttons.buttonLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="button"
                    key={uuid()}
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
