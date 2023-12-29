import React from 'react';

import "../../App.css";
import "./About.css";

import image from "../../images/selfie.JPEG";

const About = () => {
  return (
    <div className='container-2'>
        <h1 className="page-header">About Evelyn</h1>
        <div className="about-page">
            <div className="about-left">
                <p>Hello everyone, I am a full-stack web developer from a coding bootcamp. I have been coding with HTML/CSS since I was a senior in high school, but I took a break from technology to finish my Bachelor’s of Art degrees in Sociology-Organizational Studies and Psychology. My background in the social sciences and humanities inspires me to build technology that serves the greater good. My education equips me with the skills to look at a social problem from a systemic viewpoint, so I can create solutions that are sustainable, inclusive, and impactful.</p>
                <p>Other than a programmer, I am an artist and creative. I enjoy imagining new possibilities for web technology and technical inventions. I enjoy painting beautiful scenes of nature. I knit, crochet, and sew, and occasionally design clothing for these different textile-creation methods.</p>
            </div>
            <div className="about-right">
                <img src={image} alt="Evelyn standing by a mountain" />
            </div>
        </div>
    </div>
  )
}

export default About