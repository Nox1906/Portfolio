import React from 'react';
import { BsLinkedin, BsGoogle , BsGithub} from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>
    <div>
      <BsGithub />
    </div>
    <div>
      <BsGoogle />
    </div>
  </div>
);

export default SocialMedia;