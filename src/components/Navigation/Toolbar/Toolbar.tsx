import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './Toolbar.module.css';


const Toolbar: React.FC = () => {
    return (
        <header className={classes.Toolbar}>   
            <a href="mailTo:umais.mateen@gmail.com" >  <p> <HiOutlineMail className={classes.Icons} /> umais.mateen@gmail.com</p> </a>
            <NavigationItems />
        </header>
    );
}

export default Toolbar;