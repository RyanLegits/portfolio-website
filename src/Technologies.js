import iconJS from './icons/iconJS.png';
import iconReact from './icons/iconReact.png';
import iconHTML from './icons/iconHTML.png';
import iconCSS from './icons/iconCSS.png';
import iconPython from './icons/iconPython.png';
import iconDjango from './icons/iconDjango.png';
import iconNPM from './icons/iconNPM.png';
import iconWebpack from './icons/iconWebpack.png';
import iconGitHub from './icons/iconGitHub.png';
import iconVSCode from './icons/iconVSCode.png';
import iconESLint from './icons/iconESLint.png';
import iconIllustrator from './icons/iconIllustrator.png';

import uuid from 'react-uuid';

const Technologies = () => {
  const icons = [
    iconJS,
    iconReact,
    iconHTML,
    iconCSS,
    iconPython,
    iconDjango,
    iconNPM,
    iconWebpack,
    iconGitHub,
    iconVSCode,
    iconESLint,
    iconIllustrator,
  ];

  return (
    <div className="technologies">
      <h2>Technologies</h2>
      <div className="technologies-cont">
        {icons.map((icon, index) => (
          <img src={icon} className="icon" alt={'icon-' + index} key={uuid()} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
