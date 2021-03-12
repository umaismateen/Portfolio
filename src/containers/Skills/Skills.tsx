import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiDart, SiCplusplus, SiFlutter  } from 'react-icons/si';
import { DiNodejs, DiNpm, DiGit, DiDatabase, DiReact } from 'react-icons/di';
import SkillBar from '../../components/UI/Skillbar/SkillBar';
import classes from './Skills.module.css';

const Skills: React.FC = () => {
    return (
        <div className={classes.Skills} >
            <h1 >Languages</h1>
            <div  >
                <SiHtml5 title='HTML' className={classes.Icons}/>
                <SiJavascript title='JAVASCRIPT' className={classes.Icons}/>
                <SiCss3 title='CSS' className={classes.Icons}/>
                <SiDart title='DART' className={classes.Icons}/>
                <SiCplusplus title='C++' className={classes.Icons}/>

            </div>
            <h1  >Skills</h1>
            <div >
                <DiReact title='REACT.JS' className={classes.Icon}  />
                <DiNodejs title='NODE.JS' className={classes.Icon}/>
                <DiDatabase title='DATABASE' className={classes.Icon}/>
                <SiFlutter title='FLUTTER' className={classes.Icons}/>
                <DiNpm title='NPM' className={classes.Icon}/>
                <DiGit title='GIT' className={classes.Icon}/>
            </div>
            <h1 >More</h1>
            <div >
                <SkillBar>Express.js</SkillBar>
                <SkillBar>Mongoose.js</SkillBar>
                <SkillBar>JQuery</SkillBar>
                <SkillBar>Bootstrap</SkillBar>
                <SkillBar>Typescript</SkillBar>
                <SkillBar>Redux</SkillBar>
                <SkillBar>Rest Api</SkillBar>
                <SkillBar>Firebase</SkillBar>
            </div>
        </div>
    );
}

export default Skills;