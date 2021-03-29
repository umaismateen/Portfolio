import React from 'react';
import image from '../../images/pp.jpg';

import classes from './About.module.css';

const About: React.FC = () => {
    return (
        <div className={classes.About} >
            <img src={image} width="200" height="200" alt="_" />
            <h3>Hi, I'm Umais </h3>
            <div className={classes.Main} >
                <h1 >Building digital <br />products, brands, and
                <br />experience.
                </h1>
                {/* <h1>Web Developer</h1> */}
            </div>
            <h4>A Computer Science Student and
                <br />
                I specialize in UI/UX Design,Responsive Web Design,
                <br />
                and Visual Development
            </h4>
            <div className={classes.button}>
                <a href="https://github.com/umaismateen?tab=repositories" target="_blank" rel="noreferrer" > <button className={classes.fill}>PROJECTS</button> </a>
            </div>
        </div>
    );
}

export default About;