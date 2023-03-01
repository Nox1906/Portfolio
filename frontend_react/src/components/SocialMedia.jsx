import React from 'react';
import { BsLinkedin, BsInstagram , BsGithub} from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/diogo-fernandes-a4b654130/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/Nox1906?tab=repositories" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/diogofer1906/" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>  
  </div>
);

export default SocialMedia;