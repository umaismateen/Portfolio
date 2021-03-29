import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { IoLogoFacebook } from 'react-icons/io';
import { FaGithubSquare, FaInstagram } from 'react-icons/fa';
import classes from './Contact.module.css';


const Contact: React.FC = () => {
    return (
        <div className={classes.Contact} >
            <h1>Let's work together...</h1>
            <i> <h4>How do you take your coffee? </h4> </i>
            <div className={classes.Links} >
                <a href="https://web.facebook.com/umais.chaudary/" target="_blank" rel="noreferrer" > <h3><IoLogoFacebook className={classes.Icons} /> Facebook </h3> </a>
                <a href="https://www.instagram.com/chaudhary_umais/" target="_blank" rel="noreferrer" > <h3><FaInstagram className={classes.Icons} /> Instagram </h3></a>
                <a href="https://github.com/umaismateen" target="_blank" rel="noreferrer" > <h3><FaGithubSquare className={classes.Icons} /> Github </h3> </a>
                <a href="mailTo:umais.mateen@gmail.com" > <h3><HiOutlineMail className={classes.Icons} /> Email </h3> </a>
            </div>
            <div className={classes.button}>
                <a href="mailTo:umais.mateen@gmail.com" > <button className={classes.fill}>GET IN TOUCH!</button> </a>
            </div>
        </div>
    );
}

export default Contact;